import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import { Link } from 'gatsby';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Column from '../Grid/Column';

const propTypes = {
  primaryColor: PropTypes.string
};

const StyledStripes = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  right: 0;
  transform: skewY(-8deg);
  pointer-events: none;
  z-index: 0;
  bottom: 0;
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
    `
      : null}

  ${({ order }) =>
    order === 2
      ? `
        bottom: 612px;
        right: 30%;
        background: linear-gradient(90deg, rgba(224, 25, 61, 0.15), rgba(224, 25, 61, 0.3));
      `
      : null}

  ${({ order }) =>
    order === 3
      ? `
        bottom: 408px;
        left: 20%;
        background: linear-gradient(90deg, rgba(224, 25, 61, 0.2), rgba(224, 25, 61, 0.5));
      `
      : null}

  ${({ order }) =>
    order === 4
      ? `
        bottom: 204px;
        left: 40%;
        background: linear-gradient(90deg, rgba(224, 25, 61, 0.1), rgba(224, 25, 61, 0.3));
      `
      : null}

  ${({ order }) =>
    order === 5
      ? `
      right: calc(50% - 30px);
      bottom: 0;
      background: linear-gradient(90deg, rgba(224, 25, 61, 0.15), rgba(224, 25, 61, 0.25));
    `
      : null}

  ${({ order }) =>
    order === 6
      ? `
        left: calc(50% + 30px);
        bottom: 0;
        background: linear-gradient(90deg, rgba(224, 25, 61, 0.3), rgba(224, 25, 61, 0.15));
      `
      : null}
`

const StyledHero = styled.section`
  position: relative;
  overflow: hidden;
`

const StyledHeroLeft = styled.div`
  background-color: ${props => props.theme.primary};
  overflow: hidden;
  padding-left: 8%;
  padding-right: 56px;
  padding-top: 90px;
`

const StyledSubHeader = styled.div`
  font-size: ${rem('25px')};
  color: #fff;
  letter-spacing: ${rem('10px')};
  margin-bottom: ${rem('8px')};
  margin-top: ${rem('56px')};
  position: relative;
`

const StyledHeader = styled.h1`
  font-weight: 900;
  font-size: ${rem('48px')};
  line-height: 1.2;
  color: #fff;
  position: relative;

  @media (min-width: ${props => props.theme.gridBreakpoints.md}) {
    font-size: ${rem('58px')};
  }

  @media (min-width: ${props => props.theme.gridBreakpoints.lg}) {
    font-size: ${rem('68px')};
  }
`

const StyledLeadParagraph = styled.p`
  font-weight: 400;
  font-size: ${rem('33px')};
  color: #fff;
  margin-bottom: ${rem('16px')};
  position: relative;
`

const StyledParagraph = styled.p`
  color: #fff;
  margin-bottom: ${rem('128px')};
  font-size: ${rem('18px')};
  line-height: 1.6;
`

const StyledCalloutSection = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: flex-end;
`

const StyleCalloutBackground = styled.div``

const StyledArticle = styled.div`
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: rgba(0, 0, 0, 0.1);
  
  a {
    color: #fff;
    display: block;
  }

  &:last-child {
    background-color: rgba(0, 0, 0, 0.05);
  }
`

const StyledArticleType = styled.div`
  color: #fff;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 4px;
  margin-bottom: 24px;

  &:after {
    content: '';
    display: block;
    height: 2px;
    width: 50px;
    background-color: #fff;
    margin-top: 8px;
  }
`

const StyledArticleTitle = styled.div`
  color: #fff;
  font-size: 20px;
  margin-bottom: 24px;
`

const StyledArticleImage = styled.div`
  flex: 0 0 50%;

  svg {
    width: 100%;
    height: auto;
  }
`

const StyledArticleContent = styled.div`
  padding: 40px 24px 56px;
  z-index: 10;
  flex: 0 0 50%;
`

class Hero extends React.Component {
  render() {
    return (
      <StyledHero>
        <Container hasGutters={false}>
          <Row hasGutters={false}>
            <Column xl={7} hasGutters={false}>
              <StyledHeroLeft>
                <StyledStripes>
                  <StyledStripe order={1} />
                  <StyledStripe order={2} />
                  <StyledStripe order={3} />
                  <StyledStripe order={4} />
                  <StyledStripe order={5} />
                  <StyledStripe order={6} />
                </StyledStripes>
                <StyledSubHeader>Hello World</StyledSubHeader>
                <StyledHeader>I'm Unique.</StyledHeader>
                <StyledLeadParagraph>
                  I like to bridge gaps in product design. From experience to design
                  to development. Led by a passion for creating holistic processes for product design.
                  Please say hello anytime.
                </StyledLeadParagraph>
                <StyledParagraph>Currently @ Booz Allen Hamilton</StyledParagraph>
              </StyledHeroLeft>
            </Column>
            <Column xl={5} hasGutters={false}>
              <StyledCalloutSection>
                <StyleCalloutBackground />
                <StyledArticle>
                  <StyledArticleImage>
                    <svg viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
                      <g fill={this.props.primaryColor} fillRule="evenodd">
                        <circle fillOpacity=".1" cx="72" cy="72" r="72"/>
                        <circle fillOpacity=".2" cx="72" cy="72" r="58"/>
                        <circle fillOpacity=".3" cx="72" cy="72" r="44"/>
                        <circle fillOpacity=".4" cx="72" cy="72" r="30"/>
                        <circle fillOpacity=".5" cx="72" cy="72" r="16"/>
                      </g>
                    </svg>
                  </StyledArticleImage>
                  <StyledArticleContent>
                    <StyledArticleType>Process</StyledArticleType>
                    <StyledArticleTitle>Working Across Disciplines to Output Coherent Products</StyledArticleTitle>
                    <Link to="/about/">Learn More</Link>
                  </StyledArticleContent>
                </StyledArticle>
                <StyledArticle>
                  <StyledArticleContent>
                    <StyledArticleType>Tech Stack</StyledArticleType>
                    <StyledArticleTitle>Explore My Latest Favorite Tools and Technologies</StyledArticleTitle>
                    <Link to="/about/">Learn More</Link>
                  </StyledArticleContent>
                  <StyledArticleImage>
                    <svg viewBox="0 0 144 144" xmlns="http://www.w3.org/2000/svg">
                      <g fill={this.props.primaryColor} fillRule="evenodd">
                        <path fillOpacity=".05" d="M0 0h144v144H0z"/>
                        <path fillOpacity=".1" d="M0 24h144v120H0z"/>
                        <path fillOpacity=".15" d="M0 48h144v96H0z"/>
                        <path fillOpacity=".2" d="M0 72h144v72H0z"/>
                        <path fillOpacity=".25" d="M0 96h144v48H0z"/>
                        <path fillOpacity=".3" d="M0 120h144v24H0z"/>
                      </g>
                    </svg>
                  </StyledArticleImage>
                </StyledArticle>
              </StyledCalloutSection>
            </Column>
          </Row>
        </Container>
      </StyledHero>
    )
  }
}

Hero.propTypes = propTypes;
export default Hero;
