
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Radio, Text } from 'native-base';

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
          <Title>Radio</Title>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content>
          <ListItem button onPress={() => this.toggleRadio1()} >
            <Radio selected={this.state.radio1} onPress={() => this.toggleRadio1()} />
            <Text>Lunch Break</Text>
          </ListItem>
          <List>
            <ListItem button onPress={() => this.toggleRadio2()} >
              <Radio selected={this.state.radio2} onPress={() => this.toggleRadio2()} />
              <Text >Daily Stand Up</Text>
            </ListItem>
            <ListItem button onPress={() => this.toggleRadio3()} >
              <Radio selected={this.state.radio3} onPress={() => this.toggleRadio3()} />
              <Text>Finish list Screen</Text>
            </ListItem>
            <ListItem button onPress={() => this.toggleRadio4()} >
              <Radio selected={this.state.radio4} onPress={() => this.toggleRadio4()} />
              <Text>Discussion with Client</Text>
            </ListItem>
          </List>
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

export default connect(mapStateToProps, bindAction)(NHRadio);
