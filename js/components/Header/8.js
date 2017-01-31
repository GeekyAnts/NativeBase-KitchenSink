
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, Subtitle } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
    replaceAt,
} = actions;

class Header8 extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('header8', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header style={{ backgroundColor: 'red' }}>
          <Left>
            <Button transparent onPress={() => this.replaceAt('header')}>
              <Icon name="arrow-back" style={{ color: '#FFF' }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: '#FFF' }}>Custom</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Text>
            Header With Custom backgroundColor and Icon colors
          </Text>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Header8);
