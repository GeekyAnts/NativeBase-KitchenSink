
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Left, Right, Body, Icon, List, ListItem, Content, Text } from 'native-base';

import styles from './styles';
import { openDrawer } from '../../actions/drawer';

const {
  pushRoute,
} = actions;
const data = [
  {
    route: 'basicFab',
    text: 'Basic FAB',
  },
  {
    route: 'multipleFab',
    text: 'Multiple FABs',
  },
];
class NHFab extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
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

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }


  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>FAB</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataSource={this.state.dataSource} renderRow={data =>
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

export default connect(mapStateToProps, bindAction)(NHFab);
