import React, { Component } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./About.css";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { MyPerson } from "./custombootstrapcomponents/MyPerson";

export default class About extends Component {
  render() {
    return (
      <div class="site-wrap">
        <MyJumbotron
          header="About Us"
          body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
        />
        <Container>
          <Row>
            <h2>Our Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </Row>
          <br />
          <Row>
            <Col>
              <MyPerson
                src="./assets/asd1.jpg"
                personname="Zenaida Abad"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l"
              />
            </Col>
            <Col>
              <MyPerson
                src="./assets/asd1.jpg"
                personname="Zenaida Abad"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l"
              />
            </Col>
            <Col>
              <MyPerson
                src="./assets/asd1.jpg"
                personname="Zenaida Abad"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut l"
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
