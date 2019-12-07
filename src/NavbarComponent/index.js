import React, { Component } from 'react';
import { Dropdown, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class NavbarComponent extends Component {
  constructor(props) {
    super(props)
    this.onLogout.bind(this);
  }

  async onLogout() {
  await fetch(process.env.REACT_APP_API_URL + '/users/logout', {
    method: 'post', body: {}}).catch(err => {
      console.log('ERROR Logging Out >>', err);
    });
    this.props.onLogout();
  }

  render() {
    return(
      <Menu>
        <Menu.Item>
          <Link to="/">Galstuk</Link>
        </Menu.Item>
        <Menu.Item>
        <Link to='/'>Your account</Link>
        </Menu.Item>
        {
          (this.props.userId) ?
            <Menu.Item>
              <a  onClick={() => this.onLogout()}>Logout</a>
            </Menu.Item>
            :
            <Menu.Item>
              <Link to="/login">Login</Link> / <Link to="/register">Register</Link>
            </Menu.Item>
        }
      </Menu>
    )
  }
}

export default NavbarComponent;