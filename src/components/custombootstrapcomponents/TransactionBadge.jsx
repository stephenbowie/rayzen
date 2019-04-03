import { Badge } from "react-bootstrap";
import React from "react";

export const TransactionBadge = props => {
  if (props.stage === "uploaded")
    return (
      <Badge pill variant="primary">
        uploaded
      </Badge>
    );
  if (props.stage === "processing")
    return (
      <Badge pill variant="warning">
        processing
      </Badge>
    );
  if (props.stage === "done")
    return (
      <Badge pill variant="success">
        done and sent to your mail
      </Badge>
    );
  if (props.stage === "pending")
    return (
      <Badge pill variant="danger">
        to be paid
      </Badge>
    );
};
