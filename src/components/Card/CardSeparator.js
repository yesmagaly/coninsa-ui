import React from 'react'
import { Box } from 'theme-ui'

function CardSeparator(props) {
  const baseStyles = {
    borderTop: '1px solid',
    borderTopColor: 'border-light',
    height: '1px',
    mb: 'medium',
  }

  return <Box __css={baseStyles} {...props} />
}

export default CardSeparator
