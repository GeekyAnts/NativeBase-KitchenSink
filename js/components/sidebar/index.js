
import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, Icon, View } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import sidebarTheme from './sidebar-theme';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');
const drawerImage = require('../../../img/logo-kitchen-sink.png');

class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content
        theme={sidebarTheme}
        style={styles.sidebar}
      >
        <Image source={drawerCover} style={styles.drawerCover}>
          <Image
            square
            style={styles.drawerImage}
            source={drawerImage}
          />
        </Image>
        <List>
          <ListItem button iconLeft onPress={() => this.navigateTo('anatomy')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#0209D8', paddingLeft: 14 }]}>
                <Icon name="ios-phone-portrait-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Anatomy</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('badge')}>
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#4DCAE0' }]}>
                <Icon name="ios-notifications-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Badge</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('button')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5cb85c', paddingLeft: 10 }]}>
                <Icon name="md-radio-button-off" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Button</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('card')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#877CA6' }]}>
                <Icon name="ios-keypad" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Card</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('checkbox')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#EB6B23', paddingLeft: 10 }]}>
                <Icon name="ios-checkmark-circle-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Check Box</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('deckswiper')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#3591FA', paddingLeft: 10 }]}>
                <Icon name="ios-swap" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Deck Swiper</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('form')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#F5BF35' }]}>
                <Icon name="ios-call" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Form</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('icon')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#B63A48', paddingLeft: 10 }]}>
                <Icon name="ios-information-circle-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Icon</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('inputgroup')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#00C497', paddingLeft: 14 }]}>
                <Icon name="ios-document-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>InputGroup</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('layout')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#5C4196' }]}>
                <Icon name="ios-grid-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Layout</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('list')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#00AFC1' }]}>
                <Icon name="ios-lock" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>List</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('picker')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#F50C75', paddingLeft: 10 }]}>
                <Icon name="ios-arrow-dropdown" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Picker</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('radio')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#6FEA90', paddingLeft: 10 }]}>
                <Icon name="ios-radio-button-on" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Radio</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('searchbar')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#29783B' }]}>
                <Icon name="ios-search" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Searchbar</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('spinner')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#BE6F50', paddingLeft: 10 }]}>
                <Icon name="ios-navigate-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Spinner</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('tabs')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Tabs</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('thumbnail')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#cc0000' }]}>
                <Icon name="ios-image-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Thumbnail</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('typography')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#48525D', paddingLeft: 7 }]}>
                <Text style={styles.sidebarIcon}>Aa</Text>
              </View>
              <Text style={styles.text}>Typography</Text>
            </View>
          </ListItem>
        </List>
      </Content>
    );
  }
}

function bindAction(dispatch) {
  return {
    navigateTo: (route, homeRoute) => dispatch(navigateTo(route, homeRoute)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(SideBar);
