
import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View } from 'native-base';

import styles from './styles';

export default class TabOne extends Component { // eslint-disable-line

  render() { // eslint-disable-line
    return (
      <Container style={styles.container}>
        <Content padder>
          <Card>
            <CardItem>
              <Text>
                NativeBase is open source and free.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Platform specific codebase for components
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Any native third-party libraries can be included along with NativeBase.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Single file to theme your app and NativeBase components.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Gives an ease to include different font types in your app.
              </Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
