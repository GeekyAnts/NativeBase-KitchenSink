
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, InputGroup, Input,Left,Right,Body,Textarea } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHInputGroup extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={this.props.openDrawer}>
          <Icon name="ios-menu" />
          </Button>
          </Left>
          <Body>
          <Title>InputGroup</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <InputGroup regular style={styles.mb}>
            <Input placeholder="Regular Textbox" />
          </InputGroup>
          <InputGroup underline style={styles.mb}>
            <Input placeholder="Underlined Textbox" />
          </InputGroup>
          <InputGroup rounded style={styles.mb}>
            <Input placeholder="Rounded Textbox" />
          </InputGroup>
          <InputGroup style={styles.mb}>
          <Icon name="ios-home" style={{ color: '#00C497' }} />
            <Input placeholder="Icon Textbox" />
          </InputGroup>
          <InputGroup style={styles.mb}>
            <Input placeholder="Icon Alignment in Textbox" />
            <Icon name="ios-swap" style={{ color: '#00C497' }} />
          </InputGroup>
          <InputGroup success style={styles.mb}>
            <Input placeholder="Textbox with Success Input" />
            <Icon name="ios-checkmark-circle" style={{ color: '#00C497' }} />
          </InputGroup>
          <InputGroup error style={styles.mb}>
            <Input placeholder="Textbox with Error Input" />
            <Icon name="ios-close-circle" style={{ color: 'red' }} />
          </InputGroup>
          <InputGroup disabled style={styles.mb}>
            <Input placeholder="Disabled Textbox" />
            <Icon name="ios-information-circle" style={{ color: '#384850' }} />
          </InputGroup>
           <Textarea rowSpan={5} bordered placeholder="Textarea" />
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

export default connect(mapStateToProps, bindAction)(NHInputGroup);
