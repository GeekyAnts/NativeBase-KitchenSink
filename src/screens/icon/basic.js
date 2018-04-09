import React, { Component } from "react";
import { View } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Body,
  Left,
  Right
} from "native-base";

import styles from "./styles";

class BasicIcon extends Component {
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
            <Title>Basic</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={styles.iconContainer}>
            <Icon
              name="logo-apple"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="pizza"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="person"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="beer"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="bicycle"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="navigate"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="cloud-circle"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="pie"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="bookmarks"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="pulse"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="camera"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="mic-off"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="film"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="flame"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="paper"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="paper-plane"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="speedometer"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="cart"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="flask"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="cloudy-night"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="partly-sunny"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="paw"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="rose"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="pint"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="shuffle"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="game-controller-a"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="glasses"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="microphone"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="keypad"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="color-filter"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="eye"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="mic-off"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="alarm"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="medkit"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="ionic"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="star-half"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="refresh"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="train"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="musical-notes"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="wine"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="nutrition"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="thunderstorm"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="grid"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="settings"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="chatbubbles"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="chatboxes"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="cog"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="baseball"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="bulb"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="calculator"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="rainy"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="videocam"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="play"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="disc"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="body"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="lock"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="skip-backward"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="key"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="flag"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="skip-forward"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="barcode"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-tux"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="copy"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="stopwatch"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="medical"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="archive"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="bookmark"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="clipboard"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="happy"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="share"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="bluetooth"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="search"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="wifi"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="hand"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="trash"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="images"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              active
              name="attach"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-facebook"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-googleplus"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-twitter"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-github"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-whatsapp"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-wordpress"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="logo-youtube"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
            <Icon
              name="mail"
              style={{ width: 45, height: 45, justifyContent: "center" }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default BasicIcon;
