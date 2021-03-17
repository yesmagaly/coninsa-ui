import React from 'react'
import { Box } from 'theme-ui'

const Divider = props => {
  const baseStyles = {
    border: 0,
    borderBottom: '1px solid',
    color: 'border-light',
    height: 1,
    my: 'small',
  }

  return <Box as='hr' __css={baseStyles} {...props} __themeKey='dividers' />
}

export default Divider
