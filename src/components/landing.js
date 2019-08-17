import React from "react"
import { Link } from "gatsby"

import { Button, Container } from "react-bootstrap"

import "./landing.scss"

export default () => (
  <Container className="landing">
    <Container>
      <h1>THE PHOENIX FLAVOUR</h1>
      <h4>A Modular Modding Guide for Skyrim Special Edition</h4>
    </Container>
    <Link to="/guide/core/prep">
      <Button className="get-started" size="lg" variant="secondary">
        GET STARTED
      </Button>
    </Link>
  </Container>
)
