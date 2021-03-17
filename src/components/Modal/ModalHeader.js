import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import { Icon } from 'ui'
import ModalContext from './ModalContext'

const ModalHeader = ({ children, variant, ...props }) => {
  const { close } = useContext(ModalContext)

  const headerStyles = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    px: 'medium',
    py: 'small',
  }

  return (
    <Box
      variant={`${variant}.header`}
      __css={headerStyles}
      __themeKey='modals'
      {...props}
    >
      {children}
      <Icon
        name='close-circled'
        sx={{ cursor: 'pointer' }}
        onClick={() => close()}
      />
    </Box>
  )
}

ModalHeader.defaultProps = {
  variant: 'default',
}

ModalHeader.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default ModalHeader
