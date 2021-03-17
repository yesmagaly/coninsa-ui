import React from 'react'
import NumberFormat from 'react-number-format'
import { Box } from 'theme-ui'

const baseInputStyles = {
  display: 'block',
  width: '100%',
  p: 'small',
  appearance: 'none',
  fontSize: 'inherit',
  lineHeight: 'input',
  border: '1px solid',
  borderColor: 'iron',
  borderRadius: 4,
  bg: 'transparent',
  color: 'inherit',
}

const InputMask = props => (
  <Box as={NumberFormat} __css={baseInputStyles} {...props} />
)

export default InputMask
