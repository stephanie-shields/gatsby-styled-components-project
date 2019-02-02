import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { rem } from 'polished'
import Container from '../Grid/Container'
import Row from '../Grid/Row'
import Column from '../Grid/Column'

const StyledAnnouncement = styled.section`
  background-color: #092742;
  font-size: ${rem('14px')};
  padding: ${rem('12px')} 0;

  @media print, screen and (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    padding: ${rem('12px')} ${rem('68px')};
  }

  p {
    margin-bottom: 0;
    color: #f6f6f6;
    line-height: 1.6;
  }

  a {
    color: #f6f6f6;
    border-bottom: ${rem('1px')} solid #0E89C7;

    &:hover,
    &:focus {
      color: #0E89C7;
      text-decoration: none;
    }
  }
`;

const StyledTextUppercase = styled.span`
  text-transform: uppercase;
`;

const Announcement = () => (
  <StyledAnnouncement>
    <Container>
      <Row>
        <Column>
          <p><strong>This site is in <StyledTextUppercase>Beta</StyledTextUppercase>.</strong> For more details on project work, feel free to <Link to="/contact/">contact me</Link> or check out <a href="http://stephaniecondrey.com/" target="_blank" rel="noopener noreferrer">past work</a>.</p>
        </Column>
      </Row>
    </Container>
  </StyledAnnouncement>
)

export default Announcement
