import React from 'react'
import styled, {css} from 'styled-components'
import variables from '../Theme/Theme.variables'

const sizes = {
  none: css``,
  center: css`
    margin: auto;
  `,
  container: css`
    width: 80%;
    margin: 0 auto;
  `
}

const colors = {
  default: css`
    background-color: ${variables.default};
    color: #000000;
  `,
  primary: css`
    background-color: ${variables.primary};
    color: ${variables.bright};
  `,
  secondary: css`
    background-color: ${variables.secondary};
    color: ${variables.bright};
  `
}

const outline = {
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

const StyledCard = styled.div`
  padding: 10px;
  overflow: hidden;
  box-shadow: ${variables.shadow};
  border-radius: ${variables.curve};
  width: ${props => props.width} !important;
  height: ${props => props.height} !important;
  text-align: ${props => props.align};
  ${props => sizes[props.size]};
  ${props => props.variant === 'contained' ? colors[props.color] : outline[props.color]};
`;

export default StyledCard;