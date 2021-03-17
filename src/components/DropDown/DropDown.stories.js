import React from 'react'
import { Link } from 'react-router'
import DropDown from '.'

export default {
  title: 'DropDown',
  component: DropDown,
}

export const Basic = () => (
  <DropDown>
    <DropDown.Item>Drop down</DropDown.Item>
    <DropDown.Item>Dashboard</DropDown.Item>
    <DropDown.Item as='a'>Keyboard Shortcuts</DropDown.Item>
    <DropDown.Divider />
    <DropDown.Item as='button'>Organizations</DropDown.Item>
  </DropDown>
)

export const AsNavigation = () => (
  <DropDown variant='navItem'>
    <DropDown.Item as='button'>Rick Sanchez</DropDown.Item>
    <DropDown.Item>Dashboard</DropDown.Item>
    <DropDown.Item as={Link} to='/'>
      Keyboard Shortcuts
    </DropDown.Item>
    <DropDown.Divider />
    <DropDown.Item>Organizations</DropDown.Item>
  </DropDown>
)
