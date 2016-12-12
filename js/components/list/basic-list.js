
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text,Left,Right,Body } from 'native-base/Advanced';

import styles from './styles';

const {
  replaceAt,
} = actions;

let data = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Alberto Moreno','Emre Can','Joe Allen','Phil Coutinho'];

class NHBasicList extends Component {
  constructor(props) {
    super(props);
    const ds = new List.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }
  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('basicList', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.replaceAt('list')}>
            <Icon name="ios-arrow-back" />
          </Button>
          </Left>
          <Body>
          <Title>Basic List</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List dataSource={this.state.dataSource} renderRow={(data) =>
            <ListItem>
              <Text>{data}</Text>
            </ListItem>
          } />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHBasicList);
