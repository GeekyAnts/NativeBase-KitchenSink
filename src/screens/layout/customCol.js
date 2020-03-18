import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Left,
  Right,
  Body
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

class CustomCol extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Col</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col size={1} style={{ backgroundColor: "#00CE9F" }} />
          <Col size={2} style={{ backgroundColor: "#635DB7" }} />
          <Col size={4} style={{ backgroundColor: "#DD9E2C" }} />
        </Grid>
      </Container>
    );
  }
}

export default CustomCol;
