/* eslint-disable prefer-template */
import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const SVG = ({ size, ...props }) => (
  <Box
    as='svg'
    xmlns='http://www.w3.org/2000/svg'
    width={size + ''}
    height={size + ''}
    viewBox='0 0 24 24'
    fill='currentcolor'
    {...props}
  />
)

SVG.defaultProps = {
  size: 24,
}

SVG.propTypes = {
  size: PropTypes.number,
}

const CheckboxChecked = props => (
  <SVG {...props}>
    <path d='M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z' />
  </SVG>
)

const CheckboxUnchecked = props => (
  <SVG {...props}>
    <path d='M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z' />
  </SVG>
)

const CheckboxIcon = props => (
  <>
    <CheckboxChecked
      {...props}
      __css={{
        display: 'none',
        'input:checked ~ &': {
          display: 'block',
        },
      }}
    />
    <CheckboxUnchecked
      {...props}
      __css={{
        display: 'block',
        'input:checked ~ &': {
          display: 'none',
        },
      }}
    />
  </>
)

const Checkbox = React.forwardRef(
  ({ className, sx, variant, children, ...props }, ref) => (
    <Box __css={{ position: 'relative', flexShrink: 0 }}>
      <Box
        ref={ref}
        as='input'
        type='checkbox'
        {...props}
        sx={{
          position: 'absolute',
          opacity: 0,
          zIndex: -1,
          width: 1,
          height: 1,
          overflow: 'hidden',
          top: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />
      <Box
        as={CheckboxIcon}
        aria-hidden='true'
        __themeKey='forms'
        variant={variant}
        className={className}
        sx={sx}
        __css={{
          mr: 2,
          borderRadius: 4,
          color: 'gray',
          flexShrink: 0,
          'input:checked ~ &': {
            color: 'primary',
          },
          'input:focus ~ &': {
            color: 'primary',
            bg: 'highlight',
          },
        }}
      />
      {children}
    </Box>
  )
)

Checkbox.defaultProps = {
  sx: {},
  className: '',
  variant: 'checkbox',
  children: undefined,
}

Checkbox.propTypes = {
  children: PropTypes.node,
  sx: PropTypes.shape({}),
  className: PropTypes.string,
  variant: PropTypes.string,
}

Checkbox.displayName = 'Checkbox'

export default Checkbox
