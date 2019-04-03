import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import {Col, Row, Form, Button} from 'react-bootstrap';

export default class Contact extends Component {
    constructor(){
      super();

      this.state = {
        firstname: '',
        lastname: '',
        email: '',
        subject: '',
        message: ''
      }

    }

    render() {
      return (
        <div class="contact-us">
          <MyJumbotron
              header="Contact Us"
              body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
            />
          <Row>
          <Col>
            <Form>
              <Form.Row>
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
                <Form.Control as="textarea" rows="4" placeholder="Write your notes or questions here..." />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
            
          <Col>  
            <div class="bg-white">
              <p class="mb-0 font-weight-bold">Address</p>
              <p class="mb-4">203 Fake St. Mountain View, San Francisco, California, USA</p>

              <p class="mb-0 font-weight-bold">Phone</p>
              <p class="mb-4"><a href="/">+1 232 3235 324</a></p>

              <p class="mb-0 font-weight-bold">Email Address</p>
              <p class="mb-0"><a href="/">youremail@domain.com</a></p>
            </div>
            <br />
            <div class="bg-white">
              <h3 class="h5 text-black">More Info</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <p><a href="/" class="btn btn-primary btn-md text-white">Learn More</a></p>
            </div>
          </Col>
        </Row>
      </div>
    )  
  }
}
