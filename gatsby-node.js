/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// Process and create paths for Markdown pages
exports.onCreateNode = ({ node, getNode, actions}) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `content\guide`})
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
  }
}
// Now actually create the pages
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/guide-step.js`),
      context: {
        // allows access to slug as GraphQL variable
        slug: node.fields.slug,
      },
    })
  })
}
