
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text } from 'native-base';

import { popRoute } from '../../actions/route';
import styles from './styles';

class NHBasicList extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
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
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHBasicList);
