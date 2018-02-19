import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class TabFour extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Text>Recommended by Awesome React Native</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                NativeBase added into the list of Frameworks of Awesome React
                Native and are also used by many other React lovers across the
                world.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
