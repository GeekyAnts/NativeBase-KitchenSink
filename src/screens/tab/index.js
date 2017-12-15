import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  List,
  ListItem
} from "native-base";
import styles from "./styles";

const datas = [
  {
    route: "BasicTab",
    text: "Basic Tabs"
  },
  {
    route: "ConfigTab",
    text: "Advanced Tabs"
  },
  {
    route: "ScrollableTab",
    text: "Scrollable Tabs"
  }
];

class NHTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true
    };
  }
  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false
    });
  }
  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false
    });
  }
  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true
    });
  }
  render() {
    return (
      <Container style={styles.container}>
        <Header noShadow>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Tabs</Title>
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

export default NHTab;
