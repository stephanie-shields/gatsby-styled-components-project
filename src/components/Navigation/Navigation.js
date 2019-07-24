import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { rem } from 'polished';

const StyledNavigation = styled.div`
  display: none;
  
  @media (min-width: ${props => props.theme.gridBreakpoints.md}) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
    height: 100%;
  }

  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      float: left;
      margin: 0 ${rem('12px')};

      &:last-child {
        margin-right: 0;
      }
    }
  }

  a {
    color: #faffd1;
    text-transform: uppercase;

    &:hover,
    &:focus {
      color: #ffc371;
    }
  }
`

const Navigation = () => (
  <StyledNavigation>
    <ul>
      <li>
        <Link to="/about/">About</Link>
      </li>
      <li>
        <Link to="/contact/">Connect</Link>
      </li>
    </ul>
  </StyledNavigation>
)

export default Navigation;
