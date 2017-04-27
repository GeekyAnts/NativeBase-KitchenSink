import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Body, Left, Right, IconNB, Item, Input, Form } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


class Underline extends Component {

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
            <Title>Underline</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <Form>
          <Item>
            <Input placeholder="Underline Textbox" />
          </Item>
          </Form>
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

export default connect(mapStateToProps, bindAction)(Underline);
