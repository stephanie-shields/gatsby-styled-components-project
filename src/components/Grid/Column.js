import PropTypes from 'prop-types'
import styled from 'styled-components'

const Column = styled.div`
  position: relative;
  width: 100%;
  padding-right: calc(${props => props.theme.gridGutterWidth} / 2);
  padding-left: calc(${props => props.theme.gridGutterWidth} / 2);
`

Row.propTypes = {
  children: PropTypes.node,
}

export default Column
