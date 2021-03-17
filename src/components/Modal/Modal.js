import React, { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import usePortal from 'ui/utils/use-portal'
import PropTypes from 'prop-types'
import { Backdrop } from 'ui'
import ModalWrapper from './ModalWrapper'
import ModalContext from './ModalContext'

const Modal = ({ children, open, onClose, variant, ...props }) => {
  const portal = usePortal('modal')
  const [visible, setVisible] = useState(false)

  const closeModal = arg => {
    onClose && onClose(arg)
    setVisible(false)
  }

  useEffect(() => {
    setVisible(open)
  }, [open])

  const modalConfig = {
    close: closeModal,
  }

  return createPortal(
    <ModalContext.Provider value={modalConfig}>
      <Backdrop visible={visible} variant={variant}>
        <ModalWrapper variant={variant} {...props}>
          {children}
        </ModalWrapper>
      </Backdrop>
    </ModalContext.Provider>,
    portal
  )
}

Modal.defaultProps = {
  open: false,
}

Modal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
}
export default Modal
