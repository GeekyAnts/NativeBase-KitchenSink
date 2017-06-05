
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Body, Left, Right, IconNB, Item, Input } from 'native-base';

// import { actions } from 'react-native-navigation-redux-helpers';
// import { Actions } from 'react-native-router-flux';

import styles from './styles';

// const {
//   popRoute,
// } = actions;

class Rounded extends Component {

  // static propTypes = {
  //   popRoute: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //     key: React.PropTypes.string,
  //   }),
  // }

  // popRoute() {
  //   this.props.popRoute(this.props.navigation.key);
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Rounded</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Item rounded>
            <Input placeholder="Rounded Textbox" />
          </Item>
        </Content>
      </Container>
    );
  }
}

// function bindAction(dispatch) {
//   return {
//     popRoute: key => dispatch(popRoute(key)),
//   };
// }

const mapStateToProps = state => ({
  // navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default Rounded;
