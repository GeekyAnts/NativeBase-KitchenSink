
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Thumbnail,Left,Body,Right } from 'native-base/Advanced';

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
          <Left>
            <Button transparent onPress={() => this.replaceAt('card')}>
              <Icon name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Card Image</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Left>
              <Thumbnail source={logo} />
              </Left>
              <Body>
              <Text>NativeBase</Text>
              <Text note>GeekyAnts</Text>
              </Body>
            </CardItem>

            <CardItem cardBody>
              <Image style={{ resizeMode: 'cover', width: null,height: 200,flex: 1 }} source={cardImage} />
            </CardItem>

            <CardItem>
              <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Button transparent>
                  <Icon name="logo-github" />
                  <Text>1,926</Text>
                </Button>
                <Button transparent>
                  <Icon name="ios-git-network" />
                  <Text>132</Text>
                </Button>
                <Button transparent>
                  <Icon name="logo-twitter" />
                  <Text>197</Text>
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
