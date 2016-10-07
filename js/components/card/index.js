
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const logo = require('../../../img/logo.png');
const cardImage = require('../../../img/drawer-cover.png');

class NHCard extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Card</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text style={styles.text}>Card Image</Text>
          <Card style={[styles.mb, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
            </CardItem>

            <CardItem>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage} />
            </CardItem>

            <CardItem>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button transparent>
                  <Icon name="logo-github" />
                  1,926
                </Button>
                <Button transparent>
                  <Icon name="ios-git-network" />
                  132
                </Button>
                <Button transparent>
                  <Icon name="logo-twitter" />
                  197
                </Button>
              </View>
            </CardItem>
          </Card>

          <Text style={styles.text}>Card Showcase</Text>
          <Card style={[styles.mb, { flex: 0 }]}>
            <CardItem>
              <Thumbnail source={logo} />
              <Text>NativeBase</Text>
              <Text note>April 15, 2016</Text>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null }} source={cardImage} />
              <Text>
                NativeBase is a free and open source framework that enables developers
                to build high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              <Button transparent style={{ marginLeft: -7 }} textStyle={{ color: '#87838B' }}>
                <Icon name="logo-github" />
                <Text>1,926 stars</Text>
              </Button>
            </CardItem>
          </Card>

          <Text style={styles.text}>Card List</Text>
          <Card style={[styles.mb, { flex: 0 }]}>
            <CardItem>
              <Icon name="logo-googleplus" style={{ color: '#DD5044' }} />
              <Text>Google Plus</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-facebook" style={{ color: '#3B579D' }} />
              <Text>Facebook</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-twitter" style={{ color: '#55ACEE' }} />
              <Text>Twitter</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-reddit" style={{ color: '#FF4500' }} />
              <Text>Reddit</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-linkedin" style={{ color: '#007BB6' }} />
              <Text>LinkedIn</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-youtube" style={{ color: '#D62727' }} />
              <Text>YouTube</Text>
            </CardItem>
          </Card>

          <Text style={styles.text}>Card Header and Footer</Text>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Text>
                NativeBase is a free and open source framework that enables developers to build
                high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Get on the mobile fast track with NativeBase, the fastest-growing platform
                and tool set for iOS and Android development.
              </Text>
            </CardItem>
            <CardItem header>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHCard);
