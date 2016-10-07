
import React, { Component } from 'react';
import { Image } from 'react-native';

const splashscreen = require('../../../img/splashscreen.png');

export default class SplashPage extends Component {

  static propTypes = {
    navigator: React.PropTypes.shape({}),
  }

  componentWillMount() {
    const navigator = this.props.navigator;
    setTimeout(() => {
      navigator.replace({
        id: 'home',
      });
    }, 1500);
  }

  render() { // eslint-disable-line class-methods-use-this
    return (
      <Image source={splashscreen} style={{ flex: 1, height: null, width: null }} />
    );
  }
}
