import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'

const Sidebar = ({ children, ...rest }) => {
  return (
    <Box __css={{ bg: 'secondary', p: ['medium', 0], height: 'inherit' }} {...rest}>
      {children}
    </Box>
  )
}

Sidebar.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Sidebar
