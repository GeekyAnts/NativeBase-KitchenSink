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

class Header8 extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header
          style={{ backgroundColor: "#dc4239" }}
          androidStatusBarColor="#dc2015"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" style={{ color: "#FFF" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#FFF" }}>Custom Header</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>Header with Custom background color</Text>
        </Content>
      </Container>
    );
  }
}

export default Header8;
