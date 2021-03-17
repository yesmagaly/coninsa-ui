import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import Icon from '../Icon'

function DropDownItem({ children, main, variant, ...props }) {
  const dropDownItemStyles = {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',
    fontSize: 'small',
    py: 'small',
    whiteSpace: 'nowrap',
    color: 'dark-4',
    bg: 'transparent',
    border: 'none',
    textDecoration: 'none',

    '&:focus': {
      outline: 'none',
    },
  }

  const showMoreIconStyles = {
    position: 'absolute',
    ml: 'small',
    right: 'small',
  }

  const itemVariant = !main ? 'item' : 'main'
  const composedVariant = `${variant}.${itemVariant}`

  return (
    <Box
      variant={composedVariant}
      {...props}
      __themeKey='dropdowns'
      __css={dropDownItemStyles}
    >
      {children}
      {main && (
        <Icon
          __themeKey='dropdowns'
          variant={`${variant}.main.arrow`}
          name='arrow-down'
          sx={showMoreIconStyles}
          size='12'
        />
      )}
    </Box>
  )
}

DropDownItem.defaultProps = {
  main: false,
  variant: 'default',
}

DropDownItem.propTypes = {
  children: PropTypes.node.isRequired,
  main: PropTypes.bool,
  variant: PropTypes.string,
}

export default DropDownItem
