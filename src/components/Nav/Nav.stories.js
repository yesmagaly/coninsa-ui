import React from 'react'
import Nav from '.'
import { ReactComponent as ConinsaIcon } from '../../assets/icons/coninsa.svg'

export default {
  title: 'Nav',
  component: Nav,
}

export const Default = () => (
  <Nav brand={ConinsaIcon}>
    <Nav.Link>Base link</Nav.Link>
  </Nav>
)
