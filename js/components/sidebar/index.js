
import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { connect } from 'react-redux';
import { Content, Text, List, ListItem, IconNB } from 'native-base';

import navigateTo from '../../actions/sideBarNav';
import styles from './style';

const drawerCover = require('../../../img/drawer-cover.png');

const drawerImage = require('../../../img/logo-kitchen-sink.png');

const data = [
  {
    name: 'Anatomy',
    route: 'anatomy',
    icon: 'ios-phone-portrait-outline',
    bg: '#0209D8',
  },
  {
    name: 'Badge',
    route: 'badge',
    icon: 'ios-notifications-outline',
    bg: '#4DCAE0',
  },
  {
    name: 'Button',
    route: 'button',
    icon: 'md-radio-button-off',
    bg: '#5cb85c',
  },
  {
    name: 'Card',
    route: 'card',
    icon: 'ios-keypad',
    bg: '#877CA6',
  },
  {
    name: 'Check Box',
    route: 'checkbox',
    icon: 'ios-checkmark-circle-outline',
    bg: '#EB6B23',
  },
  {
    name: 'Deck Swiper',
    route: 'deckswiper',
    icon: 'ios-swap',
    bg: '#3591FA',
  },
  {
    name: 'Fab',
    route: 'fab',
    icon: 'ios-help-buoy',
    bg: '#5067FF',
  },
  {
    name: 'Form',
    route: 'form',
    icon: 'ios-call',
    bg: '#F5BF35',
  },
  {
    name: 'Icon',
    route: 'icon',
    icon: 'ios-information-circle-outline',
    bg: '#B63A48',
  },
  {
    name: 'InputGroup',
    route: 'inputgroup',
    icon: 'ios-document-outline',
    bg: '#00C497',
  },
  {
    name: 'Layout',
    route: 'layout',
    icon: 'ios-grid-outline',
    bg: '#5C4196',
  },
  {
    name: 'List',
    route: 'list',
    icon: 'ios-lock',
    bg: '#00AFC1',
  },
  {
    name: 'Picker',
    route: 'picker',
    icon: 'ios-arrow-dropdown',
    bg: '#F50C75',
  },
  {
    name: 'Radio',
    route: 'radio',
    icon: 'ios-radio-button-on',
    bg: '#6FEA90',
  },
  {
    name: 'SearchBar',
    route: 'searchbar',
    icon: 'ios-search',
    bg: '#29783B',
  },
  {
    name: 'SmartComponents',
    route: 'smart',
    icon: 'ios-ribbon',
    bg: '#A9B839',
  },
  {
    name: 'Spinner',
    route: 'spinner',
    icon: 'ios-navigate-outline',
    bg: '#BE6F50',
  },
  {
    name: 'Tab',
    route: 'tab',
    icon: 'ios-home',
    bg: '#AB6AED',
  },
  {
    name: 'Tabs',
    route: 'tabs',
    icon: 'ios-albums',
    bg: '#726AEA',
  },
  {
    name: 'Thumbnail',
    route: 'thumbnail',
    icon: 'ios-image-outline',
    bg: '#cc0000',
  },
  {
    name: 'Typography',
    route: 'typography',
    icon: 'md-paper',
    bg: '#48525D',
  },

];
class SideBar extends Component {

  static propTypes = {
    navigateTo: React.PropTypes.func,
  }

  constructor(props) {
    super(props);
    const ds = new List.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
      dataSource: ds.cloneWithRows(data),
    };
  }

  navigateTo(route) {
    this.props.navigateTo(route, 'home');
  }

  render() {
    return (
      <Content
        style={{ flex: 1, backgroundColor: '#fff' }}
      >
        <Image source={drawerCover} style={styles.drawerCover}>
          <Image
            square
            style={styles.drawerImage}
            source={drawerImage}
          />
        </Image>
        <List
          dataSource={this.state.dataSource} renderRow={data =>
            <ListItem button iconLeft onPress={() => this.navigateTo(data.route)} >
              <View style={styles.listItemContainer}>
                <View style={[styles.iconContainer, { backgroundColor: data.bg, alignItems: 'center', alignSelf: 'center' }]}>
                  <IconNB name={data.icon} style={styles.sidebarIcon} />
                </View>
                <Text style={styles.text}>{data.name}</Text>
              </View>
            </ListItem>}
        />

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
