
import React, { Component } from 'react';

import { View } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, IconNB, Left,Right,Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHForm extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <IconNB name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Icons</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={styles.iconContainer} >
            <IconNB name="logo-apple" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-pizza" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-person-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-beer" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-bicycle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-navigate-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-cloud-circle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-pie-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-bookmarks-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-pulse" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-camera-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-mic-off" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-film" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-flame" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-paper-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-paper-plane" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-speedometer-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-cart-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-flask-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-cloudy-night" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-partly-sunny" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-paw-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-rose" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-pint-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-shuffle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-game-controller-a" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-glasses-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-microphone" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-keypad" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-color-filter-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-eye-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-mic-off" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-alarm-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-medkit" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-ionic-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-star-half" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-refresh" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-train" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-musical-notes" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-wine" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-nutrition" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-thunderstorm-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-grid-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-settings" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-chatbubbles" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-chatboxes" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-cog-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-baseball-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-bulb-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-calculator" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-rainy" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-videocam-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-play-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-disc-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-body" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-lock" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-skip-backward-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-key" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-flag-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-skip-forward" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-barcode-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-tux" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-copy-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-stopwatch" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-medical-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-archive" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-bookmark" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-clipboard" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-happy" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-share" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-bluetooth" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-search" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-wifi" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-hand-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-trash" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-images" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="ios-attach" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-facebook" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-googleplus" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-twitter" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-github" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-whatsapp" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-wordpress" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <IconNB name="logo-youtube" style={{ width: 45, height: 45, justifyContent: 'center' }} />
          </View>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHForm);
