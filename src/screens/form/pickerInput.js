import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Form,
  Body,
  Left,
  Right,
  Label,
  Item,
  Picker
} from "native-base";
import styles from "./styles";

class PickerInput extends Component {
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
          <Body>
            <Title>Picker Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Form>
            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="ios-arrow-down-outline" />}
                style={{ width: undefined }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Item label="Wallet" value="key0" />
                <Item label="ATM Card" value="key1" />
                <Item label="Debit Card" value="key2" />
                <Item label="Credit Card" value="key3" />
                <Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}

export default PickerInput;
