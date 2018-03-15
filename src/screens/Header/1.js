import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

class Header1 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left />
          <Body>
            <Title>Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Button onPress={() => this.props.navigation.goBack()}>
            <Text>Back</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Header1;
