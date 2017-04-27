import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Body, Left, Right, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

class IconInput extends Component {

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
            <Title>Icon Input</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item>
            <Icon active name="home" />
            <Input placeholder="Icon Textbox" />
          </Item>
          <Item>
            <Input placeholder="Icon Alignment in Textbox" />
            <Icon active name="swap" />
          </Item>
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

export default connect(mapStateToProps, bindAction)(IconInput);
