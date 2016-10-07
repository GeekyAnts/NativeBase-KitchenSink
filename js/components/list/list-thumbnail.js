
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail } from 'native-base';

import { popRoute } from '../../actions/route';
import styles from './styles';

const sankhadeep = require('../../../img/contacts/sankhadeep.png');
const supriya = require('../../../img/contacts/supriya.png');
const himanshu = require('../../../img/contacts/himanshu.png');
const shweta = require('../../../img/contacts/shweta.png');
const shruti = require('../../../img/contacts/shruti.png');

class NHListThumbnail extends Component {

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

          <Title>List Thumbnail</Title>
        </Header>

        <Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={sankhadeep} />
              <Text>Sankhadeep</Text>
              <Text note>Its time to build a difference . .</Text>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={supriya} />
              <Text>Supriya</Text>
              <Text note>One needs courage to be happy and smiling all time . . </Text>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={himanshu} />
              <Text>Himanshu</Text>
              <Text note>Live a life style that matchs your vision</Text>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={shweta} />
              <Text>Shweta</Text>
              <Text note>Failure is temporary, giving up makes it permanent</Text>
            </ListItem>
            <ListItem>
              <Thumbnail square size={80} source={shruti} />
              <Text>Shruti</Text>
              <Text note>The biggest risk is a missed opportunity !!</Text>
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

export default connect(null, bindAction)(NHListThumbnail);
