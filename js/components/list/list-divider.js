
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const {
  popRoute,
} = actions;

class NHListDivider extends Component {

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
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>List Divider</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <Text>Aaron Bennet</Text>
          </ListItem>
          <ListItem>
            <Text>Ali Connors</Text>
          </ListItem>
          <ListItem>
            <Text>Allen Lee</Text>
          </ListItem>
          <ListItem>
            <Text>Andy Hertzfeld</Text>
          </ListItem>
          <ListItem last>
            <Text>Angana Ghosh</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>B</Text>
          </ListItem>
          <ListItem>
            <Text>Bradley Horowitz</Text>
          </ListItem>
          <ListItem>
            <Text>Brian Swetland</Text>
          </ListItem>
          <ListItem last>
            <Text>Brittany Kelso</Text>
          </ListItem>

          <ListItem itemDivider>
            <Text>C</Text>
          </ListItem>
          <ListItem>
            <Text>Caroline Aaron</Text>
          </ListItem>
          <ListItem>
            <Text>Cendre Urbino</Text>
          </ListItem>
          <ListItem last>
            <Text>Claire Barclay</Text>
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
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHListDivider);
