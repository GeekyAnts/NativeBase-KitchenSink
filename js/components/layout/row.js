import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Icon, Left, Right, Body } from 'native-base';
import { Grid, Row } from 'react-native-easy-grid';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';


class RowNB extends Component {  // eslint-disable-line

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
            <Title>Row Grid</Title>
          </Body>
          <Right />
        </Header>

        <Grid>
          <Row style={{ backgroundColor: '#635DB7' }} />
          <Row style={{ backgroundColor: '#00CE9F' }} />
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

export default connect(mapStateToProps, bindAction)(RowNB);
