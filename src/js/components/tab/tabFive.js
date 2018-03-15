import React, { Component } from "react";

import { Container, Content, Card, CardItem, Text, Body } from "native-base";

import styles from "./styles";

export default class TabFour extends Component {
  // eslint-disable-line

  render() {
    // eslint-disable-line
    return (
      <Content padder style={{ marginTop: 0 }}>
        <Card style={{ flex: 0 }}>
          <CardItem>
            <Body>
              <Text>
                NativeBase's stack of components is built using native UI
                components so there are no compromises with the UX.
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
