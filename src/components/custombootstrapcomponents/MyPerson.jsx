import React from "react";
import {Image} from 'react-bootstrap';

export const MyPerson = props => {
    return (
        <div class="centerText">
            <Image src={props.src} className="resize" roundedCircle />
            <br />
            <div><h2>{props.personname}</h2></div>
            <p>{props.description}</p>
        </div>
    );
};
