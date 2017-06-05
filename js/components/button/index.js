
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, List, ListItem } from 'native-base';

// import { Actions } from 'react-native-router-flux';
// import { actions } from 'react-native-navigation-redux-helpers';
// import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

// const {
//     replaceAt,
//     pushRoute,
//   } = actions;

const datas = [
  {
    route: 'Default',
    text: 'Default Button',
  },
  {
    route: 'Outline',
    text: 'Outline Button',
  },
  {
    route: 'Rounded',
    text: 'Rounded Button',
  },
  {
    route: 'Block',
    text: 'Block Button',
  },
  {
    route: 'Full',
    text: 'Full Button',
  },
  {
    route: 'Custom',
    text: 'Custom Size Button',
  },
  {
    route: 'Transparent',
    text: 'Transparent Button',
  },
  {
    route: 'IconBtn',
    text: 'Icon Button',
  },
  {
    route: 'Disabled',
    text: 'Disabled Button',
  },
];

class NHButton extends Component {  // eslint-disable-line

  // static propTypes = {
  //   openDrawer: React.PropTypes.func,
  //   replaceAt: React.PropTypes.func,
  //   pushRoute: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //     key: React.PropTypes.string,
  //   }),
  // }

  // replaceAt(route) {
  //   this.props.replaceAt('button', { key: route }, this.props.navigation.key);
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
            <Title>Buttons</Title>
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
//     replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
//     pushRoute: (route, key) => dispatch(pushRoute(route, key)),
//   };
// }

const mapStateToProps = state => ({
  // navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default NHButton;
