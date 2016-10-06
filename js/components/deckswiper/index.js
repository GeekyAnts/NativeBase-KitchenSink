
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Button, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const cardOne = require('../../../img/swiper-1.png');
const cardTwo = require('../../../img/swiper-2.png');
const cardThree = require('../../../img/swiper-3.png');
const cardFour = require('../../../img/swiper-4.png');

const cards = [
  {
    name: 'One',
    image: cardOne,
  },
  {
    name: 'Two',
    image: cardTwo,
  },
  {
    name: 'Three',
    image: cardThree,
  },
  {
    name: 'Four',
    image: cardFour,
  },
];

class NHDeckSwiper extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Deck Swiper</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <View padder >
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Thumbnail source={item.image} />
                  <Text>Instrumental Songs</Text>
                  <Text note>Guitar</Text>
                </CardItem>
                <CardItem>
                  <Image style={{ resizeMode: 'cover', width: null }} source={item.image} />
                </CardItem>
                <CardItem>
                  <Icon name={'ios-heart'} style={{ color: '#ED4A6A' }} />
                  <Text>{item.name}</Text>
                </CardItem>
              </Card>
            }
          />
        </View>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHDeckSwiper);
