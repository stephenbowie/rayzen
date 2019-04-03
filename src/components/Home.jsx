import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";
import { Container, Col, Row } from "react-bootstrap";
import { MyCard } from "../components/custombootstrapcomponents/MyCard";

export default class Home extends Component {
  render() {
    const proofRead = [
      {
        title: "Proof read",
        body:
          "This is the first step in the process, uploading document and etc. Please see the instructions below",

        popHeader: "proof reading",
        popBody:
          "Upload the file as word document or some pdf file extension in the transaction module in the header. The status badge will have color red and will change if you go through the next steps.",
        popButton: "see instructions"
      },
      {
        title: "Check document status",
        body:
          "This is the second step in the process, check and search for your document in the transaction module, it will appear as yellow in the badge section. See instructions below",

        popHeader: "Document in progress",
        popBody:
          "Your document has been received and is now in processing. The badge should be color red if its ready for the next step",
        popButton: "see instructions"
      },
      {
        title: "Payment",
        body:
          "This is the final step in the process, check and search for your document in the transaction module, it will appear as red in the badge section. See instructions below",

        popHeader: "Document in progress",
        popBody:
          "Your document has been processed. Now you should undergo the payment mode. The badge should be color red and it will turn to green once paid, the final product will be sent in your email",
        popButton: "see instructions"
      }
    ];

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
                <MyCard {...proofRead[0]} src="./assets/proofread.jpeg" />
              </Col>
              <Col>
                <MyCard {...proofRead[1]} src="./assets/inProgress.jpeg" />
              </Col>
              <Col>
                <MyCard {...proofRead[2]} src="./assets/payment.jpeg" />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
