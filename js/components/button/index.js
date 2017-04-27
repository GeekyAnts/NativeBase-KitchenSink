import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const datas = [
  {
    route: 'default',
    text: 'Default Button',
  },
  {
    route: 'outline',
    text: 'Outline Button',
  },
  {
    route: 'rounded',
    text: 'Rounded Button',
  },
  {
    route: 'block',
    text: 'Block Button',
  },
  {
    route: 'full',
    text: 'Full Button',
  },
  {
    route: 'custom',
    text: 'Custom Size Button',
  },
  {
    route: 'transparent',
    text: 'Transparent Button',
  },
  {
    route: 'iconBtn',
    text: 'Icon Button',
  },
  {
    route: 'disabled',
    text: 'Disabled Button',
  },
];

class NHButton extends Component {  // eslint-disable-line

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
            <Title>Buttons</Title>
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

export default connect(mapStateToProps, bindAction)(NHButton);
