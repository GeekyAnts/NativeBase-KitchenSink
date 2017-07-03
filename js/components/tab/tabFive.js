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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                DOESN'T SUPPORT ADVANCED TABS :(
                numquam non magnam praesentium, maxime quaerat!
              </Text>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
