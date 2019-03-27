import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Slider from 'react-slick'

const StyledFooter = styled.footer`
  position: relative;
  padding-bottom: ${rem('40px')};
  background-color: #161d1e;
  color: #fff;
`

const StyledSocialLinkList = styled.div`
  display: flex;
`

const StyledSocialLink = styled.a`
  width: ${rem('32px')};
  height: ${rem('32px')};
  margin-right: ${rem('8px')};

  svg {
    fill: currentColor;
  }
`

const StyledScreenReaderOnly = styled.span`
  position: absolute;
  width: ${rem('1px')};
  height: ${rem('1px')};
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border: 0;
`

const StyledContactInformation = styled.div`
  font-size: ${rem('14px')};

  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;

    li {
      margin-right: ${rem('16px')};
    }
  }
`

const StyledCopyright = styled.div`
  font-size: ${rem('14px')};
  margin-bottom: ${rem('8px')};
`

const StyledQuote = styled.blockquote`
  font-size: ${rem('20px')};
  text-align: right;

  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: ${rem('49px')};
    height: ${rem('40px')};
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3e%3cpath d='M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z' fill='%23${props => props.borderColor || 'fff'}' /%3e%3cpath d='M0 0h24v24H0z' fill='none'/%3e%3c/svg%3e");
    background-size: ${rem('32px')};
    background-position: center;
    background-repeat: no-repeat;
    border-left: ${rem('1px')} solid ${props => (props.borderColor && `#${props.borderColor}`) || '#ffffff'};
    margin-left: ${rem('16px')};
  }
`

var settings = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  cssEase: 'linear',
  autoplay: true,
  autoplaySpeed: 3500,
  arrows: false,
}

const Footer = ({ siteTitle, siteSubtitle }) => (
  <StyledFooter>
    <Container hasMaxWidth>
      <Row>
        <Column xs={6}>
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
          <StyledSocialLinkList>
            <StyledSocialLink
              href="https://github.com/scondrey"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M12 2C6.3 2 1.7 6.6 1.7 12.3c0 4.5 2.9 8.4 7 9.7.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1.1 1.6 1.1.9 1.6 2.4 1.1 3 .9.1-.7.4-1.1.7-1.4-2.3-.3-4.7-1.1-4.7-5.1 0-1.1.4-2 1.1-2.8-.3-.3-.6-1.3-.1-2.7 0 0 .9-.3 2.8 1.1.9-.3 1.7-.4 2.6-.4.9 0 1.7.1 2.6.3 2-1.3 2.8-1.1 2.8-1.1.6 1.4.2 2.5.1 2.7.7.7 1.1 1.6 1.1 2.8 0 3.9-2.4 4.8-4.7 5.1.4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4.1-1.4 7-5.2 7-9.7C22.3 6.6 17.7 2 12 2z" />
              </svg>
              <StyledScreenReaderOnly>GitHub</StyledScreenReaderOnly>
            </StyledSocialLink>
            <StyledSocialLink
              href="https://www.linkedin.com/in/stephanie-condrey/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path d="M20.5 2h-17C2.7 2 2 2.6 2 3.4v17.1c0 .9.7 1.5 1.5 1.5h17c.8 0 1.5-.6 1.5-1.4V3.4c0-.8-.7-1.4-1.5-1.4zM7.9 19H5V9.5h3V19zM6.4 8.2c-1 0-1.7-.8-1.7-1.7 0-.9.8-1.7 1.7-1.7.9 0 1.7.8 1.7 1.7.1.9-.7 1.7-1.7 1.7zM19 19h-3v-4.6c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.5V19h-3V9.5h2.8v1.3c.4-.8 1.4-1.5 2.8-1.5 3 0 3.6 2 3.6 4.5V19z" />
              </svg>
              <StyledScreenReaderOnly>GitHub</StyledScreenReaderOnly>
            </StyledSocialLink>
          </StyledSocialLinkList>
        </Column>
        <Column xs={6}>
          <Slider {...settings}>
            <StyledQuote borderColor="227FCE">
              Initial Product Designs will be Wrong
            </StyledQuote>
            <StyledQuote borderColor="E0193D">
              Shipping Beats Perfection
            </StyledQuote>
            <StyledQuote borderColor="4C52C9">
              Focus on Speed and Efficiency
            </StyledQuote>
            <StyledQuote borderColor="D62877">
              Paint with Code
            </StyledQuote>
          </Slider>
        </Column>
      </Row>
    </Container>
  </StyledFooter>
)

export default Footer
