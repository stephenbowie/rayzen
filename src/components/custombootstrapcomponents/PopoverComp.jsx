import React from "react";
import { Popover, Button, OverlayTrigger } from "react-bootstrap";

export const Example = props => (
  <OverlayTrigger
    trigger="click"
    placement="right"
    overlay={
      <Popover id="popover-basic" title={props.header}>
        {props.body}
      </Popover>
    }
  >
    <Button variant="success">{props.button}</Button>
  </OverlayTrigger>
);
