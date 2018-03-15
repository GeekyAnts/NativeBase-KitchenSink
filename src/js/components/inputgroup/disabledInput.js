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

class Disabled extends Component {
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

export default Disabled;
