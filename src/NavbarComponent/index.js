import React from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Menu>
  <Menu.Item>
      <Link to="/signup">Sign up</Link>
    </Menu.Item>

    <Menu.Item>
      <Link to="/login">Log-in</Link>
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