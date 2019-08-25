/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Navbar from "react-bootstrap/Navbar"

import Header from "./header"
import "./layout.css"
import "./layout.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faCode } from "@fortawesome/free-solid-svg-icons"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
  <>
    <Navbar expand="lg">
      <Container>
        <Header siteTitle={data.site.siteMetadata.title} />
      </Container>
    </Navbar> 
    <Container>
      <Row>
        <Col><main>{children}</main></Col>
      </Row>
      <Row>
        <Col>
          <footer>
            © {new Date().getFullYear()} The Phoenix Flavour. All rights reserved.<br/>
            <FontAwesomeIcon icon={faBook} /> by Phoenix, <FontAwesomeIcon icon={faCode} /> by WilliamImm.
          </footer>
        </Col>
      </Row>
    </Container>
  </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
