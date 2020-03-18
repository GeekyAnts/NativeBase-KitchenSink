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
import { Grid, Row, Col } from "react-native-easy-grid";

class NestedGrid extends Component {
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
            <Title>Nested Grid</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col style={{ backgroundColor: "#DD9E2C" }} />
          <Col>
            <Row style={{ backgroundColor: "#00CE9F" }} />
            <Row style={{ backgroundColor: "#635DB7" }} />
          </Col>
        </Grid>
      </Container>
    );
  }
}

export default NestedGrid;
