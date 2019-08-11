import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Not much to see here</h1>
    <p>This is still a work in progress. For quick previewing of what is there:</p>
    <ul>
      <li><Link to="/guide/core/prep">Core Guide</Link></li>
      <li><Link to="/guide/visuals/prep">Visuals Guide</Link></li>
    </ul>
  </Layout>
)

export default IndexPage
