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

class Block extends Component {
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
            <Title>Block</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#FFF" }}>
          <Button block light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button block info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button block primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button block success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button block warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button block danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button block dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Block;
