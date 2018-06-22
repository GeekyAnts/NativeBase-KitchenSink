import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "FixedLabel",
    text: "Fixed Label"
  },
  {
    route: "InlineLabel",
    text: "Inline Label"
  },
  {
    route: "FloatingLabel",
    text: "Floating Label"
  },
  {
    route: "PlaceholderLabel",
    text: "Placeholder Label"
  },
  {
    route: "StackedLabel",
    text: "Stacked Label"
  },
  {
    route: "RegularInput",
    text: "Regular Textbox"
  },
  {
    route: "UnderlineInput",
    text: "Underlined Textbox"
  },
  {
    route: "RoundedInput",
    text: "Rounded Textbox"
  },
  {
    route: "IconInput",
    text: "Icon Textbox"
  },
  {
    route: "PickerInput",
    text: "Textbox with Picker"
  },
  {
    route: "SuccessInput",
    text: "Success Input Textbox"
  },
  {
    route: "ErrorInput",
    text: "Error Input Textbox"
  },
  {
    route: "DisabledInput",
    text: "Disabled Textbox"
  },
  {
    route: "TextArea",
    text: "TextArea"
  }
];

class NHForm extends Component {
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
            <Title>Form & Inputs</Title>
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

export default NHForm;
