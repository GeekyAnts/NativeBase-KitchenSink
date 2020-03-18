import React, { Component } from "react";
import { View } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Left,
  Right,
  Body,
  Text
} from "native-base";
import styles from "./styles";

class Disabled extends Component {
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
            <Title>Disabled</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={{ paddingHorizontal: 20, padding: 10 }}>
            <Button disabled style={styles.mb15}>
              <Text>Default</Text>
            </Button>
            <Button disabled bordered style={styles.mb15}>
              <Text>Outline</Text>
            </Button>
            <Button disabled rounded style={styles.mb15}>
              <Text>Rounded</Text>
            </Button>
            <Button disabled large style={styles.mb15}>
              <Text>Custom</Text>
            </Button>
            <Button disabled iconRight style={styles.mb15}>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button disabled block style={styles.mb15}>
              <Text>Block</Text>
            </Button>
          </View>
          <Button disabled full style={styles.mb15}>
            <Text>Full</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

export default Disabled;
