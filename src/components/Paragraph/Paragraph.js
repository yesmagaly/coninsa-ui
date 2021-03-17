import React from 'react'
import { Box } from 'theme-ui'

function Paragraph(props) {
  const baseStyles = {
    fontSize: 2,
    mb: 'medium',
    color: 'text',
  }

  return <Box as='p' __css={baseStyles} {...props} __themeKey='paragraphs' />
}

export default Paragraph
