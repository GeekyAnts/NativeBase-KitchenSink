
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

const {
  popRoute,
} = actions;

class CustomCol extends Component {  // eslint-disable-line

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
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.popRoute()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Col</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col size={1} style={{ backgroundColor: '#D954D7' }} />
          <Col size={2} style={{ backgroundColor: '#D93735' }} />
          <Col size={4} style={{ backgroundColor: '#DD9E2C' }} />
        </Grid>
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

export default connect(mapStateToProps, bindAction)(CustomCol);
