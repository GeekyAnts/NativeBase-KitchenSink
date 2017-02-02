
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

import { actions } from 'react-native-navigation-redux-helpers';
import { openDrawer } from '../../actions/drawer';
import styles from './styles';


const {
    popRoute,
  } = actions;

class IconBtn extends Component {  // eslint-disable-line


  static propTypes = {
    openDrawer: React.PropTypes.func,
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
            <Title>IconBtn</Title>
          </Body>
          <Right />

        </Header>

        <Content padder>
          <Button transparent style={styles.mb15}>
            <Icon active name="home" style={{ color: '#00c497' }} />
          </Button>
          <Button bordered warning style={styles.mb15}>
            <Icon active name="home" />
          </Button>
          <Button style={styles.mb15}>
            <Icon active name="home"/>
          </Button>
          <Button info iconLeft style={styles.mb15}>
            <Icon active name="arrow-back" />
            <Text>Back</Text>
          </Button>
          <Button success iconRight style={styles.mb15}>
            <Text>Next</Text>
            <Icon name="arrow-forward" />
          </Button>
          <Button bordered iconLeft style={styles.mb15}>
            <Icon active name="briefcase" />
            <Text>Work</Text>
          </Button>
          <Button transparent iconLeft style={styles.mb15}>
            <Icon active name="home" />
            <Text>Home</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: key => dispatch(popRoute(key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(IconBtn);
