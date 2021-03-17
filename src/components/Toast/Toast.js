import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Icon from 'ui/Icon'
import './Toast.css'

const Toast = props => {
  const { toastList, position, autoDelete, autoDeleteTime, offsetTop } = props
  const [list, setList] = useState(toastList)

  const containerStyles = offsetTop ? { top: offsetTop } : {}

  const deleteToast = id => {
    const listItemIndex = list.findIndex(e => e.id === id)
    const toastListItem = toastList.findIndex(e => e.id === id)

    list.splice(listItemIndex, 1)
    toastList.splice(toastListItem, 1)
    setList([...list])
  }

  useEffect(() => {
    setList([...toastList])
  }, [toastList])

  useEffect(() => {
    const interval = setInterval(() => {
      if (autoDelete && toastList.length && list.length) {
        deleteToast(toastList[0].id)
      }
    }, autoDeleteTime)

    return () => {
      clearInterval(interval)
    }
  }, [toastList, autoDelete, autoDeleteTime, list])

  return (
    <>
      <div className={`notification-container ${position}`} style={containerStyles}>
        {list.map(toast => (
          <div
            key={toast.id}
            className={`notification toast ${position}`}
            style={{ backgroundColor: toast.backgroundColor }}
          >
            <button type='button' onClick={() => deleteToast(toast.id)}>
              <Icon name='fa-close' />
            </button>
            <div className='notification-image'>
              <Icon name={toast.icon} />
            </div>
            <div>
              <p className='notification-title'>{toast.title}</p>
              <p className='notification-message'>{toast.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

Toast.defaultProps = {
  autoDelete: true,
  autoDeleteTime: 5000,
  offsetTop: undefined,
  position: 'bottom-right',
}

Toast.propTypes = {
  toastList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      backgroundColor: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  position: PropTypes.string,
  autoDelete: PropTypes.bool,
  autoDeleteTime: PropTypes.number,
  offsetTop: PropTypes.string,
}

export default Toast
