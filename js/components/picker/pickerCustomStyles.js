import React, { Component } from "react";
import { Platform } from "react-native";
import { Container, Header, Title, Content, Button, Icon, Text, Right, Body, Left, Picker, Form, View, H3, Item as FormItem } from "native-base";
import styles from "./styles";

const Item = Picker.Item;
export default class PickerCustomStyles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
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
              placeholder="Select One"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholderIconColor="#007aff"
              textStyle={{ color: "#007aff" }}
              itemStyle={{ backgroundColor: "#d3d3d3", marginLeft: 0, paddingLeft: 10 }}
              itemTextStyle={{ color: '#007aff' }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Item label="Wallet" value="key0" />
              <Item label="ATM Card" value="key1" />
              <Item label="Debit Card" value="key2" />
              <Item label="Credit Card" value="key3" />
              <Item label="Net Banking" value="key4" />
            </Picker>
          </Form>
        </Content>
      </Container >
    );
  }
}
