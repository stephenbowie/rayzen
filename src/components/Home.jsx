import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";

export default class Home extends Component {
  render() {
    return (
      <div class="site-wrap">
        <div className="bodyHeader">
          <MyJumbotron
            header="Home"
            body="Lorem Ipsum Lorem Ipsum Lorem Ipsum Lore IpsumLorem psumLorem Ipsumv Lorem Ipsum Lorem Ipsum "
          />
        </div>
        <div className="bodyBody" />
      </div>
    );
  }
}
