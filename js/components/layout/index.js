
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, List, ListItem, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';

const {
  pushRoute,
} = actions;
const datas = [
  {
    route: 'row',
    text: 'Row Grid',
  },
  {
    route: 'column',
    text: 'Column Grid',
  },
  {
    route: 'nested',
    text: 'Nested Layout',
  },
  {
    route: 'customRow',
    text: 'Custom Row Size Grid',
  },
  {
    route: 'customCol',
    text: 'Custom Column Size Grid',
  },
];
class NHLayout extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={{backgroundColor: '#FBFAFA'}}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Layout</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem button onPress={() => this.pushRoute(data.route)}>
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: '#999' }} />
                </Right>
              </ListItem>
              }
          />
        </Content>
      </Container>
    );
  }
  }

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHLayout);
