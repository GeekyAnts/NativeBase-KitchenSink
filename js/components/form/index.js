
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button,Picker,Item, IconNB, List, ListItem,Label, InputGroup, Input, Text, Thumbnail,Left,Right,Body } from 'native-base';

import { openDrawer } from '../../actions/drawer';
import styles from './styles';

const PItem = Picker.Item;
const camera = require('../../../img/camera.png');

class NHForm extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key0',
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
          <Button transparent onPress={this.props.openDrawer}>
          <IconNB name="ios-menu" />
          </Button>
          </Left>
          <Body>
          <Title>Form</Title>
          </Body>
          <Right>
          </Right>
        </Header>

        <Content padder>
          <TouchableOpacity style={{alignItems: 'center'}}>
            <Thumbnail size={80} source={camera} style={{ alignSelf: 'center', marginTop: 20, marginBottom: 10 }} />
          </TouchableOpacity>
            <Item>
              <Label>Placeholder Input</Label>
              <Input />
            </Item>
            <Item inlineLabel>
              <Label>First Name</Label>
              <Input placeholder="John" />
            </Item>
            <Item inlineLabel>
              <Label>Last Name</Label>
              <Input placeholder="Doe" />
            </Item>
            <Item floatingLabel>
              <Label>Floating Input</Label>
              <Input />
            </Item>
              <InputGroup>
                <IconNB name="ios-person" style={{ color: '#0A69FE' }} />
                <Input placeholder="EMAIL" />
              </InputGroup>
              <InputGroup>
                <IconNB name="ios-unlock" style={{ color: '#0A69FE' }} />
                <Input placeholder="PASSWORD" secureTextEntry />
              </InputGroup>
              <InputGroup>
                <IconNB name="ios-call" style={{ color: '#0A69FE' }} />
                <Input
                  placeholder="PHONE"
                  keyboardType="numeric"
                />
              </InputGroup>
              <Item stackedLabel>
                <Label>Permanent Address</Label>
                <Input placeholder="Address" />
              </Item>
          <Button style={{ alignSelf: 'center', marginTop: 20, marginBottom: 20 }}><Text>Sign Up</Text></Button>
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

export default connect(mapStateToProps, bindAction)(NHForm);
