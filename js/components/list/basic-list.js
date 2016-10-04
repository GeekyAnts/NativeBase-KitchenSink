
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
// import styles from './styles';

class NHBasicList extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('list')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Basic List</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
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
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

export default connect(null, bindAction)(NHBasicList);
