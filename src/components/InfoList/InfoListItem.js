import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

const InfoListItem = ({ title, children, ...props }) => {
  const baseStyles = {
    alignItems: 'baseline',
    color: 'text-xweak',
    display: [null, 'flex'],
    mb: 'xsmall',
  }

  const titleStyles = {
    fontSize: '13px',
    mr: 'xsmall',
    width: 150,
    flexShrink: 0,
  }

  const detailStyles = {
    fontSize: '14px',
    fontWeight: 'bold',
  }

  return (
    <Box __css={baseStyles} {...props}>
      <Box __css={titleStyles}>{title}</Box>
      <Box __css={detailStyles}>{children}</Box>
    </Box>
  )
}

InfoListItem.defaultProps = {
  children: null,
}

InfoListItem.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
}

export default InfoListItem
