import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right, IconNB } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


class NHCardHeaderAndFooter extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Header & Footer Card</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                NativeBase is a free and open source framework that enables developers to build
                high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                Get on the mobile fast track with NativeBase, the fastest-growing platform
                and tool set for iOS and Android development.
              </Text>
              </Body>
            </CardItem>
            <CardItem footer>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {};
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHCardHeaderAndFooter);
