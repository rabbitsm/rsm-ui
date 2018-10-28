import React from 'react';
import PropTypes from 'prop-types'
import StyledCard from './index.style'

class Card extends React.Component {
  render () {
    return (
      <StyledCard {...this.props}>
        {this.props.children}
      </StyledCard>
    )
  }
}

Card.propTypes = {
  size: PropTypes.oneOf['none', 'container', 'center'],
  color: PropTypes.oneOf['default', 'primary', 'secondary'],
  variant: PropTypes.oneOf['contained', 'outlined'],
  width: PropTypes.string,
  height: PropTypes.string,
}

Card.defaultProps = {
  size: 'none',
  color: 'default',
  variant: 'contained',
}

export { Card }
