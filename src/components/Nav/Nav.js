import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import coninsaIcon from 'assets/icons/coninsa.svg'

const Nav = ({ children, brandTo, variant, ...props }) => {
  const navStyles = {
    boxShadow: '0px 2px 6px #0000000A',
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  }

  const contentStyles = {
    p: 'medium',
    display: 'flex',
    width: 'xlarge',
    justifyContent: 'space-between',
  }

  const brandStlyes = {
    height: [45, 50],
    width: [146, 162],
  }

  const linksSectionStyles = {
    display: 'flex',
    alignItems: 'center',
  }

  return (
    <Box variant={variant} {...props} __css={navStyles} __themeKey='navs'>
      <Box variant={`${variant}.content`} __css={contentStyles} __themeKey='navs'>
        <Box as='a' target='_blank' href={brandTo}>
          <Box as='img' __css={brandStlyes} src={coninsaIcon} />
        </Box>
        <Box __css={linksSectionStyles}>{children}</Box>
      </Box>
    </Box>
  )
}

Nav.defaultProps = {
  brandTo: '/',
  variant: 'default',
}

Nav.propTypes = {
  brandTo: PropTypes.string,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default Nav
