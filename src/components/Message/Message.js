import React from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

import { Icon } from 'ui'

const Message = React.forwardRef(({ children, icon, html, ...props }, ref) => {
  const baseStyles = {
    alignItems: 'center',
    display: 'flex',
    lineHeight: 1.15,
    mb: 'medium',
    fontSize: 1,
  }

  return (
    <Box ref={ref} {...props} __themeKey='messages' __css={baseStyles}>
      {icon && (
        <Icon name={icon} sx={{ flexShrink: 0, fontSize: 20, mr: 'small' }} />
      )}
      {html && <Box dangerouslySetInnerHTML={{ __html: html }} />}
      {children}
    </Box>
  )
})

Message.defaultProps = {
  children: undefined,
  html: undefined,
  icon: undefined,
}

Message.propTypes = {
  children: PropTypes.node,
  html: PropTypes.string,
  icon: PropTypes.string,
}

Message.displayName = 'Message'

export default Message
