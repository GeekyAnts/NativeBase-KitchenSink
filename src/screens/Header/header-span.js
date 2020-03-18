import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

class HeaderSpan extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header span>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header Span</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Text>Header span example</Text>
        </Content>
      </Container>
    );
  }
}

export default HeaderSpan;
