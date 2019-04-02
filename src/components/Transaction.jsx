import React, { Component } from "react";
import { MyJumbotron } from "./custombootstrapcomponents/MyJumbotron";

export default class Transaction extends Component {
  render() {
    return (
      <div class="site-wrap">
        <MyJumbotron
          header="Transaction"
          body="Lorem Ipsum Lorem Ipsum Lorem Ipsum L"
        />
      </div>
    );
  }
}
