
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute, pushNewRoute } from '../../actions/route';
import styles from './styles';

class NHList extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    pushNewRoute: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  pushNewRoute(route) {
    this.props.pushNewRoute(route);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>List</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Button block style={styles.mb} onPress={() => this.pushNewRoute('basicList')}>Basic List</Button>
          <Button block style={styles.mb} onPress={() => this.pushNewRoute('listDivider')}>List Divider</Button>
          <Button block style={styles.mb} onPress={() => this.pushNewRoute('listIcon')}>List Icon</Button>
          <Button block style={styles.mb} onPress={() => this.pushNewRoute('listAvatar')}>List Avatar</Button>
          <Button block style={styles.mb} onPress={() => this.pushNewRoute('listThumbnail')}>List Thumbnail</Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: () => dispatch(popRoute()),
    openDrawer: () => dispatch(openDrawer()),
    pushNewRoute: route => dispatch(pushNewRoute(route)),
  };
}

export default connect(null, bindAction)(NHList);
