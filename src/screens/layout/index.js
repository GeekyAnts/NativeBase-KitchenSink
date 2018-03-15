import React, { Component } from "react";
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
  List,
  ListItem,
  Text
} from "native-base";

const datas = [
  {
    route: "RowNB",
    text: "Row Grid"
  },
  {
    route: "ColumnNB",
    text: "Column Grid"
  },
  {
    route: "NestedGrid",
    text: "Nested Grid"
  },
  {
    route: "CustomRow",
    text: "Custom Row Size Grid"
  },
  {
    route: "CustomCol",
    text: "Custom Column Size Grid"
  }
];

class NHLayout extends Component {
  render() {
    return (
      <Container style={{ backgroundColor: "#FBFAFA" }}>
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
            <Title>Layout</Title>
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
                <Left>
                  <Text>
                    {data.text}
                  </Text>
                </Left>
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

export default NHLayout;
