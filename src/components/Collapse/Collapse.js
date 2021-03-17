import React, { Children, cloneElement, useState } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'

function Collapse({ children, variant, ...props }) {
  const [activeIndex, setActiveIndex] = useState()
  const activePanel = index => setActiveIndex(index)

  const items = Children.map(children, (item, index) => {
    const isActive = activeIndex === index

    return cloneElement(item, {
      active: isActive,
      onActive: () => activePanel(!isActive ? index : undefined),
      variant,
    })
  })

  return (
    <Box variant={variant} {...props} __themeKey='collapses'>
      {items}
    </Box>
  )
}

Collapse.defaultProps = {
  variant: 'default',
}

Collapse.propTypes = {
  variant: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default Collapse
