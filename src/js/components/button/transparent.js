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
  Text,
  H3
} from "native-base";

import styles from "./styles";

class Transparent extends Component {
  // eslint-disable-line

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
            <Title>Transparent</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff", padding: 20 }}>
          <Button transparent light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button transparent info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button transparent style={styles.mb15}><Text>Primary</Text></Button>
          <Button transparent success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button transparent warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button transparent danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button transparent dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Transparent;
