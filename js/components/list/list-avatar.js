
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, IconNB, List, ListItem, Text, Thumbnail,Left,Right,Body } from 'native-base';

import styles from './styles';

const pratik = require('../../../img/contacts/pratik.png');
const sanket = require('../../../img/contacts/sanket.png');
const megha = require('../../../img/contacts/megha.png');
const atul = require('../../../img/contacts/atul.png');
const saurabh = require('../../../img/contacts/saurabh.png');
const varun = require('../../../img/contacts/varun.png');


let data = [
  {
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
  },
  {
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
  },
  {
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
  },
  {
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
  },
  {
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
  },
  {
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
  }
]

const {
  replaceAt,
} = actions;

class NHListAvatar extends Component {


    constructor(props) {
      super(props);
      const ds = new List.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
      this.state = {
        dataSource: ds.cloneWithRows(data),
      };
    }

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('listAvatar', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.replaceAt('list')}>
            <IconNB name="ios-arrow-back" />
          </Button>
          </Left>
          <Body>
          <Title>List Avatar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
        <List  dataSource={this.state.dataSource} renderRow={(data) =>
          <ListItem>
            <Thumbnail source={data.img} />
            <Body>
            <Text>{data.text}</Text>
            <Text note>{data.note}</Text>
            </Body>
          </ListItem>
        } />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    replaceAt: (routeKey, route, key) => dispatch(replaceAt(routeKey, route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHListAvatar);
