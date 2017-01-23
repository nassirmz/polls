import React, { Component, PropTypes } from 'react';
import { Alert } from 'react-bootstrap';

const propTypes = {
  errorMessage: PropTypes.string,
};

class ErrorDispaly extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      alertVisible: true,
    };
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this);
  }

  handleAlertDismiss() {
    this.setState({ alertVisible: false });
  }

  render() {
    if (this.state.alertVisible && this.props.errorMessage) {
      return (
        <Alert bsStyle="danger" onDismiss={this.handleAlertDismiss}>
          <p>{this.props.errorMessage}</p>
        </Alert>
      );
    }
    return null;
  }

}

ErrorDispaly.propTypes = propTypes;

export default ErrorDispaly;