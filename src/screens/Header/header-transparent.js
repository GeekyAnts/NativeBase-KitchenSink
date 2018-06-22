import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body
} from "native-base";

class HeaderTransparent extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#87cefa" }}>
        <Header transparent>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Transparent Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Header with transparent prop</Text>
        </Content>
      </Container>
    );
  }
}

export default HeaderTransparent;
