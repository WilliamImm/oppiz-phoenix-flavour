import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data, pageContext }) => {
  const step = data.markdownRemark
  const { previous, next } = pageContext

  const displayTitle=`${step.frontmatter.step} - ${step.frontmatter.title}`

  return (
    <Layout>
      <SEO title={displayTitle} />
      <h1>Step {displayTitle}</h1>
      <article dangerouslySetInnerHTML={{ __html: step.html }} />
      <ul class="pagniation">
          {previous && (
            <li class="page-item">
              <Link to={previous.fields.slug} rel="prev">{previous.frontmatter.step} - {previous.frontmatter.title}</Link>
            </li>
          )}
          {next && (
            <li class="page-item">
              <Link to={next.fields.slug} rel="next">{next.frontmatter.step} - {next.frontmatter.title}</Link>
            </li>
          )}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        step
        title
      }
    }
  }
`
