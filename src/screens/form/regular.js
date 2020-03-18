import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right,
  Input,
  Item,
  Form
} from "native-base";
import styles from "./styles";

class Regular extends Component {
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
            <Title>Regular</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item regular>
              <Input placeholder="Regular Textbox" />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default Regular;
