
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, InputGroup, Input } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

class NHInputGroup extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>InputGroup</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <InputGroup borderType="regular" style={styles.mb}>
            <Input placeholder="Regular Textbox" />
          </InputGroup>
          <InputGroup borderType="underline" style={styles.mb}>
            <Input placeholder="Underlined Textbox" />
          </InputGroup>
          <InputGroup borderType="rounded" style={styles.mb}>
            <Input placeholder="Rounded Textbox" />
          </InputGroup>
          <InputGroup style={styles.mb}>
            <Icon name="ios-home" style={{ color: '#00C497' }} />
            <Input placeholder="Icon Textbox" />
          </InputGroup>
          <InputGroup iconRight style={styles.mb}>
            <Icon name="ios-swap" style={{ color: '#00C497' }} />
            <Input placeholder="Icon Alignment in Textbox" />
          </InputGroup>
          <InputGroup iconRight success style={styles.mb}>
            <Icon name="ios-checkmark-circle" style={{ color: '#00C497' }} />
            <Input placeholder="Textbox with Success Input" />
          </InputGroup>
          <InputGroup iconRight error style={styles.mb}>
            <Icon name="ios-close-circle" style={{ color: 'red' }} />
            <Input placeholder="Textbox with Error Input" />
          </InputGroup>
          <InputGroup iconRight disabled style={styles.mb}>
            <Icon name="ios-information-circle" style={{ color: '#384850' }} />
            <Input placeholder="Disabled Textbox" />
          </InputGroup>
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    popRoute: () => dispatch(popRoute()),
  };
}

export default connect(null, bindAction)(NHInputGroup);
