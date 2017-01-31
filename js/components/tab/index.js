
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Text, H3, Button, Icon, Tab, Left, Right, Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import myTheme from '../../themes/base-theme';
import styles from './styles';

class NHTab extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
    });
  }


  render() {
    return (
      <Container theme={myTheme} style={styles.container}>

        <Header noShadow>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Tab</Title>
          </Body>
          <Right />

        </Header>
        <Tab>
          <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
            <Text>TabOne</Text>
          </Button>
          <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
            <Text>TabTwo</Text>
          </Button>
          <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
            <Text>TabThree</Text>
          </Button>
        </Tab>

        <Content padder>
          <H3>This is content section</H3>
          <Text style={{ marginTop: 10 }}>
            Selected tab is: <Text style={{ color: '#007aff', fontWeight: '700' }}>{this.state.tab1 ? 'TabOne' : this.state.tab2 ? 'TabTwo' : 'TabThree'}</Text>
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
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(NHTab);
