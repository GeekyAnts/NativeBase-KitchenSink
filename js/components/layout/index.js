
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon,Left,Right,Body } from 'native-base';
import { Grid, Col } from 'react-native-easy-grid';

import { openDrawer } from '../../actions/drawer';

class NHLayout extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="menu" />
          </Button>
          </Left>
          <Body>
          <Title>Layout</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Grid>
            <Col style={{ backgroundColor: '#D954D7', height: 700 }} />
            <Col style={{ backgroundColor: '#D93735', height: 700 }} />
          </Grid>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHLayout);
