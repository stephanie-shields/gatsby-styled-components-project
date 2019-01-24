import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'

const ContactPage = () => (
  <Layout>
    <SEO title="Contact" />
    <h1>Hi from the contact page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default ContactPage
