import React from 'react'
import PropTypes from 'prop-types'
import StyledButton from './index.style'

class Button extends React.Component {
  render () {
    return (
      <StyledButton {...this.props}>
        {this.props.children}
      </StyledButton>
    )
  }
}

Button.propTypes = {
  color: PropTypes.oneOf['default', 'primary', 'secondary'],
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf['contained', 'outlined'],
  size: PropTypes.oneOf['sm', 'lg', 'full']
}

Button.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'contained',
  size: 'sm'
}

export {Button}
