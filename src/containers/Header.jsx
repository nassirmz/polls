import React, { Component, PropTypes } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { connect } from 'react-redux';

import { startSignout } from '../actions/authActions';

const propTypes = {
  authenticated: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

class Header extends Component {
  constructor() {
    super();
    this.onSubmitLogout = this.onSubmitLogout.bind(this);
  }

  onSubmitLogout() {
    this.props.dispatch(startSignout());
  }

  renderLinks() {
    if (this.props.authenticated) {
      return (
        <Nav pullRight className="header-column">
          <NavItem onClick={this.onSubmitLogout}>Sign Out</NavItem>
        </Nav>
      );
    }

    return (
      <Nav pullRight className="header-column">
        <NavItem href="#/signup">Sign Up</NavItem>
        <NavItem href="#/signin">Sign In</NavItem>
      </Nav>
    );
  }

  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand className="header-column">
            <p>POLLS DIGEST</p>
          </Navbar.Brand>
        </Navbar.Header>
        {this.renderLinks()}
      </Navbar>
    );
  }
}

Header.propTypes = propTypes;

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps)(Header);
