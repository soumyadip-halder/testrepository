import React, { Component } from "react";

class Headline extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.header) {
      return null;
    }

    return (
      <div data-test="HeadlineComponent">
        <h1 data-test="header">{this.props.header}</h1>
        <p data-test="desc">{this.props.desc}</p>
      </div>
    );
  }
}

export default Headline;
