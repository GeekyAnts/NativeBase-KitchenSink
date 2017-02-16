
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Thumbnail, Text, Body, Left, Right } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const imgOne = require('../../../img/swiper-1.png');
const imgTwo = require('../../../img/swiper-2.png');

const logo = require('../../../img/splashscreen.png');
const cover = require('../../../img/web-cover1.jpg');

class NHThumbnail extends Component { // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <Text style={styles.mb10}>Square Thumbnail</Text>
            <Thumbnail square source={logo} style={styles.mb10} />
            <Thumbnail square size={80} source={logo} style={styles.mb35} />

            <Text style={styles.mb10}>Circular Thumbnail</Text>
            <Thumbnail source={cover} style={{ marginBottom: 8 }} />
            <Thumbnail size={80} source={cover} />
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
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHThumbnail);
