
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Card, CardItem, Text } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class NHCardList extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('cardList', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.replaceAt('card')}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Card List</Title>
        </Header>

        <Content padder>
          <Card style={[styles.mb, { flex: 0 }]}>
            <CardItem>
              <Icon name="logo-googleplus" style={{ color: '#DD5044' }} />
              <Text>Google Plus</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-facebook" style={{ color: '#3B579D' }} />
              <Text>Facebook</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-twitter" style={{ color: '#55ACEE' }} />
              <Text>Twitter</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-reddit" style={{ color: '#FF4500' }} />
              <Text>Reddit</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-linkedin" style={{ color: '#007BB6' }} />
              <Text>LinkedIn</Text>
            </CardItem>
            <CardItem>
              <Icon name="logo-youtube" style={{ color: '#D62727' }} />
              <Text>YouTube</Text>
            </CardItem>
          </Card>
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

export default connect(mapStateToProps, bindAction)(NHCardList);
