
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class NHCard extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Card</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Card>
            <CardItem header>
              <Text>NativeBase</Text>
            </CardItem>
            <CardItem>
              <Text>
                NativeBase is a free and open source framework that enables developers to build
                high-quality mobile apps using React Native iOS and Android apps
                with a fusion of ES6.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                NativeBase builds a layer on top of React Native that provides you with
                basic set of components for mobile application development.
              </Text>
            </CardItem>
            <CardItem>
              <Text>
                Get on the mobile fast track with NativeBase, the fastest-growing platform
                and tool set for iOS and Android development.
              </Text>
            </CardItem>
            <CardItem header>
              <Text>GeekyAnts</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHCard);
