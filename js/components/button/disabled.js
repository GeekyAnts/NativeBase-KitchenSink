
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class Disabled extends Component {  // eslint-disable-line


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
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="arrow-back" />
          </Button>
          </Left>
          <Body>
            <Title>Disabled</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button disabled style={styles.mb15}><Text>Solid</Text></Button>
          <Button bordered disabled style={styles.mb15}><Text>Bordered</Text></Button>
          <Button rounded disabled style={styles.mb15}><Text>rounded</Text></Button>
          <Button large disabled style={styles.mb15}><Text>Custom</Text></Button>
          <Button disabled style={styles.mb15}>
            <Icon name="home" />
            <Text>Icon Button</Text>
          </Button>
          <Button block disabled style={styles.mb15}><Text>Block</Text></Button>
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
});

export default connect(mapStateToProps, bindAction)(Disabled);
