import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Luminous } from "luminous-lightbox"
import Pagination from "react-bootstrap/Pagination"
import GatsbyPageItem from "../components/GatsbyPageItem"

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
        <Pagination>
          {previous && (
            <GatsbyPageItem to={previous.fields.slug}>
              {previous.frontmatter.step} - {previous.frontmatter.title}
            </GatsbyPageItem>
          )}
          <GatsbyPageItem active>
              {step.frontmatter.step} - {step.frontmatter.title}
          </GatsbyPageItem>
          {next && (
            <GatsbyPageItem to={next.fields.slug}>
              {next.frontmatter.step} - {next.frontmatter.title}
            </GatsbyPageItem>
          )}
        </Pagination>
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
