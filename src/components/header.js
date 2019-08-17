import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import { Container, Navbar } from "react-bootstrap"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <Navbar expand="lg">
    <Container>
      <header>
        <div>
          <h1>
            <Link to="/" className="link">
              {siteTitle}
            </Link>
          </h1>
        </div>
      </header>
    </Container>
  </Navbar>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
