import { Component } from "react";

export default class RefComponent extends Component {
  state = { title: "binhdevc" };
  changeTitle = () => {
    this.setState({
      title: "binhnguyen",
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
      </div>
    );
  }
}
