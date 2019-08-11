import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Never should have come here</h1>
    <p>This page doesn't exist. Look elsewhere, Dragonborn.</p>
  </Layout>
)

export default NotFoundPage
