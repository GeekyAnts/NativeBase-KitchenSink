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

class Outline extends Component {
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
            <Title>Outline</Title>
          </Body>
          <Right />
        </Header>

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Button bordered light style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button bordered info style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button bordered primary style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button bordered success style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button bordered warning style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button bordered danger style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button bordered dark style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Outline;
