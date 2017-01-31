
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class Specific extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('specific', { key: route }, this.props.navigation.key);
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
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={styles.iconContainer} >
            <Icon ios="ios-person" android="md-person"/>
            <Icon ios="ios-apps-outline" android="md-apps" />
            <Icon ios="ios-menu" android="md-menu" />
            <Icon ios="ios-paper" android="md-paper" />
            <Icon ios="ios-cart-outline" android="md-cart" />
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

export default connect(mapStateToProps, bindAction)(Specific);
