import React, { Component } from "react";
import {
  Container,
  Header,
  Left,
  Button,
  Body,
  Title,
  Icon,
  Right,
  Content,
  ActionSheet,
  Text
} from "native-base";
import styles from "./styles";
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

export default class ActionSheetNB extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
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
            <Title>ActionSheet</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Button
            onPress={() =>
              ActionSheet.show(
                {
                  options: BUTTONS,
                  cancelButtonIndex: CANCEL_INDEX,
                  destructiveButtonIndex: DESTRUCTIVE_INDEX,
                  title: "Select an option"
                },
                buttonIndex => {
                  this.setState({ clicked: BUTTONS[buttonIndex] });
                }
              )}
          >
            <Text>Actionsheet</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
