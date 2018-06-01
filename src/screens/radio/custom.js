import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Radio,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHCustomRadio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
    };
  }
  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false
    });
  }
  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false
    });
  }
  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false
    });
  }
  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true
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
            <Title>Custom Radio</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem
            selected={this.state.radio1}
            onPress={() => this.toggleRadio1()}
          >
            <Left>
              <Text>Lunch Break</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio1}
                onPress={() => this.toggleRadio1()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio2}
            onPress={() => this.toggleRadio2()}
          >
            <Left>
              <Text>Daily Stand Up</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio2}
                onPress={() => this.toggleRadio2()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio3}
            onPress={() => this.toggleRadio3()}
          >
            <Left>
              <Text>Finish List Screen</Text>
            </Left>
            <Right>
              <Radio
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                selected={this.state.radio3}
                onPress={() => this.toggleRadio3()}
              />
            </Right>
          </ListItem>
          <ListItem
            selected={this.state.radio4}
            onPress={() => this.toggleRadio4()}
          >
            <Left>
              <Text>Discussion with Client</Text>
            </Left>
            <Right>
              <Radio
                selected={this.state.radio4}
                color={"#f0ad4e"}
                selectedColor={"#5cb85c"}
                onPress={() => this.toggleRadio4()}
              />
            </Right>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHCustomRadio;
