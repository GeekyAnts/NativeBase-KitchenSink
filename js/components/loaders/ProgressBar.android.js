
import React from 'react';
import ProgressBar from 'ProgressBarAndroid';
import NativeBaseComponent from 'native-base/Components/Base/NativeBaseComponent';
import computeProps from 'native-base/Utils/computeProps';


export default class SpinnerNB extends NativeBaseComponent {

  prepareRootProps() {
    const type = {
      height: 40,
    };

    const defaultProps = {
      style: type,
    };

    return computeProps(this.props, defaultProps);
  }


  render() {
    const getColor = () => {
      if (this.props.color) {
        return this.props.color;
      } else if (this.props.inverse) {
        return this.getTheme().inverseProgressColor;
      }

      return this.getTheme().defaultProgressColor;
    };

    return (
      <ProgressBar
        {...this.prepareRootProps()}
        styleAttr="Horizontal"
        indeterminate={false}
        progress={this.props.progress ? this.props.progress / 100 : 0.5}
        color={getColor()}
      />
        );
  }

}
