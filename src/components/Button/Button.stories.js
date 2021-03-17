import React from 'react'
import { action } from '@storybook/addon-actions'
import Button from '.'

import { ReactComponent as GoogleIcon } from '../../assets/icons/google.svg'
import { ReactComponent as FacebookIcon } from '../../assets/icons/facebook.svg'
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg'
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg'

export default {
  title: 'Button',
  component: Button,
}

export const Default = () => (
  <Button onClick={action('clicked')}>Iniciar session</Button>
)

export const Primary = () => (
  <Button primary onClick={action('clicked')}>
    Iniciar session
  </Button>
)

export const Round = () => (
  <Button round onClick={action('clicked')}>
    Iniciar session
  </Button>
)

export const RoundPrimary = () => (
  <Button primary round onClick={action('clicked')}>
    Iniciar session
  </Button>
)

export const Fluid = () => <Button fluid>Fluid</Button>

export const SmallButton = () => (
  <Button size='small' round primary>
    Small
  </Button>
)

export const LabelPositionIcon = () => (
  <>
    <Button labelPosition='right' size='small'>
      <DocumentIcon />
      Volante de recaudo
    </Button>

    <Button labelPosition='right' size='small' round>
      <DocumentIcon />
      Volante de recaudo
    </Button>

    <Button labelPosition='right'>
      <DocumentIcon />
      Volante de recaudo
    </Button>

    <Button labelPosition='right' round>
      <DocumentIcon />
      Volante de recaudo
    </Button>

    <Button labelPosition='left' size='small' round primary>
      Pagar factura
      <ArrowIcon />
    </Button>

    <Button labelPosition='left' round primary>
      Pagar factura
      <ArrowIcon />
    </Button>
  </>
)

export const WithIcon = () => (
  <>
    <Button light icon>
      <FacebookIcon />
      Regístrate con Facebook
    </Button>
    <Button light icon>
      <GoogleIcon />
      Regístrate con Google
    </Button>
  </>
)
