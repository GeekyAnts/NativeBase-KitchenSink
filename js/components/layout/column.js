
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

const {
  popRoute,
} = actions;

class ColumnNB extends Component {  // eslint-disable-line

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
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Layout</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col style={{ backgroundColor: '#D954D7' }} />
          <Col style={{ backgroundColor: '#D93735' }} />
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
});

export default connect(mapStateToProps, bindAction)(ColumnNB);
