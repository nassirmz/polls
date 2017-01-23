import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Signup from '../components/Signup';
import { startSignup } from '../actions/authActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  auth: PropTypes.object,
};

class SignupPage extends Component {
  handleSubmit = (values) => {
    this.props.dispatch(startSignup(values));
  }

  render() {
    return (
      <Signup onSubmit={this.handleSubmit} auth={this.props.auth} />
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