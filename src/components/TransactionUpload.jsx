import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { Button, Form, Col } from "react-bootstrap";

export default class TransactionUpload extends Component {
  onSubmit(event) {
    event.preventDefault();
    this.setState({ buttonDisabled: true });
    // do asynchronous post request here
  }

  render() {
    return (
      <div className="transactionUploadDiv">
        <MyJumbotron
          header="Transaction Upload"
          body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
        />

        <Form onSubmit={this.onSubmit}>
          <Form.Row>
            <div>Select the file to be proofread here </div>
            <br />

            <div>
              <br />
              <br />
              <input type="file" ref="file" name="file" />
            </div>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="firstName" placeholder="First Name" />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="lastName" placeholder="Last Name" />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group controlId="formSubject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="subject" placeholder="Subject" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows="4"
              placeholder="Write your notes or questions here..."
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
