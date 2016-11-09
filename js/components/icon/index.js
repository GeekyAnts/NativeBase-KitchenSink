
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, View } from 'native-base';

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
          <Title>Icons</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <View style={styles.iconContainer} >
            <Icon name="logo-apple" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-pizza" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-person-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-beer" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-bicycle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-navigate-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-cloud-circle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-pie-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-bookmarks-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-pulse" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-camera-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-mic-off" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-film" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-flame" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-paper-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-paper-plane" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-speedometer-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-cart-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-flask-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-cloudy-night" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-partly-sunny" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-paw-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-rose" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-pint-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-shuffle" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-game-controller-a" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-glasses-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-microphone" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-keypad" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-color-filter-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-eye-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-mic-off" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-alarm-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-medkit" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-ionic-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-star-half" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-refresh" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-train" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-musical-notes" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-wine" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-nutrition" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-thunderstorm-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-grid-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-settings" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-chatbubbles" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-chatboxes" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-cog-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-baseball-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-bulb-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-calculator" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-rainy" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-videocam-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-play-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-disc-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-body" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-lock" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-skip-backward-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-key" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-flag-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-skip-forward" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-barcode-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-tux" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-copy-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-stopwatch" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-medical-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-archive" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-bookmark" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-clipboard" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-happy" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-share" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-bluetooth" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-search" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-wifi" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-hand-outline" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-trash" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-images" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="ios-attach" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-facebook" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-googleplus" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-twitter" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-github" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-whatsapp" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-wordpress" style={{ width: 45, height: 45, justifyContent: 'center' }} />
            <Icon name="logo-youtube" style={{ width: 45, height: 45, justifyContent: 'center' }} />
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
