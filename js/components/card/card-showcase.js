
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail } from 'native-base';

import styles from './styles';

const logo = require('../../../img/logo.png');
const cardImage = require('../../../img/drawer-cover.png');

const {
  replaceAt,
} = actions;

class NHCardShowcase extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('cardShowcase', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('card')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Card Showcase</Title>
        </Header>

        <Content padder>
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
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHCardShowcase);
