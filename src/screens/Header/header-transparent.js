import React, { Component } from "react";
import { Dimensions, ImageBackground } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;
const cardImage = require("../../../assets/header-transparent.jpg");

class HeaderTransparent extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <ImageBackground
          source={cardImage}
          style={{ width: deviceWidth, height: deviceHeight }}
        >
          <Header transparent>
            <Left>
              <Button
                transparent
                onPress={() => this.props.navigation.goBack()}
              >
                <Icon name="arrow-back" />
              </Button>
            </Left>
            <Body>
              <Title>Transparent Header</Title>
            </Body>
            <Right />
          </Header>

          <Content padder>
            <Text>Header with transparent prop</Text>
          </Content>
        </ImageBackground>
      </Container>
    );
  }
}

export default HeaderTransparent;
