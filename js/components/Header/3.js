import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';



class Header3 extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => Actions.pop()}>
              <Text>Back</Text>
            </Button>
          </Left>
          <Body>
            <Title>Header</Title>
          </Body>
          <Right>
            <Button transparent onPress={() => Actions.pop()}>
              <Text>Cancel</Text>
            </Button>
          </Right>

        </Header>

        <Content padder>
          <Text>
            Header With Text Buttons
          </Text>
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
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(Header3);
