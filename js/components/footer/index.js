import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Title, Content, Button, Icon, Text, Left, Body, Right, List, ListItem } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const datas = [
  {
    route: 'basicFooter',
    text: 'Basic Footer',
  },
  {
    route: 'iconFooter',
    text: 'Icon Footer',
  },
  {
    route: 'iconText',
    text: 'Icon & Text Footer',
  },
  {
    route: 'badgeFooter',
    text: 'With Badge',
  },
];
class NHFooter extends Component {

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
            <Title>Footer</Title>
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

export default connect(mapStateToProps, bindAction)(NHFooter);
