import React, { Component } from "react";

import { Container, Content, Card, CardItem, Text, Body } from "native-base";

import styles from "./styles";

export default class TabThree extends Component {
  // eslint-disable-line

  render() {
    // eslint-disable-line
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase is a free and open source framework that enables
                developers to build high-quality mobile apps using React Native
                iOS and Android apps with a fusion of ES6.
              </Text>
            </Body>
          </CardItem>
        </Card>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase gives you the potential of building applications
                that run on iOS and Android using a single codebase.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
