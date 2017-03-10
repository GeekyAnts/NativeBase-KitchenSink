
import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body, Toast } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class ToastNB extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }
  constructor(props) {
    super(props);
    this.state = {
      showToast: false
    }
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
            <Title>Toast</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              position: 'bottom',
              buttonText: 'Okay'
            })}>
            <Text>Toast</Text>
          </Button>

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
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(ToastNB);
