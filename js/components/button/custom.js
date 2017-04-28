import React, { Component } from 'react';
import { connect } from 'react-redux';
import { StatusBar } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';



class Custom extends Component {  // eslint-disable-line


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
            <Title>Custom Size</Title>
          </Body>
          <Right />

        </Header>

        <Content padder style={{ padding: 20 }}>
          <Button small style={styles.mb15}><Text>Default Small</Text></Button>
          <Button success style={styles.mb15}><Text>Success Default</Text></Button>
          <Button large dark style={styles.mb15}><Text>Dark Large</Text></Button>
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

export default connect(mapStateToProps, bindAction)(Custom);
