import React, { Component } from "react";
import { Content, Card, CardItem, Text, Body } from "native-base";

export default class TabOne extends Component {
  render() {
    return (
      <Content padder>
        <Card>
          <CardItem>
            <Body>
              <Text>NativeBase is open source and free.</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>Platform specific codebase for components</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Any native third-party libraries can be included along with
                NativeBase.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Single file to theme your app and NativeBase components.
              </Text>
            </Body>
          </CardItem>
          <CardItem>
            <Body>
              <Text>
                Gives an ease to include different font types in your app.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
