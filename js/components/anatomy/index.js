
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, Button, Icon, Footer, FooterTab } from 'native-base';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import { replaceRoute, replaceOrPushRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Anatomy extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    replaceRoute: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  replaceRoute(route) {
    this.props.replaceRoute(route);
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header>
          <Button transparent onPress={() => this.replaceRoute('login')}>
            <Icon name="ios-power" />
          </Button>
          <Title>Header</Title>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Text>This is content section</Text>
        </Content>

        <Footer >
          <FooterTab>
            <Button>
                Apps
              <Icon name="ios-apps-outline" />
            </Button>
            <Button>
                Camera
              <Icon name="ios-camera-outline" />
            </Button>
            <Button active>
                Navigate
              <Icon name="ios-compass" />
            </Button>
            <Button>
                Contact
              <Icon name="ios-contact-outline" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    replaceRoute: route => dispatch(replaceRoute(route)),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(Anatomy);
