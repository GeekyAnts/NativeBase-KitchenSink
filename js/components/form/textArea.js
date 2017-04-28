import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Textarea, Body, Left, Right, IconNB } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class TextArea extends Component {

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <IconNB name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>TextArea</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Textarea rowSpan={5} bordered placeholder="Textarea" />
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

export default connect(mapStateToProps, bindAction)(TextArea);
