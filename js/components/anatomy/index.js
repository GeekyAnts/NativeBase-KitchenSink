
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab, Left, Right, Body, Badge, IconNB } from 'native-base/Advanced';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class Anatomy extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
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
            <Title>Header</Title>
          </Body>
          <Right />

        </Header>


        <Content padder>
          <H3>This is content section</H3>
          <Text style={{ marginTop: 10 }}>
            Selected tab is: {this.state.tab1 ? 1 : this.state.tab2 ? 2 : this.state.tab3 ? 3 : 4}
          </Text>

        </Content>


        <Footer>
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
              <View>
                <Badge><Text>2</Text></Badge>
                <IconNB name="apps" ios="ios-apps-outline" />
              </View>
              <Text>Apps</Text>
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
              <IconNB name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
              <IconNB ios="ios-compass" android="md-compass" />
              <Text>Navigate</Text>
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
              <IconNB name="contact" android="md-contact" />
              <Text>Contact</Text>
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
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(Anatomy);
