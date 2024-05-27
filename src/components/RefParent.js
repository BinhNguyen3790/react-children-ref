import React, { Component } from "react";
import RefComponent from "./RefComponent";

export default class RefParent extends Component {
  refParent = React.createRef();
  changeTitle = () => {
    this.refParent.current.changeTitle();
  };
  render() {
    return (
      <div>
        <button onClick={this.changeTitle}>change title</button>
        <RefComponent ref={this.refParent} />
      </div>
    );
  }
}
