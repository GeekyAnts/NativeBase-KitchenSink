
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
// import styles from './styles';

const pratik = require('../../../img/contacts/pratik.png');
const sanket = require('../../../img/contacts/sanket.png');
const megha = require('../../../img/contacts/megha.png');
const atul = require('../../../img/contacts/atul.png');
const saurabh = require('../../../img/contacts/saurabh.png');
const varun = require('../../../img/contacts/varun.png');

class NHListAvatar extends Component {

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

          <Title>List Avatar</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <List>
            <ListItem>
              <Thumbnail source={pratik} />
              <Text>Kumar Pratik</Text>
              <Text note>Doing what you like will always keep you happy . .</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={sanket} />
              <Text>Kumar Sanket</Text>
              <Text note>Life is one time offer! Use it well</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={megha} />
              <Text>Megha</Text>
              <Text note>Problems follow you, only because you have the ability to solve them</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={atul} />
              <Text>Atul Ranjan</Text>
              <Text note>Difficult road always lead to a beautiful destination</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={saurabh} />
              <Text>Saurabh</Text>
              <Text note>Failure is the stepping stone for success</Text>
            </ListItem>
            <ListItem>
              <Thumbnail source={varun} />
              <Text>Varun</Text>
              <Text note>Wish I had a Time machine . .</Text>
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

export default connect(null, bindAction)(NHListAvatar);
