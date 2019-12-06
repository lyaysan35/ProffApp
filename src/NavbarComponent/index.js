import React from 'react'
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => (
  <Menu>
  <Menu.Item>
      <Link to="/register">Register</Link>
    </Menu.Item>

    <Menu.Item>
      <Link to="/login">Login</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to="/">Galstuk</Link>
    </Menu.Item>
    <Menu.Item>
    <Link to='/'>Your account</Link>
    </Menu.Item>
    
  </Menu>
)

export default NavbarComponent;