import React from 'react'
import { Box } from 'theme-ui'
import PropTypes from 'prop-types'

export function Title(props) {
  const baseStyles = {
    textTransform: 'uppercase',
    fontSize: '16px',
    color: 'neutral-2',
    fontFamily: 'Oswald',
    mb: 'small',
  }

  return <Box __css={baseStyles} {...props} />
}

function CardHeader(props) {
  const baseStyles = {
    mb: 'small',
    color: 'neutral-2',
    display: 'flex',
    fontFamily: 'Oswald',
    justifyContent: 'space-between',
    textTransform: 'uppercase',
  }

  return <Box __css={baseStyles} {...props} />
}

const Card = ({ children, ...props }) => {
  return (
    <Box
      variant='default'
      {...props}
      __css={{
        borderRadius: '5px',
        boxShadow: '0px 2px 6px #0000000A',
        mb: 'medium',
        p: 'medium',
      }}
      __themeKey='cards'
    >
      {children}
    </Box>
  )
}

Card.defaultProps = {
  children: undefined,
}

Card.propTypes = {
  children: PropTypes.node,
}

Card.Header = CardHeader

export default Card
