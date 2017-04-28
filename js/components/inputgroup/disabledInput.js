import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Body, Left, Right, IconNB, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


class Disabled extends Component {

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
            <Title>Disabled Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item disabled>
            <Input disabled placeholder="Disabled Textbox" />
            <IconNB name="ios-information-circle" />
          </Item>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Disabled);
