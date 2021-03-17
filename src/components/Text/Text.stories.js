import React from 'react'
import Text from './Text'

export default {
  title: 'Text',
  component: Text,
}

export const Default = () => (
  <Text>
    Para restaurar tu contraseña, ingresa tu dirección de correo electrónico. Es
    posible que tengas que consultar tu carpeta de spam o desbloquear la dirección
    no-responder@coninsa.co
  </Text>
)

export const SmallText = () => (
  <Text textSize='small' color='grey'>
    Para restaurar tu contraseña, ingresa tu dirección de correo electrónico. Es
    posible que tengas que consultar tu carpeta de spam o desbloquear la dirección
    no-responder@coninsa.co
  </Text>
)
