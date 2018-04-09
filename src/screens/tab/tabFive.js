import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class TabFour extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                DOESN'T SUPPORT ADVANCED TABS :( numquam non magnam praesentium,
                maxime quaerat!
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
