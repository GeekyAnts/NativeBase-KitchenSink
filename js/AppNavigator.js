
import React, { Component } from 'react';
import { BackAndroid, Platform, StatusBar, Navigator } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';

import { closeDrawer } from './actions/drawer';
import { popRoute } from './actions/route';

import Home from './components/home/';
import Anatomy from './components/anatomy/';
import NHBadge from './components/badge/';
import NHButton from './components/button/';
import NHCard from './components/card/';
import NHCheckbox from './components/checkbox/';
import NHDeckSwiper from './components/deckswiper/';
import NHForm from './components/form/';
import NHIcon from './components/icon/';
import NHInputGroup from './components/inputgroup/';
import NHLayout from './components/layout/';
import NHList from './components/list/';
import NHBasicList from './components/list/basic-list';
import NHListDivider from './components/list/list-divider';
import NHListIcon from './components/list/list-icon';
import NHListAvatar from './components/list/list-avatar';
import NHListThumbnail from './components/list/list-thumbnail';
import NHPicker from './components/picker/';
import NHRadio from './components/radio/';
import NHSearchbar from './components/searchbar/';
import NHSpinner from './components/spinner/';
import NHTabs from './components/tabs/';
import NHThumbnail from './components/thumbnail/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sidebar';
import statusBarColor from './themes/base-theme';

Navigator.prototype.replaceWithAnimation = function replaceWithAnimation(route) {
  const activeLength = this.state.presentedIndex + 1;
  const activeStack = this.state.routeStack.slice(0, activeLength);
  const activeAnimationConfigStack = this.state.sceneConfigStack.slice(0, activeLength);
  const nextStack = activeStack.concat([route]);
  const destIndex = nextStack.length - 1;
  const nextSceneConfig = this.props.configureScene(route, nextStack);
  const nextAnimationConfigStack = activeAnimationConfigStack.concat([nextSceneConfig]);

  const replacedStack = activeStack.slice(0, activeLength - 1).concat([route]);
  this._emitWillFocus(nextStack[destIndex]);
  this.setState({
    routeStack: nextStack,
    sceneConfigStack: nextAnimationConfigStack,
  }, () => {
    this._enableScene(destIndex);
    this._transitionTo(destIndex, nextSceneConfig.defaultTransitionVelocity, null, () => {
      this.immediatelyResetRouteStack(replacedStack);
    });
  });
};

export const globalNav = {};

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
  }

  componentDidMount() {
    globalNav.navigator = this._navigator;

    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this._navigator.getCurrentRoutes();

      if (routes[routes.length - 1].id === 'home') {
                // CLose the app
        return true;
      }
      this.popRoute();
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this._drawer.close();
      this.props.closeDrawer();
    }
  }

  renderScene(route, navigator) { // eslint-disable-line class-methods-use-this
    switch (route.id) {
      case 'splashscreen':
        return <SplashPage navigator={navigator} />;
      case 'home':
        return <Home navigator={navigator} />;
      case 'anatomy':
        return <Anatomy navigator={navigator} />;
      case 'badge':
        return <NHBadge navigator={navigator} />;
      case 'button':
        return <NHButton navigator={navigator} />;
      case 'card':
        return <NHCard navigator={navigator} />;
      case 'checkbox':
        return <NHCheckbox navigator={navigator} />;
      case 'deckswiper':
        return <NHDeckSwiper navigator={navigator} />;
      case 'form':
        return <NHForm navigator={navigator} />;
      case 'icon':
        return <NHIcon navigator={navigator} />;
      case 'inputgroup':
        return <NHInputGroup navigator={navigator} />;
      case 'layout':
        return <NHLayout navigator={navigator} />;
      case 'list':
        return <NHList navigator={navigator} />;
      case 'basicList':
        return <NHBasicList navigator={navigator} />;
      case 'listDivider':
        return <NHListDivider navigator={navigator} />;
      case 'listIcon':
        return <NHListIcon navigator={navigator} />;
      case 'listAvatar':
        return <NHListAvatar navigator={navigator} />;
      case 'listThumbnail':
        return <NHListThumbnail navigator={navigator} />;
      case 'picker':
        return <NHPicker navigator={navigator} />;
      case 'radio':
        return <NHRadio navigator={navigator} />;
      case 'searchbar':
        return <NHSearchbar navigator={navigator} />;
      case 'spinner':
        return <NHSpinner navigator={navigator} />;
      case 'tabs':
        return <NHTabs navigator={navigator} />;
      case 'thumbnail':
        return <NHThumbnail navigator={navigator} />;
      default :
        return <Home navigator={navigator} />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        type="overlay"
        tweenDuration={150}
        content={<SideBar navigator={this._navigator} />}
        tapToClose
        acceptPan={false}
        onClose={() => this.closeDrawer()}
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        styles={{
          drawer: {
            shadowColor: '#000000',
            shadowOpacity: 0.8,
            shadowRadius: 3,
          },
        }}
        tweenHandler={(ratio) => {
          return {
            drawer: { shadowRadius: ratio < 0.2 ? ratio * 5 * 5 : 5 },
            main: {
              opacity: (2 - ratio) / 2,
            },
          };
        }}
        negotiatePan
      >
        <StatusBar
          backgroundColor={statusBarColor.statusBarColor}
          barStyle="default"
        />
        <Navigator
          ref={(ref) => {
            this._navigator = ref;
          }}
          configureScene={() => Navigator.SceneConfigs.FloatFromRight}
          initialRoute={{ id: (Platform.OS === 'android') ? 'splashscreen' : 'home', statusBarHidden: true }}
          renderScene={this.renderScene}
        />
      </Drawer>
    );
  }
}

const bindAction = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  popRoute: () => dispatch(popRoute()),
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
