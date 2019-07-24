import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';
import Container from '../Grid/Container';
import Row from '../Grid/Row';
import Column from '../Grid/Column';
import Navigation from '../Navigation/Navigation';

const StyledHeader = styled.header`
  padding: ${rem('16px')} 0;
  z-index: 10;
  position: absolute;
  top: 46px;
  left: 0;
  width: 100%;

  @media print, screen and (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    padding: ${rem('24px')} 0;
    padding-left: calc(8% * 7/12 - 12px);
  }
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

const StyledNavigationAndPalette = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const StyledColorPalette = styled.div`
  display: inline-flex;
  flex-wrap: wrap;
  background-color: #161D1E;
  padding: ${rem('4px')} ${rem('2px')};
  margin-left: ${rem('16px')};
`

const StyledColorButton = styled.button`
  width: ${rem('32px')};
  height: ${rem('32px')};
  background: ${props => props.color};
  border: none;
  flex: 0 0 auto;
  margin: 0 ${rem('2px')};

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

class Header extends React.Component {
  
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
      <StyledHeader>
        <Container>
          <Row>
            <Column xs={12} md={8}>
              <StyledBranding>
                <Link to="/">
                  <StyledBrandingTitle>{this.props.siteTitle}</StyledBrandingTitle>
                  <StyledBrandingSubtitle>{this.props.siteSubtitle}</StyledBrandingSubtitle>
                </Link>
              </StyledBranding>
            </Column>
            <Column>
              <StyledNavigationAndPalette>
                <Navigation />
                <StyledColorPalette>
                  {this.renderColorPalette()}
                </StyledColorPalette>
              </StyledNavigationAndPalette>
            </Column>
          </Row>
        </Container>
      </StyledHeader>
    )
  }
}

export default Header;
