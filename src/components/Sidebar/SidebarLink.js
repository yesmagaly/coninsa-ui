import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'

import { NavLink } from 'react-router-dom'
import Icon from '../Icon'

const SidebarLink = ({ children, icon, title, ...props }) => {
  const baseStyles = {
    alignItems: 'center',
    borderBottom: '1px solid rgba(255, 255, 255, 0.25)',
    color: 'white',
    display: 'flex',
    padding: '16px 35px',

    '&.active': {
      bg: 'neutral-2',
      position: 'relative',
      borderRight: '8px solid #fdc800',

      '&:before': {
        content: '""',
        borderColor: 'transparent #fdc800',
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 5px',
        display: 'block',
        height: 0,
        width: 0,
        right: '-13px',
        top: '21px',
        position: 'absolute',
      },
    },
  }

  const titleStyles = {
    fontFamily: 'Oswald',
    textTransform: 'uppercase',
  }

  return (
    <Box as={NavLink} __css={baseStyles} activeClassName='active' {...props}>
      {icon && <Icon name={icon} mr='11px' />}
      <Box __css={titleStyles}>
        {title}
        {children}
      </Box>
    </Box>
  )
}

SidebarLink.defaultProps = {
  children: undefined,
  icon: undefined,
  title: undefined,
}

SidebarLink.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  children: PropTypes.node,
}

export default SidebarLink
