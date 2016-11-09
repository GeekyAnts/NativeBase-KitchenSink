
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Header, Title, Button, Icon, View, DeckSwiper, Card, CardItem, Thumbnail, Text } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const cardOne = require('../../../img/swiper-1.png');
const cardTwo = require('../../../img/swiper-2.png');
const cardThree = require('../../../img/swiper-3.png');
const cardFour = require('../../../img/swiper-4.png');

const cards = [
  {
    text: 'Card One',
    name: 'One',
    image: cardOne,
  },
  {
    text: 'Card Two',
    name: 'Two',
    image: cardTwo,
  },
  {
    text: 'Card Three',
    name: 'Three',
    image: cardThree,
  },
  {
    text: 'Card Four',
    name: 'Four',
    image: cardFour,
  },
];

class NHDeckSwiper extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
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
                  <Text>{item.text}</Text>
                  <Text note>NativeBase</Text>
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
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHDeckSwiper);
