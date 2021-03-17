import React, { useState } from 'react'
import Modal from '.'
import ModalHeader from './ModalHeader'

export default {
  title: 'Modal',
  component: Modal,
}

export const Default = () => {
  const [state, setState] = useState(false)
  const handler = () => setState(true)
  const closeHandler = () => {
    setState(false)
  }

  return (
    <div>
      <button type='button' onClick={handler}>
        Show modal
      </button>

      <Modal open={state} onClose={closeHandler}>
        <ModalHeader bg='green'>Cambiar contrasena</ModalHeader>
        <Modal.Content>Modal</Modal.Content>
      </Modal>
    </div>
  )
}
