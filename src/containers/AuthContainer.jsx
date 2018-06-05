import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { hashHistory } from 'react-router';


const propTypes = {
  authenticated: PropTypes.bool,
  children: PropTypes.node,
};

class AuthContainer extends Component {
  componentDidMount() {
    const { authenticated } = this.props;

    if (!authenticated) {
      hashHistory.replace('/signin');
    }
  }

  render() {
    const { authenticated, children } = this.props;
    if (authenticated) {
      return (
        <div>
          {children}
        </div>
      );
    }
    return null;
  }

}


function mapStateToProps(state, ownProps) {
  return {
    authenticated: state.auth.authenticated,
    currenURL: ownProps.location.pathname,
  };
}

AuthContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AuthContainer);