
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHBasicList extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('basicList', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('list')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Basic List</Title>
        </Header>

        <Content>
          <List>
            <ListItem >
              <Text>Simon Mignolet</Text>
            </ListItem>
            <ListItem>
              <Text>Nathaniel Clyne</Text>
            </ListItem>
            <ListItem>
              <Text>Dejan Lovren</Text>
            </ListItem>
            <ListItem>
              <Text>Mama Sakho</Text>
            </ListItem>
            <ListItem>
              <Text>Alberto Moreno</Text>
            </ListItem>
            <ListItem>
              <Text>Emre Can</Text>
            </ListItem>
            <ListItem>
              <Text>Joe Allen</Text>
            </ListItem>
            <ListItem>
              <Text>Phil Coutinho</Text>
            </ListItem>
          </List>
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

export default connect(mapStateToProps, bindAction)(NHBasicList);
