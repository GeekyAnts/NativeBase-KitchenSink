
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, StatusBar } from 'react-native';
import { Content, Text, List, ListItem, Icon, View } from 'native-base';

import { closeDrawer } from '../../actions/drawer';
import { replaceOrPushRoute } from '../../actions/route';
import sidebarTheme from './sidebar-theme';
import styles from './style';

// StatusBar.setBarStyle('light-content');
const drawerCover = require('../../../img/drawer-cover.png');
const drawerImage = require('../../../img/drawer-image.png');

class SideBar extends Component {

  static propTypes = {
    closeDrawer: React.PropTypes.func,
    replaceOrPushRoute: React.PropTypes.func,
    drawerState: React.PropTypes.string,
  }

  constructor(props) {
    super(props);
    this.state = {
      shadowOffsetWidth: 1,
      shadowRadius: 4,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.drawerState === 'opened') {
      this.setState({ shadowOffsetWidth: 30 });
      this.setState({ shadowRadius: 60 });
    }

    if (nextProps.drawerState === 'closed') {
      this.setState({ shadowOffsetWidth: 0 });
      this.setState({ shadowRadius: 0 });
    }
  }

  navigateTo(route) {
    this.props.closeDrawer();
    this.props.replaceOrPushRoute(route);
  }

  render() {
    return (
      <Content
        theme={sidebarTheme}
        style={[styles.sidebar,
          { shadowOffset: { width: this.state.shadowOffsetWidth },
          shadowRadius: this.state.shadowRadius },
        ]}
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
              <View style={[styles.iconContainer, { backgroundColor: '#00AFC1', paddingLeft: 14 }]}>
                <Icon name="ios-phone-portrait-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Anatomy</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('badge')}>
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-notifications-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Badge</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('button')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#4DCAE0', paddingLeft: 10 }]}>
                <Icon name="md-radio-button-off" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Button</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('card')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#29783B' }]}>
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
              <View style={[styles.iconContainer, { backgroundColor: '#EB6B23', paddingLeft: 10 }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Deck Swiper</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('form')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#156DD1' }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Form</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('icon')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#F5BF35', paddingLeft: 10 }]}>
                <Icon name="ios-information-circle-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Icon</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('inputgroup')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#B63A48', paddingLeft: 14 }]}>
                <Icon name="ios-document-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>InputGroup</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('layout')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-grid-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Layout</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('list')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>List</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('picker')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Picker</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('radio')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED', paddingLeft: 10 }]}>
                <Icon name="ios-radio-button-on" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Radio</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('searchbar')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-search-outline" style={styles.sidebarIcon} />
              </View>
              <Text style={styles.text}>Searchbar</Text>
            </View>
          </ListItem>
          <ListItem button iconLeft onPress={() => this.navigateTo('spinner')} >
            <View style={styles.listItemContainer}>
              <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
                <Icon name="ios-home" style={styles.sidebarIcon} />
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
//           <ListItem button iconLeft onPress={() => this.navigateTo('thumbnail')} >
//             <View style={styles.listItemContainer}>
//               <View style={[styles.iconContainer, { backgroundColor: '#AB6AED' }]}>
//                 <Icon name="ios-home" style={styles.sidebarIcon} />
//               </View>
//               <Text style={styles.text}>Thumbnail</Text>
//             </View>
//           </ListItem>
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

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(SideBar);
