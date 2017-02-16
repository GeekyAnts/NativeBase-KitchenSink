
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, IconNB, Text, List, Left, Right, Body, ListItem, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  pushRoute,
} = actions;
const datas = [
  {
    route: 'regularInput',
    text: 'Regular Textbox',
  },
  {
    route: 'underlineInput',
    text: 'Underlined Textbox',
  },
  {
    route: 'roundedInput',
    text: 'Rounded Textbox',
  },
  {
    route: 'iconInput',
    text: 'Icon Textbox',
  },
  {
    route: 'successInput',
    text: 'Success Input Textbox',
  },
  {
    route: 'errorInput',
    text: 'Error Input Textbox',
  },
  {
    route: 'disabledInput',
    text: 'Disabled Textbox',
  },
];
class NHInputGroup extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <IconNB name="ios-menu" />
            </Button>
          </Left>
          <Body>
            <Title>Inputs</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <List
          dataArray={datas} renderRow={data =>
            <ListItem button onPress={() => this.pushRoute(data.route)}>
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

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHInputGroup);
