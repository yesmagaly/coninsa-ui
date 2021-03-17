import React from 'react'
import { Box, Spinner } from 'theme-ui'

function Loading() {
  const baseStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    p: 'small',
  }

  return (
    <Box __css={baseStyles}>
      <Spinner size={24} />
    </Box>
  )
}

export default Loading
