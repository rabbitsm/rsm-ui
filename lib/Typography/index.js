import React from 'react'
import PropTypes from 'prop-types'
import StyledTypography from './index.style'

class Typography extends React.Component {
  render () {
    return (
      <StyledTypography {...this.props}>
        {this.props.children}
      </StyledTypography>
    )
  }
}

Typography.propTypes = {
  variant: PropTypes.oneOf['title', 'heading', 'subheading', 'body', 'caption'],
  color: PropTypes.oneOf['default', 'bright', 'primary', 'secondary'],
  align: PropTypes.oneOf['left', 'center', 'right'],
}

Typography.defaultProps = {
  variant: 'body',
  color: 'default',
  align: 'left'
}

export {Typography}
