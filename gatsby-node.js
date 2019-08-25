/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Process and create paths for Markdown pages
exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
    // Extract module name from path, used for file seperation
    const module = /guide\/(\w+)/.exec(slug)[1]
    createNodeField({
      node,
      name: "module",
      value: module,
    })
  }
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({ node, getNode, basePath: `content` })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}
// Now actually create the pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // We want slug (link to where page is), plus the title (for displaying on previous/next pages)
  const result = await graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [fields___module, frontmatter___step] }
      ) {
        edges {
          node {
            fields {
              module
              slug
            }
            frontmatter {
              step
              title
            }
          }
        }
      }
    }
  `)

  let nextForModule = function(step, steps, index) {
    // end of step list obviously means no more steps
    if (index !== steps.length - 1) {
      // if the "next step" is from a different module, just return a null reference to avoid accidental crossover
      let nextStep = steps[index + 1].node
      return nextStep.fields.module === step.node.fields.module
        ? nextStep
        : null
    }
    return null
  }

  let previousForModule = function(step, steps, index) {
    // start of step list means no previous step
    if (index !== 0) {
      // if the "previous step" is from a different module, just return a null reference to avoid accidental crossover
      let previousStep = steps[index - 1].node
      return previousStep.fields.module === step.node.fields.module
        ? previousStep
        : null
    }
    return null
  }

  const steps = result.data.allMarkdownRemark.edges
  steps.forEach((step, index) => {
    // save previous & next steps if they exist for the module
    const next = nextForModule(step, steps, index)
    const previous = previousForModule(step, steps, index)

    createPage({
      path: step.node.fields.slug,
      component: path.resolve(`./src/templates/guide-step.js`),
      context: {
        // allows access to slug as GraphQL variable
        slug: step.node.fields.slug,
        previous,
        next,
      },
    })
  })

  // Now do same for MDX
  const mdxResult = await graphql(`
    {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const mdxSteps =  mdxResult.data.allMdx.edges;
  mdxSteps.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/mdx-layout.js`),
      context: {
        id: node.id,
        slug: node.fields.slug
      },
    })
  })
}
