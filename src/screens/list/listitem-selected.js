import React, { Component } from "react";
import { FlatList } from "react-native";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  ListItem,
  Text,
  Left,
  Right,
  Body
} from "native-base";
import styles from "./styles";

const datas = [
  "Simon Mignolet",
  "Nathaniel Clyne",
  "Dejan Lovren",
  "Mama Sakho",
  "Alberto Moreno",
  "Emre Can",
  "Joe Allen",
  "Phil Coutinho"
];

class NHListItemSelected extends Component {
  state = {
    datas,
    selected: "Simon Mignolet"
  };

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
            <Title>List Item Selected</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <FlatList
            data={this.state.datas}
            extraData={this.state}
            keyExtractor={(item, index) => String(index)}
            renderItem={({ item, index }) => {
              return (
                <ListItem
                  selected={this.state.selected === item}
                  onPress={() => this.setState({ selected: item })}
                >
                  <Left>
                    <Text>
                      {item}
                    </Text>
                  </Left>
                  <Right>
                    <Icon name="arrow-forward" />
                  </Right>
                </ListItem>
              );
            }}
          />
        </Content>
      </Container>
    );
  }
}

export default NHListItemSelected;
