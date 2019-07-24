import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;

  ${props =>
    props.hasGutters &&
    css`
      margin-right: calc(-${props => props.theme.gridGutterWidth} / 2);
      margin-left: calc(-${props => props.theme.gridGutterWidth} / 2);
    `}

  ${props =>
    props.flexDirection === 'row' &&
    css`
      flex-direction: row;
      flex-wrap: wrap;
    `}

    ${props =>
      props.flexDirection === 'column' &&
      css`
        flex-direction: column;
        flex-wrap: nowrap;
      `}
`

Row.propTypes = {
  children: PropTypes.node.isRequired,
  hasGutters: PropTypes.bool,
  flexDirection: PropTypes.oneOf(['row', 'column']),
}

Row.defaultProps = {
  hasGutters: true,
  flexDirection: 'row',
}

export default Row;
