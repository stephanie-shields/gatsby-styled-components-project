import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Slider from 'react-slick'

const StyledFooter = styled.footer`
  position: relative;
  padding: ${rem('16px')} 0;
  background-color: #161d1e;
  color: #fff;

  @media print,
    screen and (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    padding: ${rem('24px')} 0;
  }
`

const StyledSocialLinkList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`

const StyledSocialLink = styled.li``

const StyledSocialLinkIcon = styled.div``

const StyledScreenReaderOnly = styled.span``

const StyledContactInformation = styled.div``

const StyledCopyright = styled.div``

const StyledQuote = styled.div ``

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
}

const Footer = ({ siteTitle, siteSubtitle }) => (
  <StyledFooter>
    <Container hasMaxWidth>
      <Row>
        <Column xs={6}>
          <StyledSocialLinkList>
            <StyledSocialLink>
              <a
                href="https://github.com/scondrey"
                target="_blank"
                rel="noopener noreferrer"
              >
                <StyledSocialLinkIcon>

                </StyledSocialLinkIcon>
                <StyledScreenReaderOnly>GitHub</StyledScreenReaderOnly>
              </a>
            </StyledSocialLink>
            <StyledSocialLink>
              <a
                href="https://www.linkedin.com/in/stephanie-condrey/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </StyledSocialLink>
          </StyledSocialLinkList>
          <StyledContactInformation>
            <ul>
              <li>stephanie.condrey@gmail.com </li>
              <li>804.338.9270</li>
              <li>Washington DC</li>
            </ul>
          </StyledContactInformation>
          <StyledCopyright>
            Copyright © {new Date().getFullYear()}. All rights reserved.
          </StyledCopyright>
        </Column>
        <Column>
          <Slider {...settings}>
            <div>
              <StyledQuote>Initial Product Designs will be Wrong</StyledQuote>
            </div>
            <div>
              <StyledQuote>Shipping Beats Perfection</StyledQuote>
            </div>
            <div>
              <StyledQuote>Focus on Speed and Efficiency</StyledQuote>
            </div>
            <div>
              <StyledQuote>Paint with Code</StyledQuote>
            </div>
          </Slider>
        </Column>
      </Row>
    </Container>
  </StyledFooter>
)

export default Footer
