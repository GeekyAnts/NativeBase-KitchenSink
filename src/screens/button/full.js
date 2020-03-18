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

class Full extends Component {
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
            <Title>Full</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ backgroundColor: "#fff" }}>
          <Button full light style={styles.mt15}>
            <Text>Light</Text>
          </Button>
          <Button full info style={styles.mt15}>
            <Text>Info</Text>
          </Button>
          <Button full primary style={styles.mt15}>
            <Text>Primary</Text>
          </Button>
          <Button full success style={styles.mt15}>
            <Text>Success</Text>
          </Button>
          <Button full warning style={styles.mt15}>
            <Text>Warning</Text>
          </Button>
          <Button full danger style={styles.mt15}>
            <Text>Danger</Text>
          </Button>
          <Button full dark style={styles.mt15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Full;
