import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Button,
  Icon,
  Tabs,
  Tab,
  Text,
  Right,
  Left,
  Body,
  TabHeading
} from "native-base";
import TabOne from "./tabOne";
import TabTwo from "./tabTwo";
import TabThree from "./tabThree";

class ConfigTab extends Component {
  render() {
    return (
      <Container>
        <Header hasTabs>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 3 }}>
            <Title> Advanced Tabs</Title>
          </Body>
          <Right />
        </Header>
        <Tabs style={{ elevation: 3 }}>
          <Tab
            heading={
              <TabHeading>
                <Icon name="camera" />
                <Text>Camera</Text>
              </TabHeading>
            }
          >
            <TabOne />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Text>No Icon</Text>
              </TabHeading>
            }
          >
            <TabTwo />
          </Tab>
          <Tab
            heading={
              <TabHeading>
                <Icon name="apps" />
              </TabHeading>
            }
          >
            <TabThree />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

export default ConfigTab;
