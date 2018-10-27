import styled, {css} from 'styled-components'
import variables from '../Theme/Theme.variables'

const inputStyles = {
  default: css`
    background-color: ${variables.default};
    color: #000000;
    border: 1px solid ${variables.primary};
  `,
  primary: css`
    background-color: ${variables.primary};
    color: ${variables.bright};
    border: 1px solid ${variables.primary};
  `,
  secondary: css`
    background-color: ${variables.secondary};
    color: ${variables.bright};
    border: 1px solid ${variables.secondary};
  `
}

const inputStylesOutline = {
  default: css``,
  primary: css`
    background-color: transparent;
    color: ${variables.primary};
    border: 1px solid ${variables.primary};
  `,
  secondary: css`
    background-color: transparent;
    color: ${variables.secondary};
    border: 1px solid ${variables.secondary};
  `
}

const sizes = {
  sm: css`
    padding: 5px 10px;
    font-size: 16px;
    line-height: 18px;
  `,
  lg: css`
    padding: 7px 15px;
    font-size: 22px;
    line-height: 25px;
  `,
  full: css`
    padding: 10px 25px;
    font-size: 22px;
    line-height: 25px;
    width: 100%;
  `
}

const StyledInput = styled.input`
  border: none;
  border-radius: ${variables.curve};
  outline: none;
  text-decoration: none;
  box-shadow: ${variables.shadow};
  ${props => sizes[props.size]};
  ${props => props.variant === 'contained' ? inputStyles[props.color] : inputStylesOutline[props.color]};
  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`

export default StyledInput
