import styled, {css} from 'styled-components'
import variables from '../Theme/Theme.variables'

const variants = {
  title: css`
    font-size: 48px;
  `,
  heading: css`
    font-size: 36px;
  `,
  subheading: css`
    font-size: 28px;
  `,
  body: css`
    font-size: 16px;
  `,
  caption: css`
    font-size: 12px;
  `
}

const colors = {
  default: css`
    color: ${variables.dark};
  `,
  bright: css`
    color: ${variables.bright};
  `,
  primary: css`
    color: ${variables.primary};
  `,
  secondary: css`
    color: ${variables.secondary};
  `,
}

const align = {
  left: css`
    text-align: left;
  `,
  center: css`
    text-align: center;
  `,
  right: css`
    text-align: right;
  `,
}

const StyledTypography = styled.p`
  text-decoration: none;
  ${props => align[props.align]};
  ${props => colors[props.color]};
  ${props => variants[props.variant]};
`

export default StyledTypography
