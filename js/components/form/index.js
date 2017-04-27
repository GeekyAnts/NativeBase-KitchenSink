import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Body, Right, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const datas = [
  {
    route: 'fixedLabel',
    text: 'Fixed Label',
  },
  {
    route: 'inlineLabel',
    text: 'Inline Label',
  },
  {
    route: 'floatingLabel',
    text: 'Floating Label',
  },
  {
    route: 'placeholderLabel',
    text: 'Placeholder Label',
  },
  {
    route: 'stackedLabel',
    text: 'Stacked Label',
  },
  {
    route: 'regularInput',
    text: 'Regular Textbox',
  },
  {
    route: 'underlineInput',
    text: 'Underlined Textbox',
  },
  {
    route: 'roundedInput',
    text: 'Rounded Textbox',
  },
  {
    route: 'iconInput',
    text: 'Icon Textbox',
  },
  {
    route: 'successInput',
    text: 'Success Input Textbox',
  },
  {
    route: 'errorInput',
    text: 'Error Input Textbox',
  },
  {
    route: 'disabledInput',
    text: 'Disabled Textbox',
  },
];
class NHForm extends Component {

  static propTypes = {
    openDrawer: React.PropTypes.func,
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
            <Title>Form & Inputs</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem button onPress={() => { Actions[data.route](); this.props.closeDrawer() }} >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" style={{ color: '#999' }} />
                </Right>
              </ListItem>
            }
          />
        </Content>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(NHForm);
