import React, { Component } from "react";
import ProgressBar from "ProgressBarAndroid";

export default class SpinnerNB extends Component {
  prepareRootProps() {
    const type = {
      height: 40
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
      <ProgressBar
        {...this.prepareRootProps()}
        styleAttr={this.props.size ? this.props.size : "Large"}
        color={getColor()}
      />
    );
  }
}
