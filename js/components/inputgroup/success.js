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

class Success extends Component {
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
            <Title>Success Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item success>
            <Input placeholder="Textbox with Success Input" />
            <IconNB name="ios-checkmark-circle" />
          </Item>
        </Content>
      </Container>
    );
  }
}

export default Success;
