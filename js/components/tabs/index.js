
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, View, Button, Icon, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';

import TabOne from './tabOne';
import TabTwo from './tabTwo';

class NHTabs extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Header>
          <Title>Tabs</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View>
          <Tabs locked>
            <TabOne tabLabel="Features" />
            <TabTwo tabLabel="About" />
          </Tabs>
        </View>
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

export default connect(null, bindAction)(NHTabs);
