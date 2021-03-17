import React, { useState } from 'react'
import PropTypes from 'prop-types'

import ToastContext from './ToastContext'
import Toast from './Toast'

function ToastProvider({ children }) {
  const id = Math.floor(Math.random() * 101 + 1)
  const [list, setList] = useState([])

  const setToast = toast => {
    const toastWithId = { id, ...toast }

    setList([...list, toastWithId])
  }

  const settings = {
    list,
    setToast,
  }

  return (
    <ToastContext.Provider value={settings}>
      {children}
      <Toast toastList={list} />
    </ToastContext.Provider>
  )
}

ToastProvider.defaultProps = {
  children: undefined,
}

ToastProvider.propTypes = {
  children: PropTypes.node,
}

export default ToastProvider
