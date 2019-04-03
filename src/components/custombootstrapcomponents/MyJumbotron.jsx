import React, { Fragment } from "react";
import { Jumbotron, Container } from "react-bootstrap";

export const MyJumbotron = props => {
  return (
    <Fragment>
      <div className="bodyHeader">
        <Jumbotron fluid>
          <Container>
            <h1>{props.header}</h1>
            <p>{props.body}</p>
          </Container>
        </Jumbotron>
      </div>
      <div className="bodyFooter" />
    </Fragment>
  );
};
