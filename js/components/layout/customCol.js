import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';



class CustomCol extends Component {  // eslint-disable-line
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
            <Title>Custom Col</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Col size={1} style={{ backgroundColor: '#00CE9F' }} />
          <Col size={2} style={{ backgroundColor: '#635DB7' }} />
          <Col size={4} style={{ backgroundColor: '#DD9E2C' }} />
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

export default connect(mapStateToProps, bindAction)(CustomCol);
