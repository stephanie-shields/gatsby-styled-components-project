import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const getColumnWidth = value => {
  if (!value) return

  let flexBasis = (value / 12) * 100
  return `flex-basis: ${flexBasis}%; max-width: ${flexBasis}%; flex-grow: 0; flex-shrink: 0;`
}

const Column = styled.div`
  position: relative;
  width: 100%;
  ${({ xs }) => (xs ? getColumnWidth(xs) : `flex-basis: 100%; max-width: 100%; flex-grow: 1; flex-basis: 0;`)};

  @media (min-width: ${props => props.theme.gridBreakpoints.sm}) {
    ${({ sm }) => sm && getColumnWidth(sm)};
  }

  @media (min-width: ${props => props.theme.gridBreakpoints.md}) {
    ${({ md }) => md && getColumnWidth(md)};
  }

  @media (min-width: ${props => props.theme.gridBreakpoints.lg}) {
    ${({ lg }) => lg && getColumnWidth(lg)};
  }

  @media (min-width: ${props => props.theme.gridBreakpoints.xl}) {
    ${({ xl }) => xl && getColumnWidth(xl)};
  }

  ${props =>
    props.hasGutters &&
    css`
      padding-right: calc(${props => props.theme.gridGutterWidth} / 2);
      padding-left: calc(${props => props.theme.gridGutterWidth} / 2);
    `}
`

Column.propTypes = {
  children: PropTypes.node.isRequired,
  hasGutters: PropTypes.bool,
}

Column.defaultProps = {
  hasGutters: true,
}

export default Column;
