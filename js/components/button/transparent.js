import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';


class Transparent extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
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
            <Title>Transparent</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ backgroundColor: '#fff', padding: 20 }}>
          <Button transparent light style={styles.mb15}><Text>Light</Text></Button>
          <Button transparent style={styles.mb15}><Text>Primary</Text></Button>
          <Button transparent danger style={styles.mb15}><Text>Danger</Text></Button>
          <Button transparent success style={styles.mb15}><Text>Success</Text></Button>
          <Button info transparent style={styles.mb15}><Text>Info</Text></Button>
          <Button warning transparent style={styles.mb15}><Text>Warning</Text></Button>
          <Button dark transparent style={styles.mb15}><Text>Dark</Text></Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Transparent);
