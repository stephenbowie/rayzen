import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { Container, Col, Row } from "react-bootstrap";
import { MyCard } from "../components/custombootstrapcomponents/MyCard";

export default class Home extends Component {
  render() {
    return (

      <div>
        <div className="homeHeader">

          <MyJumbotron
            header="Home"
            body="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lore IpsumLorem psumLorem Ipsumv Lorem Ipsum Lorem Ipsum "
          />
        </div>
        <div className="homeBody">
          <Container>
            <Row>
              <Col>
                <MyCard
                  title="Proof read"
                  body="lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"
                  button="button"
                  src="./assets/asd1.jpg"
                />
              </Col>
              <Col>
                <MyCard
                  title="Check document status"
                  body="lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"
                  button="button"
                  src="./assets/asd1.jpg"
                />
              </Col>
              <Col>
                <MyCard
                  title="Payment"
                  body="lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum"
                  button="button"
                  src="./assets/asd1.jpg"
                />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
