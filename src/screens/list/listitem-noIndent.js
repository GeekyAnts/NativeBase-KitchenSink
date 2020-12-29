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

class NHListItemNoIndent extends Component {
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
            <Title>ListItem NoIndent</Title>
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
                  noIndent={this.state.selected === item}
                  onPress={() => this.setState({ selected: item })}
                  style={{
                    backgroundColor:
                      this.state.selected === item ? "#cde1f9" : "#fff"
                  }}
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

export default NHListItemNoIndent;
