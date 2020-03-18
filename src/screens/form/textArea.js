import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Textarea,
  Body,
  Left,
  Right,
  Icon
} from "native-base";
import styles from "./styles";

class TextArea extends Component {
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
            <Title>TextArea</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
        </Content>
      </Container>
    );
  }
}

export default TextArea;
