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
import { Grid, Row } from "react-native-easy-grid";

class CustomRow extends Component {
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
            <Title>Custom Row</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row size={1} style={{ backgroundColor: "#635DB7" }} />
          <Row size={2} style={{ backgroundColor: "#00CE9F" }} />
          <Row size={4} style={{ backgroundColor: "#DD9E2C" }} />
        </Grid>
      </Container>
    );
  }
}

export default CustomRow;
