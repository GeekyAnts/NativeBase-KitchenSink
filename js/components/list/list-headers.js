import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


class NHListHeader extends Component {

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
            <Title>List Headers</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemHeader first>
            <Text>COMEDY</Text>
          </ListItem>
          <ListItem>
            <Text>Hangover</Text>
          </ListItem>
          <ListItem>
            <Text>Horrible Bosses</Text>
          </ListItem>
          <ListItem>
            <Text>Wedding Crashers</Text>
          </ListItem>
          <ListItem last>
            <Text>Cop Out</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>HORROR</Text>
          </ListItem>
          <ListItem>
            <Text>The Evil Dead</Text>
          </ListItem>
          <ListItem>
            <Text>Residential Evil</Text>
          </ListItem>
          <ListItem last>
            <Text>Conjuring</Text>
          </ListItem>

          <ListItem itemHeader>
            <Text>ACTION</Text>
          </ListItem>
          <ListItem>
            <Text>Terminator Genesis</Text>
          </ListItem>
          <ListItem>
            <Text>Fast And Furious</Text>
          </ListItem>
          <ListItem last>
            <Text>Top Gun</Text>
          </ListItem>
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

export default connect(mapStateToProps, bindAction)(NHListHeader);
