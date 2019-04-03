import { Card, Button } from "react-bootstrap";
import React, { Fragment } from "react";

export const MyCard = props => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Button variant="primary">{props.button}</Button>
        </Card.Body>
      </Card>
    </Fragment>
  );
};
