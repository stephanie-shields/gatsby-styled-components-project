import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

const StyledHero = styled.section`
  position: relative;
  padding: ${rem('16px')} 0;

  @media print,
    screen and (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    padding: ${rem('16px')} ${rem('68px')} ${rem('64px')};
  }

  h1 {
    font-weight: 900;
    font-size: ${rem('68px')};
    line-height: 1.2;
    color: #ffc371;
    margin-bottom: ${rem('16px')};
  }

  p {
    color: #faffd1;
    margin-bottom: 0;
    font-size: ${rem('18px')};
    line-height: 1.6;
  }
`

const StyledTextGradient = styled.span`
  opacity: 1;
  transition: opacity 0.2s ease-in-out;
  color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  position: relative;
  background-image: linear-gradient(to right, #FFEDBC, #FAFFD1);
`

const Hero = () => (
  <StyledHero>
    <Container>
      <Row>
        <Column>
          <h1>
            Hello <StyledTextGradient>world,</StyledTextGradient> I work to{' '}
            deliver <StyledTextGradient>meaningful</StyledTextGradient>{' '}
            digital <StyledTextGradient>experiences</StyledTextGradient>*
          </h1>
          <p>Currently @ Booz Allen Hamilton</p>
          {/*
          <StyledButtonGroup>
              <Button>How I Work</Button>
              <Button>What I Deliver</Button>
          </StyledButtonGroup>
          */}
        </Column>
      </Row>
    </Container>
  </StyledHero>
)

export default Hero
