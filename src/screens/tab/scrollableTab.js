import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Right,
  Left,
  Body,
  ScrollableTab
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";
import TabFour from "./tabFour";
import TabFive from "./tabFive";

class BasicTab extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title> Scrollable Tabs</Title>
          </Body>
          <Right />
        </Header>

        <Tabs renderTabBar={() => <ScrollableTab />}>
          <Tab heading="Tab1">
            <TabOne />
          </Tab>
          <Tab heading="Tab2">
            <TabTwo />
          </Tab>
          <Tab heading="Tab3">
            <TabThree />
          </Tab>
          <Tab heading="Tab4">
            <TabFour />
          </Tab>
          <Tab heading="Tab5">
            <TabFive />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default BasicTab;
