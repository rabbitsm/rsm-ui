import styled, {css} from 'styled-components'
import variables from '../Theme/Theme.variables'

const buttonStyles = {
  default: css``,
  primary: css`
    background-color: ${variables.primary};
    color: ${variables.bright};
  `,
  secondary: css`
    background-color: ${variables.secondary};
    color: ${variables.bright};
  `
}

const buttonStylesOutline = {
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

const StyledButton = styled.button`
  border: none;
  border-radius: ${variables.curve};
  text-decoration: none;
  cursor: pointer;
  box-shadow: ${variables.shadow};
  ${props => sizes[props.size]};
  ${props => props.variant === 'contained' ? buttonStyles[props.color] : buttonStylesOutline[props.color]};

  &:disabled {
    opacity: 0.5;
    cursor: no-drop;
  }
`

export default StyledButton