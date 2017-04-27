import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Left, Right, Body, Text, ListItem, List } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const datas = [
  {
    route: 'header1',
    text: 'Only Title',
  },
  {
    route: 'header2',
    text: 'Icon Buttons',
  },
  {
    route: 'header3',
    text: 'Text Buttons',
  },
  {
    route: 'header4',
    text: 'Icon Button and Text Button',
  },
  {
    route: 'header5',
    text: 'Icon and Text Buttons',
  },
  {
    route: 'header6',
    text: 'Multiple Icon Buttons',
  },
  {
    route: 'header7',
    text: 'Title and Subtitle',
  },
  {
    route: 'header8',
    text: 'Custom backgroundColor',
  },
];


class HeaderNB extends Component {  // eslint-disable-line

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
            <Title>Headers</Title>
          </Body>
          <Right />

        </Header>

        <Content>
          <List
            dataArray={datas} renderRow={data =>
              <ListItem
                button
                onPress={() => { Actions[data.route](); this.props.closeDrawer(); }}
              >
                <Text>{data.text}</Text>
                <Right>
                  <Icon name="arrow-forward" />
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

export default connect(mapStateToProps, bindAction)(HeaderNB);
