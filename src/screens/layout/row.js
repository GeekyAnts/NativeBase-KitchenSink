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

class RowNB extends Component {
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
            <Title>Row Grid</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row style={{ backgroundColor: "#635DB7" }} />
          <Row style={{ backgroundColor: "#00CE9F" }} />
        </Grid>
      </Container>
    );
  }
}

export default RowNB;
