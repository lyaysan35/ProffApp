import React from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react'

const NavbarComponent = () => (
  <Menu>
  <Menu.Item>
      <Button primary>Sign up</Button>
    </Menu.Item>

    <Menu.Item>
      <Button>Log-in</Button>
    </Menu.Item>
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>Electronics</Dropdown.Item>
        <Dropdown.Item>Automotive</Dropdown.Item>
        <Dropdown.Item>Home</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default NavbarComponent;