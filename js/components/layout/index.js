import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';

const datas = [
  {
    route: 'row',
    text: 'Row Grid',
  },
  {
    route: 'column',
    text: 'Column Grid',
  },
  {
    route: 'nested',
    text: 'Nested Layout',
  },
  {
    route: 'customRow',
    text: 'Custom Row Size Grid',
  },
  {
    route: 'customCol',
    text: 'Custom Column Size Grid',
  },
];
class NHLayout extends Component {  // eslint-disable-line

  static propTypes = {
    openDrawer: React.PropTypes.func,
  }

  render() {
    return (
      <Container style={{backgroundColor: '#FBFAFA'}}>
        <Header>
          <Left>
            <Button transparent onPress={this.props.openDrawer}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Layout</Title>
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

export default connect(mapStateToProps, bindAction)(NHLayout);
