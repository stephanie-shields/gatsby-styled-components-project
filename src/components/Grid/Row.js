import PropTypes from 'prop-types'
import styled from 'styled-components'

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: calc(-${props => props.theme.gridGutterWidth} / 2);
  margin-left: calc(-${props => props.theme.gridGutterWidth} / 2);
`

Row.propTypes = {
  children: PropTypes.node,
}

export default Row
