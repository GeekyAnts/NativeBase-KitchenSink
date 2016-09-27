
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Radio, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

class NHRadio extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Radio</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <List>
            <ListItem >
              <Radio selected={false} />
              <Text >Daily Stand Up</Text>
            </ListItem>
            <ListItem >
              <Radio selected={false} />
              <Text>Finish list Screen</Text>
            </ListItem>
            <ListItem >
              <Radio selected={false} />
              <Text>Lunch Break</Text>
            </ListItem>
            <ListItem >
              <Radio selected />
              <Text>Discussion with Client</Text>
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
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHRadio);
