
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail,Left,Body,Right } from 'native-base/Advanced';

import styles from './styles';

const sankhadeep = require('../../../img/contacts/sankhadeep.png');
const supriya = require('../../../img/contacts/supriya.png');
const himanshu = require('../../../img/contacts/himanshu.png');
const shweta = require('../../../img/contacts/shweta.png');
const shruti = require('../../../img/contacts/shruti.png');

let data = [
  {
    img: sankhadeep,
    text: 'Sankhadeep',
    note: 'Its time to build a difference . .',
  },
  {
    img: supriya,
    text: 'Supriya',
    note: 'One needs courage to be happy and smiling all time . . ',
  },
  {
    img: himanshu,
    text: 'Himanshu',
    note: 'Live a life style that matchs your vision',
  },
  {
    img: shweta,
    text: 'Shweta',
    note: 'Failure is temporary, giving up makes it permanent',
  },
  {
    img: shruti,
    text: 'Shruti',
    note: 'The biggest risk is a missed opportunity !!',
  }
]

const {
  replaceAt,
} = actions;

class NHListThumbnail extends Component {

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
    this.props.replaceAt('listThumbnail', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.replaceAt('list')}>
            <Icon name="ios-arrow-back" />
          </Button>
          </Left>

          <Body>
          <Title>List Thumbnail</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List  dataSource={this.state.dataSource} renderRow={(data) =>
            <ListItem>
              <Thumbnail square size={80} source={data.img} />
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

export default connect(mapStateToProps, bindAction)(NHListThumbnail);
