import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Luminous } from "luminous-lightbox"

class GuideStepTemplate extends React.Component {
  render() {
    const step = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    const displayTitle = `${step.frontmatter.step} - ${step.frontmatter.title}`

    return (
      <Layout>
        <SEO title={displayTitle} />
        <h1>STEP {displayTitle.toUpperCase()}</h1>
        <article dangerouslySetInnerHTML={{ __html: step.html }} />
        <ul className="pagination">
          {previous && (
            <li className="page-item">
              <Link to={previous.fields.slug} rel="prev" className="page-link">
                {previous.frontmatter.step} - {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li className="page-item">
              <Link to={next.fields.slug} rel="next" className="page-link">
                {next.frontmatter.step} - {next.frontmatter.title}
              </Link>
            </li>
          )}
        </ul>
      </Layout>
    )
  }

  // enable Luminous on images
  componentDidMount() {
    document.querySelectorAll(".gatsby-resp-image-link").forEach(image => {
      new Luminous(image)
    })
  }
}

export default GuideStepTemplate

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
