import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  IconNB,
  Item,
  Input
} from "native-base";
import styles from "./styles";

class Error extends Component {
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
            <Title>Error Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item error>
              <Input placeholder="Textbox with Error Input" />
              <IconNB name="ios-close-circle" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Error;
