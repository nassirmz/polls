import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Signup from 'Signup';
import { startSignup } from '../actions/authActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
};

class SignupPage extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(startSignup(values));
  }

  render() {
    return (
      <Signup onSubmit={this.handleSubmit} />
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

SignupPage.propTypes = propTypes;

export default connect(mapStateToProps)(SignupPage);