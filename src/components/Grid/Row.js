import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  ${props =>
    props.hasGutters &&
    css`
      margin-right: calc(-${props => props.theme.gridGutterWidth} / 2);
      margin-left: calc(-${props => props.theme.gridGutterWidth} / 2);
    `}
`

Row.propTypes = {
  children: PropTypes.node.isRequired,
  hasGutters: PropTypes.bool,
}

Row.defaultProps = {
  hasGutters: true
}

export default Row
