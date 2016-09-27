
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, InputGroup, Input } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

class NHForm extends Component {

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

          <Title>Form</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <List>
            <ListItem>
              <InputGroup>
                <Icon name="ios-person" />
                <Input placeholder="EMAIL" />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup>
                <Icon name="ios-unlock" />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
            </ListItem>
            <ListItem>
              <InputGroup >
                <Input inlineLabel label="NAME" placeholder="John Doe" />
              </InputGroup>
            </ListItem>

            <ListItem>
              <InputGroup >
                <Input stackedLabel label="Address Line 1" placeholder="Address" />
              </InputGroup>
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

export default connect(null, bindAction)(NHForm);
