
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class Basic extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('basicIcon', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.replaceAt('icon')}>
              <IconNB name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Basic</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={styles.iconContainer} >
            <Icon name="person" />
            <Icon name="md-apps" />
            <Icon name="menu" />
            <Icon name="ios-paper" />
            <Icon name="cart" />
          </View>
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

export default connect(mapStateToProps, bindAction)(Basic);
