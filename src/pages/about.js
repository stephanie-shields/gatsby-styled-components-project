import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Row from '../components/Grid/Row'

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <Row>TEST</Row>
  </Layout>
)

export default AboutPage
