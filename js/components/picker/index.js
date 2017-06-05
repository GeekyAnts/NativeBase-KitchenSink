
import React, { Component } from 'react';
import { Platform } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text,Right,Body,Left,Picker, ListItem, Form, Item as FormItem } from 'native-base';

// import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const Item = Picker.Item;

class NHPicker extends Component {

  // static propTypes = {
  //   openDrawer: React.PropTypes.func,
  // }

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

  render() {
    return (
      <Container style={styles.container}>
        <Header>
          <Left>
          <Button transparent onPress={() => this.props.navigation.navigate('DrawerOpen')}>
          <Icon name="menu" />
          </Button>
          </Left>
          <Body>
          <Title>Picker</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Form>
              <Picker
                iosHeader="Select one"
                mode="dropdown"
                style={{ width:(Platform.OS === 'ios') ? undefined : 120 }}
                selectedValue={this.state.selected1}
                onValueChange={this.onValueChange.bind(this)}>
                <Item label="Wallet" value="key0" />
                <Item label="ATM Card" value="key1" />
                <Item label="Debit Card" value="key2" />
                <Item label="Credit Card" value="key3" />
                <Item label="Net Banking" value="key4" />
              </Picker>
              </Form>
        </Content>
      </Container>
    );
  }
}

// function bindAction(dispatch) {
//   return {
//     openDrawer: () => dispatch(openDrawer()),
//   };
// }

const mapStateToProps = state => ({
  // navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default NHPicker;
