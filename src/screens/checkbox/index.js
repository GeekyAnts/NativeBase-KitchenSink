import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  CheckBox,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

class NHCheckbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkbox1: true,
      checkbox2: true,
      checkbox3: true,
      checkbox4: false
    };
  }
  toggleSwitch1() {
    this.setState({
      checkbox1: !this.state.checkbox1
    });
  }
  toggleSwitch2() {
    this.setState({
      checkbox2: !this.state.checkbox2
    });
  }
  toggleSwitch3() {
    this.setState({
      checkbox3: !this.state.checkbox3
    });
  }
  toggleSwitch4() {
    this.setState({
      checkbox4: !this.state.checkbox4
    });
  }
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
            <Title>Check Box</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem button onPress={() => this.toggleSwitch1()}>
            <CheckBox
              checked={this.state.checkbox1}
              onPress={() => this.toggleSwitch1()}
            />
            <Body>
              <Text>Lunch Break</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch2()}>
            <CheckBox
              color="red"
              checked={this.state.checkbox2}
              onPress={() => this.toggleSwitch2()}
            />
            <Body>
              <Text>Daily Stand Up</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch3()}>
            <CheckBox
              color="green"
              checked={this.state.checkbox3}
              onPress={() => this.toggleSwitch3()}
            />
            <Body>
              <Text>Finish list Screen</Text>
            </Body>
          </ListItem>
          <ListItem button onPress={() => this.toggleSwitch4()}>
            <CheckBox
              color="#000"
              checked={this.state.checkbox4}
              onPress={() => this.toggleSwitch4()}
            />
            <Body>
              <Text>Discussion with Client</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}

export default NHCheckbox;
