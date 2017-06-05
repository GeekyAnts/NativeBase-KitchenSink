
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Left, Right, Body, Icon, List, ListItem, Content, Text } from 'native-base';

// import { actions } from 'react-native-navigation-redux-helpers';
// import { Actions } from 'react-native-router-flux';
// import { openDrawer, closeDrawer } from '../../actions/drawer';

import styles from './styles';

// const {
//   pushRoute,
// } = actions;

const datas = [
  {
    route: 'BasicFab',
    text: 'Basic FAB',
  },
  {
    route: 'MultipleFab',
    text: 'Multiple FABs',
  },
];

class NHFab extends Component {

  // static propTypes = {
  //   openDrawer: React.PropTypes.func,
  //   pushRoute: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //     key: React.PropTypes.string,
  //   }),
  // }

  // pushRoute(route) {
  //   this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  // }

  render() {
    return (
      <Container style={styles.container}>

        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>FAB</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem button onPress={() => this.props.navigation.navigate(data.route)} >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: '#999' }} />
                </Right>
              </ListItem>
          }
          />
        </Content>
      </Container>
    );
  }
}

// function bindAction(dispatch) {
//   return {
//     openDrawer: () => dispatch(openDrawer()),
//     closeDrawer: () => dispatch(closeDrawer()),
//     pushRoute: (route, key) => dispatch(pushRoute(route, key)),
//   };
// }

const mapStateToProps = state => ({
  // navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default NHFab;
