import React, { Children, cloneElement, useState, useRef } from 'react'
import PropTypes from 'prop-types'
import { Box } from 'theme-ui'
import useClickAway from 'ui/utils/use-click-away'

function DropDown({ children, variant, ...props }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  const handleClick = () => setVisible(!visible)

  const items = Children.map(children, (item, index) => {
    const extraProps = index === 0 ? { onClick: handleClick, main: true } : {}
    return cloneElement(item, { variant, ...extraProps })
  })

  const [mainItem, ...restItems] = Children.toArray(items)

  useClickAway(ref, () => setVisible(false))

  const dropDownStyles = {
    display: 'inline-block',
    position: 'relative',
  }

  const dropDownContentStyles = {
    border: '1px solid',
    borderColor: 'border',
    borderRadius: 4,
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 5px 10px',
    bg: 'white',
    display: 'none',
    minWidth: '200px',
    position: 'absolute',
    py: 'xxsmall',
    zIndex: 90,
    right: ['-40px', '0'],

    '&.visible': {
      display: 'block',
    },

    '& button': {
      width: '100%',
    },
  }

  const visibleClassName = visible ? 'visible' : ''

  return (
    <Box
      ref={ref}
      variant={variant}
      {...props}
      __css={dropDownStyles}
      __themeKey='dropdowns'
    >
      {mainItem}
      <Box
        variant={`${variant}.content`}
        className={visibleClassName}
        onClick={() => setVisible(false)}
        __css={dropDownContentStyles}
      >
        {restItems}
      </Box>
    </Box>
  )
}

DropDown.defaultProps = {
  variant: 'default',
}

DropDown.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string,
}

export default DropDown
