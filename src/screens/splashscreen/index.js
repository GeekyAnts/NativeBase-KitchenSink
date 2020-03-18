import React, { Component } from "react";
import { Image } from "react-native";

const splashscreen = require("../../../assets/splashscreen.png");

export default class SplashPage extends Component {
  render() {
    // eslint-disable-line class-methods-use-this
    return (
      <Image
        source={splashscreen}
        style={{ flex: 1, height: null, width: null }}
      />
    );
  }
}
