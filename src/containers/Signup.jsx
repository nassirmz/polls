import React, { Component } from 'react';
import { Form, FormGroup, Col, FormControl, Button } from 'react-bootstrap';

class Signup extends Component {
  render() {
    return (
      <Col className="auth-container" sm={4} smOffset={4}>
        <Form horizontal>
          <FormGroup>
            <FormControl type="text" placeholder="Name" />
          </FormGroup>

          <FormGroup>
            <FormControl type="email" placeholder="Email" />
          </FormGroup>

          <FormGroup>
            <FormControl type="password" placeholder="Password" />
          </FormGroup>

          <FormGroup>
            <Button type="submit" block>
              Sign in
            </Button>
          </FormGroup>
        </Form>
      </Col>
    );
  }
}

export default Signup;