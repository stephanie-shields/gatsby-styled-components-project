import React from 'react'
import Layout from '../components/Layout/Layout'
import SEO from '../components/SEO/SEO'
import Hero from '../components/Hero/Hero'
import Work from '../components/Work/Work'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Hero />
    <Work />
  </Layout>
)

export default IndexPage
