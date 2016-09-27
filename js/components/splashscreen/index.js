
import React, { Component } from 'react';
import { View } from 'native-base';

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'index',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <View />
    );
  }
}
