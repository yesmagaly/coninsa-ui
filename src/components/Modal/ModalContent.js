import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const ModalContent = ({ children, variant, ...props }) => {
  const contentStyles = {
    p: 'medium',
  }

  return (
    <Box
      variant={`${variant}.header`}
      __css={contentStyles}
      __themeKey='modals'
      {...props}
    >
      {children}
    </Box>
  )
}

ModalContent.defaultProps = {
  variant: 'default',
}

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default ModalContent
