
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class Full extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
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
            <Title>Full</Title>
          </Body>
          <Right />

        </Header>

        <Content style={{ backgroundColor: '#fff' }}>
          <Button full light style={styles.mt15}><Text>Light</Text></Button>
          <Button full info style={styles.mt15}><Text>Info</Text></Button>
          <Button full danger style={styles.mt15}><Text>Danger</Text></Button>
          <Button full primary style={styles.mt15}><Text>Primary</Text></Button>
          <Button full warning style={styles.mt15}><Text>Warning</Text></Button>
          <Button full success style={styles.mt15}><Text>Success</Text></Button>
          <Button full dark style={styles.mt15}><Text>Dark</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Full);
