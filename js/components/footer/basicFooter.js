
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Content, Button, Footer, FooterTab, Text, Body, Left, Right, IconNB } from 'native-base';

import styles from './styles';

const {
  replaceAt,
} = actions;

class Basic extends Component {

  static propTypes = {
    replaceAt: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }
  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
  }

  replaceAt(route) {
    this.props.replaceAt('basicFooter', { key: route }, this.props.navigation.key);
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.replaceAt('footer')}>
              <IconNB name="ios-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Basic</Title>
          </Body>
          <Right />
        </Header>

        <Content padder />
        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
              <Text>Navigate</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
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

export default connect(mapStateToProps, bindAction)(Basic);
