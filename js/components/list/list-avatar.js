import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail, Left, Right, Body } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';

const pratik = require('../../../img/contacts/pratik.png');
const sanket = require('../../../img/contacts/sanket.png');
const megha = require('../../../img/contacts/megha.png');
const atul = require('../../../img/contacts/atul.png');
const saurabh = require('../../../img/contacts/saurabh.png');
const varun = require('../../../img/contacts/varun.png');


const datas = [
  {
    img: pratik,
    text: 'Kumar Pratik',
    note: 'Its time to build a difference . .',
    time: '3:43 pm',
  },
  {
    img: sanket,
    text: 'Kumar Sanket',
    note: 'One needs courage to be happy and smiling all time . . ',
    time: '1:12 pm',
  },
  {
    img: megha,
    text: 'Megha',
    note: 'Live a life style that matchs your vision',
    time: '10:03 am',
  },
  {
    img: atul,
    text: 'Atul Ranjan',
    note: 'Failure is temporary, giving up makes it permanent',
    time: '5:47 am',
  },
  {
    img: saurabh,
    text: 'Saurabh Sahu',
    note: 'The biggest risk is a missed opportunity !!',
    time: '11:11 pm',
  },
  {
    img: varun,
    text: 'Varun Sahu',
    note: 'Wish I had a Time machine . .',
    time: '8:54 pm',
  },
];


class NHListAvatar extends Component {

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
            <Title>List Avatar</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem avatar>
                <Left>
                  <Thumbnail source={data.img} />
                </Left>
                <Body>
                  <Text>{data.text}</Text>
                  <Text numberOfLines={1} note>{data.note}</Text>
                </Body>
                <Right>
                  <Text note>{data.time}</Text>
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
  return { };
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHListAvatar);
