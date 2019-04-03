import React from "react";
import { Image } from "react-bootstrap";

export const MyPerson = props => {
  return (
    <div class="centerText">
      <Image src={props.src} className="resize" roundedCircle />
      <br />
      <h3>{props.personname}</h3>
      <p>{props.description}</p>
    </div>
  );
};
