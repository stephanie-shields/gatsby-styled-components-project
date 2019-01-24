import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'

const Container = styled.div`
  width: 100%;
  padding-right: calc(${props => props.theme.gridGutterWidth} / 2);
  padding-left: calc(${props => props.theme.gridGutterWidth} / 2);
  margin-right: auto;
  margin-left: auto;

  ${props =>
    props.hasMaxWidth &&
    css`
      @media (min-width: ${props => props.theme.gridBreakpoints.sm}) {
        max-width: ${props => props.theme.gridContainers.sm};
      }

      @media (min-width: ${props => props.theme.gridBreakpoints.md}) {
        max-width: ${props => props.theme.gridContainers.md};
      }

      @media (min-width: ${props => props.theme.gridBreakpoints.lg}) {
        max-width: ${props => props.theme.gridContainers.lg};
      }

      @media (min-width: ${props => props.theme.gridBreakpoints.xl}) {
        max-width: ${props => props.theme.gridContainers.xl};
      }
    `}
`

Container.propTypes = {
  children: PropTypes.node.isRequired,
  hasMaxWidth: PropTypes.bool,
}

Container.defaultProps = {
  hasMaxWidth: false,
}

export default Container
