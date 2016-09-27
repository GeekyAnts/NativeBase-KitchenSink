
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem } from 'native-base';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import styles from './style';

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content style={styles.sidebar} >
        <List>
          <ListItem button onPress={() => this.navigateTo('anatomy')} >
            <Text>Anatomy</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('badge')} >
            <Text>Badge</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('button')} >
            <Text>Button</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('card')} >
            <Text>Card</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('checkbox')} >
            <Text>Check Box</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('form')} >
            <Text>Form</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('icon')} >
            <Text>Icon</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('inputgroup')} >
            <Text>InputGroup</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('layout')} >
            <Text>Layout</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('list')} >
            <Text>List</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('picker')} >
            <Text>Picker</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('radio')} >
            <Text>Radio</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('searchbar')} >
            <Text>Searchbar</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('spinner')} >
            <Text>Spinner</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('tabs')} >
            <Text>Tabs</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('thumbnail')} >
            <Text>Thumbnail</Text>
          </ListItem>
          <ListItem button onPress={() => this.navigateTo('spinner')} >
            <Text>Test</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
    replaceOrPushRoute: route => dispatch(replaceOrPushRoute(route)),
  };
}

export default connect(null, bindAction)(SideBar);
