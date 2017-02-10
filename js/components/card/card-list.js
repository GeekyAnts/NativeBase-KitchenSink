
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, IconNB, Card, CardItem, Text, Left, Right, Body } from 'native-base';

import styles from './styles';

const {
  popRoute,
} = actions;

class NHCardList extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  popRoute() {
    this.props.popRoute(this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Card List</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Card style={styles.mb}>
            <CardItem header bordered>
              <Text>
                Explore Nearby
              </Text>
            </CardItem>
            <CardItem>
              <Icon active name="cart" />
              <Text>Shopping</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="medical" />
              <Text>Hospital</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="cafe" />
              <Text>Cafe</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="paw" />
              <Text>Dog Park</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="beer" />
              <Text>Pub</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
            <CardItem>
              <Icon active name="planet" />
              <Text>Space</Text>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHCardList);
