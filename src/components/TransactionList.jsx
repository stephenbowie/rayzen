import React, { Component, Fragment } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { Container, Row, Col } from "react-bootstrap";
import { TransactionCard } from "./custombootstrapcomponents/TransactionCard";

export default class TransactionList extends Component {
  render() {
    const transacData = [
      {
        header: "headerData",
        title: "titleData",
        text: "text text text text",
        button: "buttonData",
        stage: "pending"
      },
      {
        header: "headerData",
        title: "titleData",
        text: "text text text text",
        button: "buttonData",
        stage: "done"
      },
      {
        header: "headerData",
        title: "titleData",
        text: "text text text text",
        button: "buttonData",
        stage: "processing"
      },
      {
        header: "headerData",
        title: "titleData",
        text: "text text text text",
        button: "buttonData"
      }
    ];
    return (
      <Fragment>
        <div className="transactionHeader">
          <MyJumbotron
            header="Transaction Lists"
            body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
          />
        </div>
        <div className="transactionBody">
          <Container>
            <Row>
              <Col>
                <TransactionCard {...transacData[0]} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <TransactionCard {...transacData[1]} />
              </Col>
            </Row>
          </Container>
          <Container>
            <Row>
              <Col>
                <TransactionCard {...transacData[2]} />
              </Col>
            </Row>
          </Container>
        </div>
      </Fragment>
    );
  }
}
