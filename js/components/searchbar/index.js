
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Button, Icon, InputGroup, Input, Content, View } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';

class NHSearchbar extends Component {

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
        <Header searchBar rounded>
          <InputGroup>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </InputGroup>
          <Button transparent>
            Search
          </Button>
        </Header>

        <Content>
          <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}>
            <Button transparent textStyle={{ color: '#5067FF' }} onPress={() => this.popRoute()}>
              Back
            </Button>

            <Button transparent textStyle={{ color: '#5067FF' }} onPress={this.props.openDrawer}>
              Menu
            </Button>
          </View>
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

export default connect(null, bindAction)(NHSearchbar);
