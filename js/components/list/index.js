
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Right, Body, List, ListItem } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  pushRoute,
} = actions;
const data = [
  {
    route: 'basicList',
    text: 'Basic List',
  },
  {
    route: 'listDivider',
    text: 'List Divider',
  },
  {
    route: 'listHeader',
    text: 'List Headers',
  },
  {
    route: 'listIcon',
    text: 'List Icon',
  },
  {
    route: 'listAvatar',
    text: 'List Avatar',
  },
  {
    route: 'listThumbnail',
    text: 'List Thumbnail',
  },,
  {
    route: 'listSeparator',
    text: 'List Separator',
  },
];
class NHList extends Component {

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
            <Title>List</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataSource={this.state.dataSource} renderRow={data =>
              <ListItem button onPress={() => this.pushRoute(data.route)}>
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" />
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

export default connect(mapStateToProps, bindAction)(NHList);
