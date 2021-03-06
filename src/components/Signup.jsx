import React, { PropTypes } from 'react';
import { Form, FormGroup, Col, Button } from 'react-bootstrap';
import { Field, reduxForm } from 'redux-form';

import ErrorDisplay from 'ErrorDisplay';


const form = reduxForm({
  form: 'signup',
});

const propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
};

const Signup = ({ handleSubmit, errorMessage }) => {
  return (
    <Col className="auth-container" sm={4} smOffset={4}>
      <Form horizontal onSubmit={handleSubmit}>
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
          <ErrorDisplay errorMessage={errorMessage} />
          <Button type="submit" block>
            Sign Up
          </Button>
        </FormGroup>
      </Form>
    </Col>
  );
};

Signup.propTypes = propTypes;

export default form(Signup);