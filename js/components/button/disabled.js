
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, H3 } from 'native-base';

// import { Actions } from 'react-native-router-flux';
// import { actions } from 'react-native-navigation-redux-helpers';
// import { openDrawer } from '../../actions/drawer';
import styles from './styles';


// const {
//     popRoute,
//   } = actions;

class Disabled extends Component {  // eslint-disable-line

  // static propTypes = {
  //   openDrawer: React.PropTypes.func,
  //   popRoute: React.PropTypes.func,
  //   navigation: React.PropTypes.shape({
  //     key: React.PropTypes.string,
  //   }),
  // }

  // popRoute() {
  //   this.props.popRoute(this.props.navigation.key);
  // }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Disabled</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <View style={{ paddingHorizontal: 20, paddingTop: 20 }}>
            <Button disabled style={styles.mb15}><Text>Default</Text></Button>
            <Button disabled bordered style={styles.mb15}><Text>Outline</Text></Button>
            <Button disabled rounded style={styles.mb15}><Text>Rounded</Text></Button>
            <Button disabled large style={styles.mb15}><Text>Custom</Text></Button>
            <Button disabled iconRight style={styles.mb15}>
              <Text>Icon Button</Text>
              <Icon name="home" />
            </Button>
            <Button disabled block style={styles.mb15}><Text>Block</Text></Button>
          </View>
          <Button disabled full style={styles.mb15}><Text>Full</Text></Button>
        </Content>
      </Container>
    );
  }
}

// function bindAction(dispatch) {
//   return {
//     openDrawer: () => dispatch(openDrawer()),
//     popRoute: key => dispatch(popRoute(key)),
//   };
// }

const mapStateToProps = state => ({
  // navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default Disabled;
