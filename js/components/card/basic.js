import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text, Body, Left, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class Basic extends Component {


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
            <Title>Basic Card</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem>
              <Body>
                <Text>
                This is just a basic card with some text to boot. Like it? Keep Scrolling...
              </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return { };
}

const mapStateToProps = state => ({
 
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Basic);
