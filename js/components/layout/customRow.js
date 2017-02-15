
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';

const {
  popRoute,
} = actions;

class CustomRow extends Component {  // eslint-disable-line

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
            <Button transparent onPress={() => Actions.pop()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Custom Row</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row size={1} style={{ backgroundColor: '#635DB7' }} />
          <Row size={2} style={{ backgroundColor: '#00CE9F' }} />
          <Row size={4} style={{ backgroundColor: '#DD9E2C' }} />
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

export default connect(mapStateToProps, bindAction)(CustomRow);
