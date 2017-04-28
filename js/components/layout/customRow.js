import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';


class CustomRow extends Component {  // eslint-disable-line

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
  return {};
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(CustomRow);
