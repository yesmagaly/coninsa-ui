import React from 'react'
import { Link } from 'react-router-dom'
import { Box } from 'theme-ui'

function NavLink(props) {
  const baseStyles = {
    font: '18px/24px Roboto',
    color: ['white', 'text'],
  }

  return <Box as={Link} __css={baseStyles} {...props} />
}

export default NavLink
