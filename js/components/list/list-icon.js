
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Badge, Left, Right, Body } from 'native-base/Advanced';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHListIcon extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('listIcon', { key: route }, this.props.navigation.key);
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
            <Title>List Icon</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem>
            <Left>
              <Icon name="ios-plane" style={{ color: '#0A69FE' }} />
              <Text>Airplane Mode</Text>
            </Left>
            <Body />
            <Right>
              <Text note>Off</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="ios-wifi" style={{ color: '#0A69FE' }} />
              <Text>Wi-Fi</Text>
            </Left>
            <Body />
            <Right>
              <Text note>GeekyAnts</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="ios-bluetooth" style={{ color: '#0A69FE' }} />
              <Text>Bluetooth</Text>
            </Left>
            <Body />
            <Right>
              <Text note>Off</Text>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="ios-settings-outline" style={{ color: '#0A69FE' }} />
              <Text>Software Update</Text>
            </Left>
            <Body />
            <Right>
              <Badge style={{ backgroundColor: '#8C97B5' }}><Text>2</Text></Badge>
            </Right>
          </ListItem>
          <ListItem>
            <Left>
              <Icon name="ios-mail-outline" style={{ color: '#0A69FE' }} />
              <Text>Mail</Text>
            </Left>
            <Body />
            <Right>
              <Badge><Text>12</Text></Badge>
            </Right>
          </ListItem>
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

export default connect(mapStateToProps, bindAction)(NHListIcon);
