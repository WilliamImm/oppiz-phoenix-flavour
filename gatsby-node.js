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
    if (index !== steps.length - 1) {
      let nextStep = steps[index + 1].node;
      return nextStep.fields.module === step.node.fields.module ? nextStep : null;
    }
    return null
  }

  const steps = result.data.allMarkdownRemark.edges
  steps.forEach((step, index) => {
    // save previous & next steps if they exist for the module
    const next = nextForModule(step, steps, index);
    const previous = index === 0 ? null : steps[index - 1].node

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
}
