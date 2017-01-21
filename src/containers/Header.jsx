import React, { Component } from 'react';
// import { Link } from 'react-router';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="header-column">
            <p>POLLS DIGEST</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight className="header-column">
          <NavItem href="#/signup">Sign Up</NavItem>
          <NavItem href="#/signin">Sign In</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
