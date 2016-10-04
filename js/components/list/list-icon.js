
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Badge } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { replaceRoute } from '../../actions/route';
// import styles from './styles';

class NHListIcon extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container>
        <Header>
          <Button transparent onPress={() => this.replaceRoute('list')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>List Icon</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <List>
            <ListItem iconLeft>
              <Icon name="ios-plane" style={{ color: '#0A69FE' }} />
              <Text>Airplane Mode</Text>
              <Text note>Off</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-wifi" style={{ color: '#0A69FE' }} />
              <Text>Wi-Fi</Text>
              <Text note>GeekyAnts</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-bluetooth" style={{ color: '#0A69FE' }} />
              <Text>Bluetooth</Text>
              <Text note>Off</Text>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-settings-outline" style={{ color: '#0A69FE' }} />
              <Text>Software Update</Text>
              <Badge style={{ backgroundColor: '#8C97B5' }}>2</Badge>
            </ListItem>
            <ListItem iconLeft>
              <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
              <Text>Mail</Text>
              <Badge>12</Badge>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

export default connect(null, bindAction)(NHListIcon);
