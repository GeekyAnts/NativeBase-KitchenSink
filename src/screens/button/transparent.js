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
} from "native-base";
import styles from "./styles";

class Transparent extends Component {
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

        <Content padder style={{ backgroundColor: "#fff" }}>
          <Button light transparent style={styles.mb15}>
            <Text>Light</Text>
          </Button>
          <Button info transparent style={styles.mb15}>
            <Text>Info</Text>
          </Button>
          <Button primary transparent style={styles.mb15}>
            <Text>Primary</Text>
          </Button>
          <Button success transparent style={styles.mb15}>
            <Text>Success</Text>
          </Button>
          <Button warning transparent style={styles.mb15}>
            <Text>Warning</Text>
          </Button>
          <Button danger transparent style={styles.mb15}>
            <Text>Danger</Text>
          </Button>
          <Button dark transparent style={styles.mb15}>
            <Text>Dark</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Transparent;
