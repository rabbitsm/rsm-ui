import React from 'react'
import PropTypes from 'prop-types'
import StyledInput from './index.style'

class Input extends React.Component {
  render () {
    return (
      <StyledInput {...this.props} />
    )
  }
}

Input.propTypes = {
  color: PropTypes.oneOf['default', 'primary', 'secondary'],
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf['contained', 'outlined'],
  size: PropTypes.oneOf['sm', 'lg', 'full']
}

Input.defaultProps = {
  color: 'default',
  disabled: false,
  variant: 'contained',
  size: 'sm'
}

export {Input}
