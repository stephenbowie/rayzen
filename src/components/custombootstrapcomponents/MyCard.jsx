import { Card } from "react-bootstrap";
import React, { Fragment } from "react";
import { Example } from "./PopoverComp";

export const MyCard = props => {
  return (
    <Fragment>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.src} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.body}</Card.Text>
          <Example
            header={props.popHeader}
            body={props.popBody}
            button={props.popButton}
          />
          {/* <Button variant="primary">{props.button}</Button> */}
        </Card.Body>
      </Card>
    </Fragment>
  );
};
