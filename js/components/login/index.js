
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Content, Header, Title, Button } from 'native-base';

import { replaceRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';

// const background = require('../../../images/shadow.png');

class Login extends Component {

  static propTypes = {
    replaceRoute: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme}>
        <Header>
          <Title>Login</Title>
        </Header>
        <Content padder>
          <Button onPress={() => this.replaceRoute('anatomy')}>
            Login
          </Button>
        </Content>
      </Container>
    );
  }
}

function bindActions(dispatch) {
  return {
    replaceRoute: route => dispatch(replaceRoute(route)),
  };
}

export default connect(null, bindActions)(Login);
