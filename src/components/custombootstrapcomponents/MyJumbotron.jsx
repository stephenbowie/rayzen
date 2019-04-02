import React from "react";
import { Jumbotron, Container } from "react-bootstrap";

export const MyJumbotron = props => {
  return (
    <div class="site-wrap">
      <div className="bodyHeader">
        <Jumbotron fluid>
          <Container>
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </Container>
        </Jumbotron>
      </div>
      <div className="bodyFooter" />
    </div>
  );
};
