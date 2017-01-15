import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import { signup } from '../actions/authActions';

const form = reduxForm({
  form: 'signup',
});

class Signup extends Component {
  handleFormSubmit = (userCredentials) => {
    const { dispatch } = this.props;
    dispatch(signup(userCredentials));
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Col className="auth-container" sm={4} smOffset={4}>
        <Form horizontal onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
          <FormGroup>
            <Field name="name" component="input" className="form-control" type="text" placeholder="Name" />
          </FormGroup>

          <FormGroup>
            <Field name="email" component="input" className="form-control" type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <Field name="password" component="input" className="form-control" type="password" placeholder="Password" />
          </FormGroup>

          <FormGroup>
            <Button type="submit" block>
              Sign Up
            </Button>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps)(form(Signup));