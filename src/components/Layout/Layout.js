import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import { ThemeProvider } from 'styled-components'
import Reboot from '../../utilities/Reboot'
import Theme from '../../utilities/Theme'
import Header from '../Header/Header'
import Announcement from '../Announcement/Announcement'
import Footer from '../Footer/Footer'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <ThemeProvider theme={Theme}>
          <>
            <Reboot />
            <Announcement />
            <Header
              siteTitle={data.site.siteMetadata.title}
              siteSubtitle={`[ Designer + Coder ]`}
            />
            {children}
            <Footer />
          </>
        </ThemeProvider>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
