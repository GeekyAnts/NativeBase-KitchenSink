
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, IconNB, Text, List, Left, Right, Body, ListItem, Icon } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  replaceAt,
} = actions;
const data = [
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
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    const ds = new List.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      dataSource: ds.cloneWithRows(data),
    };
  }

  replaceAt(route) {
    this.props.replaceAt('inputgroup', { key: route }, this.props.navigation.key);
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
            <Title>InputGroup</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
        <List
          dataSource={this.state.dataSource} renderRow={data =>
            <ListItem button onPress={() => this.replaceAt(data.route)}>
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
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHInputGroup);
