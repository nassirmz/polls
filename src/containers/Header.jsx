import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';


class App extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="header-column">
            <p>POLLS DIGEST</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight className="header-column">
          <NavItem eventKey={1} href="#">Register</NavItem>
          <NavItem eventKey={2} href="#">Sign In</NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default App;
