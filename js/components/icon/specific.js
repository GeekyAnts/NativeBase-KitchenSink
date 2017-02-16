
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Icon, Body, Left, Right, Grid, Col, Row, Text } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class Specific extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  replaceAt(route) {
    this.props.replaceAt('specific', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.replaceAt('icon')}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Platform</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Grid>
            <Row>
              <Col style={styles.col}>
                <Icon ios="ios-person" android="md-person"/>
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-apps-outline" android="md-apps" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-menu" android="md-menu" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-paper" android="md-paper" />
                <Text>person</Text>
              </Col>
              <Col style={styles.col}>
                <Icon ios="ios-cart-outline" android="md-cart" />
                <Text>person</Text>
              </Col>
            </Row>
          </Grid>
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

export default connect(mapStateToProps, bindAction)(Specific);
