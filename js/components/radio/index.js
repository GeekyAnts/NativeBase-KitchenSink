import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Radio, Text,Left,Right,Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

class NHRadio extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true,
    };
  }

  toggleRadio1() {
    this.setState({
      radio1: true,
      radio2: false,
      radio3: false,
      radio4: false,
    });
  }

  toggleRadio2() {
    this.setState({
      radio1: false,
      radio2: true,
      radio3: false,
      radio4: false,
    });
  }

  toggleRadio3() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: true,
      radio4: false,
    });
  }

  toggleRadio4() {
    this.setState({
      radio1: false,
      radio2: false,
      radio3: false,
      radio4: true,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
            <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Radios</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <ListItem selected={this.state.radio1} onPress={() => this.toggleRadio1()} >
            <Text>Lunch Break</Text>
            <Right>
            <Radio selected={this.state.radio1} onPress={() => this.toggleRadio1()} />
            </Right>
          </ListItem>
            <ListItem selected={this.state.radio2} onPress={() => this.toggleRadio2()} >
              <Text >Daily Stand Up</Text>
              <Right>
                <Radio selected={this.state.radio2} onPress={() => this.toggleRadio2()} />
              </Right>
            </ListItem>
            <ListItem selected={this.state.radio3} onPress={() => this.toggleRadio3()} >
              <Text>Finish list Screen</Text>
              <Right>
                <Radio selected={this.state.radio3} onPress={() => this.toggleRadio3()} />
              </Right>
            </ListItem>
            <ListItem selected={this.state.radio4} onPress={() => this.toggleRadio4()} >
              <Text>Discussion with Client</Text>
              <Right>
                <Radio selected={this.state.radio4} onPress={() => this.toggleRadio4()} />
              </Right>
            </ListItem>
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

export default connect(mapStateToProps, bindAction)(NHRadio);
