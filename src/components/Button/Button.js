import React from 'react'
import PropTypes from 'prop-types'
import { Spinner, Box } from 'theme-ui'

const sizeMapStyles = {
  small: {
    minHeight: '34px',
    fontSize: 0,
    py: '8px',
    px: 'small',
    svg: {
      width: 14,
      height: 14,
    },
  },
  medium: {
    minHeight: '44px',
    minWidth: '150px',
    py: 'small',
    px: 'medium',
    svg: {
      width: 16,
      height: 16,
    },
  },

  mediumSmall: {
    fontSize: [1, 0],
    borderRadius: [22, 17],
    minHeight: [44, 34],
    minWidth: ['100%', '150px'],
    py: ['small', '8px'],
    px: ['medium', 'small'],
    svg: {
      width: [16, 14],
      height: [16, 14],
    },
  },
}

const Button = React.forwardRef(
  ({ children, fluid, justify, loading, round, size, variant, ...props }, ref) => {
    const sizeStyles = sizeMapStyles[size]
    const isSmall = size === 'small'

    const roundStyles = round
      ? {
          border: '1px solid',
          borderColor: 'primary',
          borderRadius: isSmall ? 17 : 22,
        }
      : {}

    const baseStyles = {
      border: '1px solid',
      borderColor: 'border',
      borderRadius: '4px',
      cursor: 'pointer',
      fontWeight: '500',
      display: 'inline-block',
      textTransform: 'uppercase',
      width: fluid ? '100%' : 'auto',
      verticalAlign: 'bottom',
      position: 'relative',
      lineHeight: 'input',
      minWidth: '150px',
      whiteSpace: 'nowrap',

      ...sizeStyles,
      ...roundStyles,
    }

    const iconSize = `${isSmall ? 22 : 30}px !important`

    const spinnerStyles = {
      width: iconSize,
      height: iconSize,
      position: 'absolute',
      top: '6px',
      left: '50%',
      transform: 'translateX(-50%)',
    }

    const contentStyles = {
      display: 'flex',
      justifyContent: justify,
      alignItems: 'center',
    }

    return (
      <Box
        as='button'
        ref={ref}
        __css={baseStyles}
        variant={variant}
        {...props}
        __themeKey='buttons'
      >
        {!loading && <Box sx={contentStyles}>{children}</Box>}
        {loading && <Spinner size={30} color='white' sx={spinnerStyles} />}
      </Box>
    )
  }
)

Button.defaultProps = {
  fluid: false,
  size: 'medium',
  variant: 'primary',
  round: false,
  children: false,
  loading: false,

  justify: 'center',
  sx: {},
}

Button.propTypes = {
  fluid: PropTypes.bool,
  children: PropTypes.node,
  loading: PropTypes.bool,
  round: PropTypes.bool,

  size: PropTypes.oneOf(['small', 'medium', 'large', 'mediumSmall']),
  variant: PropTypes.oneOf(['default', 'primary', 'secondary', 'plain']),

  justify: PropTypes.string,
  sx: PropTypes.shape({}),
}

Button.displayName = 'Button'

export default Button
