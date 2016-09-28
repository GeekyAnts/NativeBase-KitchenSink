
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Tabs } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import myTheme from '../../themes/base-theme';
import styles from './styles';

import ButtonTheme from './button-theme';
import ButtonBlock from './button-block';
import ButtonRound from './button-round';
import ButtonOutline from './button-outline';
// import ButtonSize from './button-size';
import ButtonIcon from './button-icon';

class NHButton extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container theme={myTheme} style={styles.container}>
        <Header>
          <Button transparent onPress={() => this.popRoute()}>
            <Icon name="ios-arrow-back" />
          </Button>

          <Title>Button</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <Tabs>
            <ButtonTheme tabLabel="Theme" />
            <ButtonBlock tabLabel="Block" />
            <ButtonRound tabLabel="Round" />
            <ButtonOutline tabLabel="Outline" />
            <ButtonIcon tabLabel="Icon" />
          </Tabs>
        </Content>
      </Container>
      // Disable swipe for tabs
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHButton);
