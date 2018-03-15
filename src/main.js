import React from "react";
import { render } from "react-dom";
import { AppRegistry } from "react-native";
import App from "./App";
AppRegistry.registerComponent("NativebaseKitchenSink", () => App);
AppRegistry.runApplication("NativebaseKitchenSink", {
  rootTag: document.getElementById("root")
});
