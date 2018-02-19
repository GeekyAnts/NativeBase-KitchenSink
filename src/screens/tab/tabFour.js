import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class TabFour extends Component {
  render() {
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem header>
            <Text>Recommended by Microsoft</Text>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                If you're looking to get started with React Native + CodePush,
                and are looking for an awesome starter kit, you should check out
                Native Starter Pro - Microsoft's react-native-code-push repo
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
