import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import Header from '../Header/Header'

const StyledHero = styled.section`
  position: relative;

  h1 {
    font-weight: 900;
    font-size: ${rem('48px')};
    line-height: 1.2;
    color: #fff;
    // margin-bottom: ${rem('16px')};
    // color: transparent;
    // -webkit-text-stroke: 2px #fff;

    @media (min-width: ${props => props.theme.gridBreakpoints.md}) {
      font-size: ${rem('58px')};
    }

    @media (min-width: ${props => props.theme.gridBreakpoints.lg}) {
      font-size: ${rem('68px')};
    }
  }

  h2 {
    font-weight: 400;
    font-size: ${rem('33px')};
    color: #fff;
    margin-bottom: ${rem('16px')};
  }

  p {
    color: #fff;
    margin-bottom: ${rem('128px')};
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

const StyledText = styled.div`
  font-size: ${rem('25px')};
  color: #fff;
  letter-spacing: ${rem('10px')};
  margin-bottom: ${rem('8px')};
  margin-top: ${rem('56px')};
`

const StyledColorSection = styled.div`
  background-color: #fff;
  height: 100%;
  position: relative;

  &:after {
    content: '';
    display: inline-flex;
    background-color: #fff;
    width: ${rem('400px')};
    height: 100%;
    position: absolute;
    top: 0;
    right: ${rem('-400px')};
  }
`

const StyledColorPanelHeader = styled.div`
  padding: ${rem('8px')} ${rem('24px')};
  border-bottom: ${rem('1px')} solid #D8D8D8;
`

const StyledColorPanelBody = styled.div``

const StyledColorSectionTitle = styled.div`
  font-size: ${rem('18px')};
  font-weight: 600;
  margin-top:  ${rem('16px')};
`

const StyledColorLabelsAndPalette = styled.div`
  padding: ${rem('24px')} ${rem('8px')};
`

const StyledColorLabels = styled.div`
`

const StyledColorPalette = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const StyledColorButton = styled.button`
  width: ${rem('48px')};
  height: ${rem('48px')};
  background: ${props => props.color};
  border: ${rem('1px')} solid #fff;
  flex: 0 0 auto;

  &:focus {
    outline: none;
  }
  
  ${props => props.active === 'true' && css`
    border-radius: 50%;
  `}
`

const StyledScreenReaderOnly = styled.span`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0,0,0,0);
  white-space: nowrap;
  border: 0;
`

export default class Hero extends React.Component {
  
  renderColorPalette() {
    return this.props.colors.map((color, index) => {
      return (
        <StyledColorButton
          key={color.id}
          id={color.id}
          value={color.theme}
          onClick={index => {
            this.props.handleThemeChange(index);
            this.props.handleActiveIndex(index);
         }}
          active={index === this.props.activeIndex ? 'true' : 'false'}
          color={color.color}>
          <StyledScreenReaderOnly>{color.label}</StyledScreenReaderOnly>
        </StyledColorButton>
      )
    });
  };

  render() {
    return (
      <StyledHero>
        <Container hasMaxWidth>
          <Row>
            <Column xl={7}>
              <Header
                siteTitle={`Stephanie Shields`}
                siteSubtitle={`[ Designer + Coder ]`}
              />
              {/*
              <h1>
                Hello <StyledTextGradient>world,</StyledTextGradient> I work to{' '}
                deliver <StyledTextGradient>meaningful</StyledTextGradient>{' '}
                digital <StyledTextGradient>experiences</StyledTextGradient>*
              </h1>
              <h2>
                I have a passion for building meaningful digital experiences, and enjoy
                leading multi-disciplinary teams to innovate and deliver.
              </h2>
              <StyledButtonGroup>
                  <Button>How I Work</Button>
                  <Button>What I Deliver</Button>
              </StyledButtonGroup>
              */}
              <StyledText>Hello World</StyledText>
              <h1>Hello World.</h1>
              <h2>
                I like to bridge gaps in product design. From experience to design
                to development. Led by a passion for creating holistic processes for product design.
                Please say hello anytime.
              </h2>
              <p>Currently @ Booz Allen Hamilton</p>
            </Column>
            <Column xl={5}>
              <StyledColorSection>
                <StyledColorPanelHeader>
                  <StyledColorSectionTitle>
                    Choose a Theme
                  </StyledColorSectionTitle>
                </StyledColorPanelHeader>
                <StyledColorPanelBody>
                  <StyledColorLabelsAndPalette>
                    <StyledColorLabels>

                    </StyledColorLabels>
                    <StyledColorPalette>
                      {this.renderColorPalette()}
                    </StyledColorPalette>
                  </StyledColorLabelsAndPalette>
                </StyledColorPanelBody>
              </StyledColorSection>
            </Column>
          </Row>
        </Container>
      </StyledHero>
    )
  }
}
