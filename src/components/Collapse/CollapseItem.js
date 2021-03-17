import React from 'react'
import PropTypes from 'prop-types'

import { Box } from 'theme-ui'
import { Icon } from 'ui'

function CollapseItem({
  children,
  title,
  active,
  onActive,
  variant,
  lazyLoading,
  icons,
  ...props
}) {
  const itemStyles = {
    mb: 'small',
  }

  const headerStyles = {
    display: 'flex',
    alignItem: 'center',
    justifyContent: 'space-between',
    cursor: 'pointer',
  }

  const contentStyles = {
    overflow: 'hidden',
    height: 0,
    visibility: 'hidden',
    transition: 'height 200ms ease 0s',

    '&.expanded': {
      height: 'auto',
      visibility: 'visible',
      overflow: 'visible',
    },
  }

  const contentClassName = active ? 'expanded' : ''
  const [showMoreIcon, showLessIcon] = icons

  return (
    <Box variant={variant} {...props} __css={itemStyles}>
      <Box
        onClick={onActive}
        variant={`${variant}.header`}
        __themeKey='collapses'
        __css={headerStyles}
      >
        {title}
        <Icon
          sx={{ flexShrink: 0, ml: 'small' }}
          name={active ? showLessIcon : showMoreIcon}
          variant={`${variant}.icon`}
          __themeKey='collapses'
        />
      </Box>

      {(lazyLoading || active) && (
        <Box
          className={contentClassName}
          variant={`${variant}.content`}
          __themeKey='collapses'
          __css={contentStyles}
        >
          {children}
        </Box>
      )}
    </Box>
  )
}

CollapseItem.defaultProps = {
  lazyLoading: false,
  variant: 'default',
  icons: ['chevron-down', 'chevron-up'],
}

CollapseItem.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  onActive: PropTypes.func.isRequired,
  lazyLoading: PropTypes.bool,
  icons: PropTypes.arrayOf([]),
}

export default CollapseItem
