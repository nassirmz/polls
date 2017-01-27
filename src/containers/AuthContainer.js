import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { ownProps, hashHistory, setRedirectUrl } from 'react-router';


const propTypes = {
  dispatch: PropTypes.func.isRequired,
  authenticated: PropTypes.bool,
  currenURL: PropTypes.string,
  children: PropTypes.node,
};

class AuthContainer extends Component {
  componentDidMount() {
    const { dispatch, currenURL, authenticated } = this.props;

    if (!authenticated) {
      dispatch(setRedirectUrl(currenURL));
      hashHistory.replace('/signup');
    }
  }
  remder() {
    const { authenticated } = this.props;
    if (authenticated) {
      return this.props.children;
    }
    return null;
  }

}


function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
    currenURL: ownProps.location.pathname,
  };
}

AuthContainer.propTypes = propTypes;

export default connect(mapStateToProps)(AuthContainer);