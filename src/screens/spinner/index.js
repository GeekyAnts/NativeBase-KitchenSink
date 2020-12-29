import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Spinner,
  Left,
  Right,
  Body
} from "native-base";

import styles from "./styles";

class NHSpinner extends Component {
  // eslint-disable-line

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.openDrawer()}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Spinner</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <Spinner />
          <Spinner color="red" />
          <Spinner color="green" />
          <Spinner color="blue" />
        </Content>
      </Container>
    );
  }
}

export default NHSpinner;
