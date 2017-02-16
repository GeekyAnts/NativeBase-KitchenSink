
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, View } from 'react-native';
import { Container, Header, Title, Button, IconNB, DeckSwiper, Card, CardItem, Icon, Thumbnail, Text, Left, Right, Body, Content } from 'native-base';

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
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Deck Swiper</Title>
          </Body>
          <Right />
        </Header>

        <View style={{ flex: 1, padding: 12 }}>
          <DeckSwiper
            dataSource={cards}
            renderItem={item =>
              <Card style={{ elevation: 3 }}>
                <CardItem>
                  <Left>
                    <Thumbnail source={item.image} />
                    <Body>
                      <Text>{item.text}</Text>
                      <Text note>NativeBase</Text>
                    </Body>
                  </Left>
                </CardItem>
                <CardItem cardBody>
                  <Image style={{ resizeMode: 'cover', width: null, flex: 1, height: 300 }} source={item.image} />
                </CardItem>
                <CardItem>
                  <IconNB name={'ios-heart'} style={{ color: '#ED4A6A' }} />
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
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHDeckSwiper);
