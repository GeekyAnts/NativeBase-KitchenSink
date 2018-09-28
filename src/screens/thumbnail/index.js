import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Thumbnail,
  Text,
  Body,
  Left,
  Right,
  View
} from "native-base";
import styles from "./styles";

const logo = require("../../../assets/splashscreen.png");
const cover = require("../../../assets/web-cover1.png");

class NHThumbnail extends Component {
  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Text style={styles.mb10}>Square Thumbnail</Text>
            <Thumbnail square small source={logo} style={styles.mb10} />
            <Thumbnail square source={logo} style={styles.mb10} />
            <Thumbnail square large source={logo} style={styles.mb35} />

            <Text style={styles.mb10}>Circular Thumbnail</Text>
            <Thumbnail small source={cover} style={styles.mb10} />
            <Thumbnail source={cover} style={styles.mb10} />
            <Thumbnail large source={cover} />
          </View>
        </Content>
      </Container>
    );
  }
}

export default NHThumbnail;
