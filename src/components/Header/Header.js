import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem } from 'polished'

import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Navigation from '../Navigation/Navigation'

const StyledHeader = styled.header`
  position: relative;
  padding: ${rem('16px')} 0;

  @media print, screen and (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    padding: ${rem('24px')} 0;
  }
`

const StyledStripes = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  transform: skewY(-8deg);
  pointer-events: none;
  z-index: -10;
  bottom: ${rem('-700px')};
`

const StyledStripe = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  right: 0;
  height: ${rem('204px')};

  ${({ order }) =>
    order === 1
      ? `
      height: 5000px;
      bottom: 203px;
      background: linear-gradient(90deg, #ed4234, #881249)
    `
      : null}

  ${({ order }) =>
    order === 2
      ? `
      right: calc(50% - 30px);
      bottom: 0;
      background: linear-gradient(90deg,#fff 50%,#f1f4f7);
    `
      : null}

  ${({ order }) =>
    order === 3
      ? `
        left: calc(50% + 30px);
        bottom: 0;
        background: linear-gradient(90deg,#d2363a,#a42043);
      `
      : null}

  ${({ order }) =>
    order === 4
      ? `
        bottom: 204px;
        left: 75%;
        background: linear-gradient(90deg,#c12d3d,#ed4234);
      `
      : null}

  ${({ order }) =>
    order === 5
      ? `
        bottom: 408px;
        left: calc(50% + 410px);
        background: linear-gradient(90deg,#b6283f,#881249);
      `
      : null}

  ${({ order }) =>
    order === 6
      ? `
        bottom: 612px;
        right: 30%;
        background: linear-gradient(90deg,#d2363a,#a42043);
      `
      : null}

  ${({ order }) =>
    order === 7
      ? `
        bottom: 816px;
        background: #ed4234;
      `
      : null}
`

const StyledBranding = styled.div`
  > a {
    display: flex;
    align-items: center;

    &:hover,
    &:focus {
      text-decoration: none;
    }
  }
`

const StyledBrandingTitle = styled.div`
  font-family: 'Yellowtail', cursive;
  color: #faffd1;
  font-size: ${rem('28px')};
`

const StyledBrandingSubtitle = styled.div`
  padding: 0 ${rem('8px')};
  color: #ffc371;
  font-family: 'Montserrat', sans-serif;
  font-weight: 600;
`

const Header = ({ siteTitle, siteSubtitle }) => (
  <StyledHeader>
    <StyledStripes>
      <StyledStripe order={1} />
      <StyledStripe order={2} />
      <StyledStripe order={3} />
      <StyledStripe order={4} />
      <StyledStripe order={5} />
      <StyledStripe order={6} />
    </StyledStripes>
    <Container hasMaxWidth>
      <Row>
        <Column xs={6}>
          <StyledBranding>
            <Link to="/">
              <StyledBrandingTitle>{siteTitle}</StyledBrandingTitle>
              <StyledBrandingSubtitle>{siteSubtitle}</StyledBrandingSubtitle>
            </Link>
          </StyledBranding>
        </Column>
        <Column>
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
