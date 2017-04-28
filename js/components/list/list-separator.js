import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body, Separator } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';


class NHListSeparator extends Component {

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
            <Title>List Seperator</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered noTopBorder>
            <Text>FORWARD</Text>
          </Separator>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Claire Barclay</Text>
          </ListItem>
          <ListItem last>
            <Text>Kelso Brittany</Text>
          </ListItem>


          <Separator bordered>
            <Text>MIDFIELD</Text>
          </Separator>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Urbino Cendre</Text>
          </ListItem>
          <ListItem last>
            <Text>Lee Allen</Text>
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

export default connect(mapStateToProps, bindAction)(NHListSeparator);
