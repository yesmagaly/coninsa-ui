import React from 'react'
import Backdrop from '.'

export default {
  title: 'Backdrop',
  component: Backdrop,
}

export const Default = () => {
  return <Backdrop>Backdrop</Backdrop>
}

export const Visible = () => {
  return <Backdrop visible>Backdrop</Backdrop>
}
