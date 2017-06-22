import React from "react";
import App from "./js/App";

export default class App1 extends React.Component {
  constructor() {
    super();
    this.state = {
      isReady: false
    };
  }

  render() {
    return <App />;
  }
}
