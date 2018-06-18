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
  Text,
  ListItem,
  List
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "Header1",
    text: "Only Title"
  },
  {
    route: "Header2",
    text: "Icon Buttons"
  },
  {
    route: "Header3",
    text: "Text Buttons"
  },
  {
    route: "Header4",
    text: "Icon Button and Text Button"
  },
  {
    route: "Header5",
    text: "Icon and Text Buttons"
  },
  {
    route: "Header6",
    text: "Multiple Icon Buttons"
  },
  {
    route: "Header7",
    text: "Title and Subtitle"
  },
  {
    route: "Header8",
    text: "Custom Background Color"
  },
  {
    route: "HeaderSpan",
    text: "Header Span"
  },
  {
    route: "HeaderNoShadow",
    text: "Header without shadow"
  },
  {
    route: "HeaderTransparent",
    text: "Header Transparent"
  }
];

class HeaderNB extends Component {
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
            <Title>Headers</Title>
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
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>}
          />
        </Content>
      </Container>
    );
  }
}

export default HeaderNB;
