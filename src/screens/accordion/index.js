import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  List,
  ListItem,
  Text
} from "native-base";

const datas = [
  {
    route: "AccordionDefault",
    text: "Default Accordion"
  },
  {
    route: "AccordionIcon",
    text: "Icon and Expanded Icon"
  },
  {
    route: "AccordionIconStyle",
    text: "Icon and Expanded Icon style"
  },
  {
    route: "AccordionHeaderContentStyle",
    text: "Header and Content style"
  },
  {
    route: "AccordionCustomHeaderContent",
    text: "Custom Header and Content"
  }
];

class NHAccordion extends Component {
  render() {
    return (
      <Container>
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
            <Title>Accordion</Title>
          </Body>
          <Right />
        </Header>

        <Content style={{ backgroundColor: "white" }}>
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

export default NHAccordion;
