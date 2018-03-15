import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from "native-base";

import styles from "./styles";

class Rounded extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rounded</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item rounded>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}

export default Rounded;
