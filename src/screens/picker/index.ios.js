import React, { Component } from "react";
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
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "RegularPicker",
    text: "Regular"
  },
  {
    route: "PickerWithIcon",
    text: "Picker with Icon"
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
    route: "PickerTextItemText",
    text: "Picker text and item text style"
  },
  {
    route: "BackButtonPicker",
    text: "Custom Back Button"
  },
  {
    route: "CustomHeaderPicker",
    text: "Custom Header"
  },
  {
    route: "HeaderPicker",
    text: "Custom Header Text"
  },
  {
    route: "HeaderStylePicker",
    text: "Custom Header Style"
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
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
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
