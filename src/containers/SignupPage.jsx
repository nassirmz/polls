import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import Signup from '../components/Signup';
import { startSignup, resetErrorMessage } from '../actions/authActions';

const propTypes = {
  dispatch: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

class SignupPage extends Component {
  componentWillUnmount() {
    this.props.dispatch(resetErrorMessage());
  }

  handleSubmit = (values) => {
    this.props.dispatch(startSignup(values));
  }

  render() {
    return (
      <Signup onSubmit={this.handleSubmit} errorMessage={this.props.errorMessage} />
    );
  }
}

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage,
  };
}

SignupPage.propTypes = propTypes;

export default connect(mapStateToProps)(SignupPage);