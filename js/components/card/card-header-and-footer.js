
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right } from 'native-base/Advanced';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHCardHeaderAndFooter extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('cardHeaderAndFooter', { key: route }, this.props.navigation.key);
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
            <Title>Card Header & Footer</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                NativeBase is a free and open source framework that enables developers to build
                high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Get on the mobile fast track with NativeBase, the fastest-growing platform
                and tool set for iOS and Android development.
              </Text>
              </Body>
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
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHCardHeaderAndFooter);
