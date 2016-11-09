
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail, View } from 'native-base';

import styles from './styles';

const logo = require('../../../img/logo.png');
const cardImage = require('../../../img/drawer-cover.png');

const {
  replaceAt,
} = actions;

class NHCardImage extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('cardImage', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('card')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Card Image</Title>
        </Header>

        <Content padder>
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

export default connect(mapStateToProps, bindAction)(NHCardImage);
