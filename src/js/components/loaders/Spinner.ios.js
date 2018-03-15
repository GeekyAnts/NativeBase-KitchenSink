import React, { Component } from "react";
import { ActivityIndicatorIOS } from "react-native";

export default class SpinnerNB extends Component {
  prepareRootProps() {
    const type = {
      height: 80
    };

    const defaultProps = {
      style: type
    };

    return computeProps(this.props, defaultProps);
  }

  render() {
    const getColor = () => {
      if (this.props.color) {
        return this.props.color;
      } else if (this.props.inverse) {
        return this.getTheme().inverseSpinnerColor;
      }

      return this.getTheme().defaultSpinnerColor;
    };

    return (
      <ActivityIndicatorIOS
        {...this.prepareRootProps()}
        color={getColor()}
        size={this.props.size ? this.props.size : "large"}
      />
    );
  }
}
