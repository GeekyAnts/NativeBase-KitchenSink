
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    replaceAt,
    popRoute,
  } = actions;

class Default extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    replaceAt: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('default', { key: route }, this.props.navigation.key);
  }
  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Default</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ backgroundColor: '#fff', padding: 20 }}>
          <Button light style={styles.mb15}><Text>Light</Text></Button>
          <Button info style={styles.mb15}><Text>Info</Text></Button>
          <Button danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button primary style={styles.mb15}><Text>Primary</Text></Button>
          <Button warning style={styles.mb15}><Text>Warning</Text></Button>
          <Button success style={styles.mb15}><Text>Success</Text></Button>
          <Button dark style={styles.mb15}><Text>Dark</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Default);
