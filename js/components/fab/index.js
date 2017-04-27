import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Button, Left, Right, Body, Icon, List, ListItem, Content, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import styles from './styles';
import { openDrawer, closeDrawer } from '../../actions/drawer';

const datas = [
  {
    route: 'basicFab',
    text: 'Basic FAB',
  },
  {
    route: 'multipleFab',
    text: 'Multiple FABs',
  },
];
class NHFab extends Component {

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
            <Title>FAB</Title>
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

export default connect(mapStateToProps, bindAction)(NHFab);
