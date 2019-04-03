import { Card, Button } from "react-bootstrap";
import React, { Fragment } from "react";
import { TransactionBadge } from "./TransactionBadge";

export const TransactionCard = props => {
  return (
    <Fragment>
      <Card>
        <Card.Header>
          {props.header} <TransactionBadge stage={props.stage} />
        </Card.Header>
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.text}</Card.Text>
          <Button variant="primary">{props.button}</Button>
        </Card.Body>
      </Card>{" "}
      <br />
    </Fragment>
  );
};
