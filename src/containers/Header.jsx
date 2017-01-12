import React, { Component } from 'react';
import { Link } from 'react-router';
import { Navbar, Nav, NavItem} from 'react-bootstrap';

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
          <NavItem>
            <Link to="/signup">Sign Up</Link>
          </NavItem>
          <NavItem>
            <Link to="/signin">Sign In</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default App;
