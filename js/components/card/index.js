
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Body, Right } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  replaceAt,
} = actions;

class NHCard extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('card', { key: route }, this.props.navigation.key);
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
            <Title>Card</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button block style={styles.mb} onPress={() => this.replaceAt('cardList')}><Text>Card List</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('cardImage')}><Text>Card Image</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('cardShowcase')}><Text>Card Showcase</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('cardHeaderAndFooter')}><Text>Card Header & Footer</Text></Button>
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

export default connect(mapStateToProps, bindAction)(NHCard);
