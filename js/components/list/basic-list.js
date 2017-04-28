import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body, Item, Input } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


const datas = ['Simon Mignolet', 'Nathaniel Clyne', 'Dejan Lovren', 'Mama Sakho', 'Alberto Moreno', 'Emre Can', 'Joe Allen', 'Phil Coutinho'];

class NHBasicList extends Component {

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
            <Title>Basic List</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem>
                <Text>{data}</Text>
                <Right>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
          }
          />
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

export default connect(mapStateToProps, bindAction)(NHBasicList);
