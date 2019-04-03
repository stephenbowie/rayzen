import React, { Component, Fragment } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { Container, Row, Col } from "react-bootstrap";

export default class Transaction extends Component {
  render() {
    return (
      <Fragment>
        <div className="transactionHeader">
          <MyJumbotron
            header="Transaction"
            body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
          />
        </div>
        <div className="transactionBody">
          <Container>
            <Row>
              <Col />
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
