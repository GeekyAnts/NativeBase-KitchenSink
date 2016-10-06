
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Picker } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import { popRoute } from '../../actions/route';
import styles from './styles';

const Item = Picker.Item;

class NHPicker extends Component {

  static propTypes = {
    popRoute: React.PropTypes.func,
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: [],
      },
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected1: value,
    });
  }

  popRoute() {
    this.props.popRoute();
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Title>Picker</Title>

          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <Picker
            iosHeader="Select one"
            mode="dropdown"
            selectedValue={this.state.selected1}
            onValueChange={this.onValueChange.bind(this)}
          >
            <Item label="Cats" value="key0" />
            <Item label="Dogs" value="key1" />
            <Item label="Birds" value="key2" />
            <Item label="Elephants" value="key3" />
          </Picker>
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

export default connect(null, bindAction)(NHPicker);
