import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {
  const step = data.markdownRemark
  return (
    <Layout>
      <SEO title={step.frontmatter.title} />
      <article dangerouslySetInnerHTML={{ __html: step.html }} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
