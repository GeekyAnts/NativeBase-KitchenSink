
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, List, ListItem, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';

const {
  replaceAt,
} = actions;
const data = [
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
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    const ds = new List.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  replaceAt(route) {
    this.props.replaceAt('layout', { key: route }, this.props.navigation.key);
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
            dataSource={this.state.dataSource} renderRow={data =>
              <ListItem button onPress={() => this.replaceAt(data.route)}>
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
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHLayout);
