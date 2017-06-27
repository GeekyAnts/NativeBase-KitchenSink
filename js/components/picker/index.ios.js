import React, { Component } from "react";
import { Platform } from "react-native";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Right,
  Body,
  Left,
  List,
  ListItem,
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";

import styles from "./styles";

const datas = [
  {
    route: "RegularPicker",
    text: "Regular"
  },
  {
    route: "PlaceholderPicker",
    text: "Placeholder"
  },
  {
    route: "PlaceholderPickerNote",
    text: "Placeholder (without note)"
  },
  {
    route: "BackButtonPicker",
    text: "Custom Back Button"
  },
  {
    route: "HeaderPicker",
    text: "Custom Header Text"
  },
  {
    route: "HeaderStylePicker",
    text: "Custom Header Style"
  },
  {
    route: "CustomHeaderPicker",
    text: "Custom Header"
  }
];

class NHPicker extends Component {
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
            <Title>Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />

        </Content>
      </Container>
    );
  }
}

export default NHPicker;
