import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Right,
  Body,
  Left,
  Picker,
  Form
} from "native-base";
import styles from "./styles";

const Item = Picker.Item;

class PickerWithIcon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected1: "key1"
    };
  }
  onValueChange(value: string) {
    this.setState({
      selected1: value
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
            <Title>Picker with Icon</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosHeader="Select your SIM"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              style={{ width: undefined }}
              selectedValue={this.state.selected1}
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
      </Container>
    );
  }
}

export default PickerWithIcon;
