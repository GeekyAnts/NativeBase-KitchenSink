
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon,Text,Left,Right,Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  replaceAt,
} = actions;

class NHList extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('list', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
          </Button>
          </Left>
          <Body>
          <Title>List</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button block style={styles.mb} onPress={() => this.replaceAt('basicList')}><Text>Basic List</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('listDivider')}><Text>List Divider</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('listIcon')}><Text>List Icon</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('listAvatar')}><Text>List Avatar</Text></Button>
          <Button block style={styles.mb} onPress={() => this.replaceAt('listThumbnail')}><Text>List Thumbnail</Text></Button>
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

export default connect(mapStateToProps, bindAction)(NHList);
