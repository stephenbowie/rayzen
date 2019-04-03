import React from "react";
import {Image} from 'react-bootstrap';

export const MyPerson = props => {
    return (
        <div>
            <Image src={props.src} className="resize" roundedCircle />
            <br />
            <h2 class="displayName">{props.personname}</h2>
            <p>{props.description}</p>
        </div>
    );
};
