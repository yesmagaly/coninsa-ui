import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const ModalWrapper = ({ children, variant, ...props }) => {
  const wrapperStyles = {
    position: 'relative',
  }

  return (
    <Box variant={variant} __css={wrapperStyles} __themeKey='modals' {...props}>
      {children}
    </Box>
  )
}

ModalWrapper.defaultProps = {
  variant: 'default',
}

ModalWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default ModalWrapper
