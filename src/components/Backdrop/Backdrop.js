import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const Backdrop = ({ children, visible, variant, ...props }) => {
  const backdropStyles = {
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    alignContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '100vh',
    width: '100vw',
    overflow: 'auto',
    zIndex: '1000',
  }

  const layerStyles = {
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    bottom: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'black',
    transition: 'opacity 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
    zIndex: 1000,
  }

  const contentStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    zIndex: 1001,
    outline: 'none',
  }

  if (!visible) {
    return null
  }

  return (
    <Box variant={variant} __css={backdropStyles} {...props} __themeKey='backdrops'>
      <Box variant={`${variant}.layer`} __css={layerStyles} __themeKey='backdrops' />
      <Box
        variant={`${variant}.content`}
        __css={contentStyles}
        __themeKey='backdrops'
      >
        {children}
      </Box>
    </Box>
  )
}

Backdrop.defaultProps = {
  variant: 'default',
  visible: false,
}

Backdrop.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  visible: PropTypes.bool,
}
export default Backdrop
