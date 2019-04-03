import React, { Component, Fragment } from "react";
import { Col, Image, Row, Container, Carousel } from "react-bootstrap";
import "./About.css";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { MyPerson } from "./custombootstrapcomponents/MyPerson";

export default class About extends Component {
  render() {
    return (
      <Fragment>
        <MyJumbotron
          header="About Us"
          body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
        />
        <Container>
          <Row>
            <Carousel className="center">
              <Carousel.Item>
                <Image src="./assets/team.jpg" className="teamImg center" />
                <Carousel.Caption>
                  <h3>First slide label </h3>
                  <p>
                    Nulla vitae elit libero, a pharetra augue mollis interdum.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="./assets/team.jpg" className="teamImg center" />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <Image src="./assets/team.jpg" className="teamImg center" />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl
                    consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
          <br />
          <Row>
            <h2 className="center">Our Team</h2>
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
                src="./assets/asd2.jpg"
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
      </Fragment>
    );
  }
}
