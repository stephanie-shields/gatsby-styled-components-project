import React from 'react'
import styled, { css } from 'styled-components'
import { rem } from 'polished'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'
import ScrollButton from '../../images/scroll-button.svg'

const StyledHero = styled.section`
  position: relative;
  padding: ${rem('40px')} 0 ${rem('40px')};
  background-color: ${props => props.theme.primary};
`

const Select = styled.select`
  margin: 2rem 0.5rem;
  padding: 0rem 0.5rem;
  font-family: Roboto;
  font-size: 1rem;
  border: 1px solid ${props => props.theme.light};
  box-shadow: 0px 0px 0px 1px rgba(0, 0, 0, 0.1);
  background: ${props => props.theme.light};
  border-radius: 2px;
`

const StyledButton = styled.button`

  ${props =>
    props.active === 'true' &&
    css`
      background: red;
    `}
`

export const SelectOpt = styled.option`
  font-family: Roboto;
  font-size: 1rem;
`

export default class HeroAlternate extends React.Component {

  test() {
    return this.props.colors.map((color, index) => {
      return (
        <StyledButton
          key={color.id}
          id={color.id}
          value={color.theme}
          onClick={index => {
            this.props.handler(index);
            this.props.test(index);
         }}
          active={index === this.props.activeIndex ? 'true' : 'false'}>
          {color.label}
        </StyledButton>
      )
    });
  };
  
  render() {
    
    return (
      <StyledHero>
        <Container hasMaxWidth>
          <Row>
            <Column xl={6}>
            {/*
              <Select onChange={e => this.props.handleThemeChange(e)}>
                <SelectOpt value="theme1">Theme 1</SelectOpt>
                <SelectOpt value="theme2">Theme 2</SelectOpt>
                <SelectOpt value="theme3">Theme 3</SelectOpt>
              </Select>
            */}
              
              <div>
                {this.test()}
              </div>

            </Column>
          </Row>
        </Container>
      </StyledHero>
    )
  }
}
