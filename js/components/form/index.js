
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Body, Right, List, ListItem } from 'native-base';

// import { actions } from 'react-native-navigation-redux-helpers';
// import { Actions } from 'react-native-router-flux';
// import { openDrawer, closeDrawer } from '../../actions/drawer';

import styles from './styles';

// const {
//   pushRoute,
// } = actions;

const datas = [
  {
    route: 'FixedLabel',
    text: 'Fixed Label',
  },
  {
    route: 'InlineLabel',
    text: 'Inline Label',
  },
  {
    route: 'FloatingLabel',
    text: 'Floating Label',
  },
  {
    route: 'PlaceholderLabel',
    text: 'Placeholder Label',
  },
  {
    route: 'StackedLabel',
    text: 'Stacked Label',
  },
  {
    route: 'RegularInput',
    text: 'Regular Textbox',
  },
  {
    route: 'UnderlineInput',
    text: 'Underlined Textbox',
  },
  {
    route: 'RoundedInput',
    text: 'Rounded Textbox',
  },
  {
    route: 'IconInput',
    text: 'Icon Textbox',
  },
  {
    route: 'SuccessInput',
    text: 'Success Input Textbox',
  },
  {
    route: 'ErrorInput',
    text: 'Error Input Textbox',
  },
  {
    route: 'DisabledInput',
    text: 'Disabled Textbox',
  },
];

class NHForm extends Component {

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
            <Title>Form & Inputs</Title>
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

export default NHForm;
