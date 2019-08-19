import React from "react"
import { graphql, Link } from "gatsby"
import rehypeReact from "rehype-react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Luminous } from "luminous-lightbox"

const renderAst = new rehypeReact({
  createElement: React.createElement,
}).Compiler

class GuideStepTemplate extends React.Component {
  render() {
    const step = this.props.data.markdownRemark
    const { previous, next } = this.props.pageContext

    const displayTitle = `${step.frontmatter.step} - ${step.frontmatter.title}`

    return (
      <Layout>
        <SEO title={displayTitle} />
        <h1>STEP {displayTitle.toUpperCase()}</h1>
        <nav dangerouslySetInnerHTML={{ __html: step.tableOfContents}} id="tocLinks" />
        <article>
          {renderAst(step.htmlAst)}
        </article>
        <ul className="pagniation">
          {previous && (
            <li className="page-item">
              <Link to={previous.fields.slug} rel="prev">
                {previous.frontmatter.step} - {previous.frontmatter.title}
              </Link>
            </li>
          )}
          {next && (
            <li className="page-item">
              <Link to={next.fields.slug} rel="next">
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
      htmlAst
      frontmatter {
        step
        title
      }
      tableOfContents
    }
  }
`
