import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Navigation from '../Navigation/Navigation'

const StyledHeader = styled.header``

const StyledBranding = styled.div``

const Header = ({ siteTitle, siteSubtitle }) => (
  <StyledHeader>
    <Container hasMaxWidth>
      <Row>
        <Column xs={6}>
          <StyledBranding>
            <Link to="/">
              {siteTitle}
              {siteSubtitle}
            </Link>
          </StyledBranding>
        </Column>
        <Column md={4}>
          <Navigation />
        </Column>
      </Row>
    </Container>
  </StyledHeader>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteSubtitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteSubtitle: ``,
}

export default Header
