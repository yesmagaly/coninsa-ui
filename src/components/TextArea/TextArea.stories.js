import React from 'react'
import { action } from '@storybook/addon-actions'
import TextArea from '.'

export default {
  title: 'TextArea',
  component: TextArea,
}

export const DefaultTextArea = () => (
  <TextArea onClick={action('clicked')} placeholder='Tipo de documento' />
)
