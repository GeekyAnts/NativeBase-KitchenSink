
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Tabs, Tab, Text, Right, Left, Body, TabHeading } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import myTheme from '../../themes/base-theme';

import TabOne from './tabOne';
import TabTwo from './tabTwo';
import TabThree from './tabThree';

const {
  popRoute,
} = actions;

class ConfigTab extends Component {  // eslint-disable-line

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Advanced Tabs</Title>
          </Body>
          <Right />
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab heading={<TabHeading><Icon name="camera" /><Text>Camera</Text></TabHeading>}>
            <TabOne />
          </Tab>
          <Tab heading={<TabHeading><Text>No Icon</Text></TabHeading>}>
            <TabTwo />
          </Tab>
          <Tab heading={<TabHeading><Icon name="apps" /></TabHeading>}>
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(ConfigTab);
