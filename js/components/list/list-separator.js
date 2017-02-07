
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body, Separator } from 'native-base';

import styles from './styles';

const {
  popRoute,
} = actions;

class NHListSeparator extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Seperator</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered>
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
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHListSeparator);
