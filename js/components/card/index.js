import React, { Component } from "react";

import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Icon,
  Text,
  Left,
  Body,
  Right,
  List,
  ListItem
} from "native-base";

import styles from "./styles";

const datas = [
  {
    route: "BasicCard",
    text: "Basic Card"
  },
  {
    route: "NHCardTransparent",
    text: "Card Transparent"
  },
  {
    route: "NHCardList",
    text: "Card List"
  },
  {
    route: "NHCardImage",
    text: "Card Image"
  },
  {
    route: "NHCardShowcase",
    text: "Card Showcase"
  },
  {
    route: "NHCardHeaderAndFooter",
    text: "Card Header & Footer"
  }
];

class NHCard extends Component {
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
            <Title>Card</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas}
            renderRow={data =>
              <ListItem
                button
                onPress={() => this.props.navigation.navigate(data.route)}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: "#999" }} />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default NHCard;
