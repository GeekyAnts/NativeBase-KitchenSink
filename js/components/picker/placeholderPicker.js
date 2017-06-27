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
  Picker,
  Form,
  View,
  H3,
  Item as FormItem
} from "native-base";

import styles from "./styles";

const Item = Picker.Item;

class RegularPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined
    };
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
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
          <Body style={{ flex: 3 }}>
            <Title>Placeholder Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Picker
              mode="dropdown"
              style={{ width: Platform.OS === "ios" ? undefined : 120 }}
              placeholder="Select One"
              selectedValue={this.state.selected2}
              onValueChange={this.onValueChange2.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default RegularPicker;
