
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Tabs, Right, Left, Body } from 'native-base';

import { View } from 'react-native';
import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';

import TabOne from './tabOne';
import TabTwo from './tabTwo';

class NHTabs extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Header noShadow>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title> Swipable Tabs</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ backgroundColor: '#FBFAFA', flex: 1 }}>
          <Tabs style={{ elevation: 3 }}>
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
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHTabs);
