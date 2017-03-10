
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, variables, Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { Router, Scene } from 'react-native-router-flux';

import getTheme from '../native-base-theme/components';
import material from '../native-base-theme/variables/material';
import { closeDrawer } from './actions/drawer';

import Home from './components/home/';
import Header from './components/Header/';
import Header1 from './components/Header/1';
import Header2 from './components/Header/2';
import Header3 from './components/Header/3';
import Header4 from './components/Header/4';
import Header5 from './components/Header/5';
import Header6 from './components/Header/6';
import Header7 from './components/Header/7';
import Header8 from './components/Header/8';
import Anatomy from './components/anatomy/';
import Footer from './components/footer/';
import BasicFooter from './components/footer/basicFooter';
import IconFooter from './components/footer/iconFooter';
import IconText from './components/footer/iconText';
import BadgeFooter from './components/footer/badgeFooter';
import NHBadge from './components/badge/';
import NHButton from './components/button/';
import Default from './components/button/default';
import Outline from './components/button/outline';
import Rounded from './components/button/rounded';
import Block from './components/button/block';
import Full from './components/button/full';
import Custom from './components/button/custom';
import Transparent from './components/button/transparent';
import IconBtn from './components/button/iconBtn';
import Disabled from './components/button/disabled';
import NHCard from './components/card/';
import BasicCard from './components/card/basic';
import NHCardImage from './components/card/card-image';
import NHCardShowcase from './components/card/card-showcase';
import NHCardList from './components/card/card-list';
import NHCardHeaderAndFooter from './components/card/card-header-and-footer';
import NHCheckbox from './components/checkbox/';
import NHDeckSwiper from './components/deckswiper/';
import NHFab from './components/fab/';
import BasicFab from './components/fab/basic';
import MultipleFab from './components/fab/multiple';
import NHForm from './components/form/';
import FixedLabel from './components/form/fixedLabel';
import InlineLabel from './components/form/inlineLabel';
import FloatingLabel from './components/form/floatingLabel';
import PlaceholderLabel from './components/form/placeholder';
import StackedLabel from './components/form/stacked';
import TextArea from './components/form/textArea';
import NHIcon from './components/icon/';
import BasicIcon from './components/icon/basic';
import IconState from './components/icon/state';
import SpecificIcon from './components/icon/specific';
import NHInputGroup from './components/inputgroup/';
import RegularInput from './components/inputgroup/regular';
import UnderlineInput from './components/inputgroup/underline';
import RoundedInput from './components/inputgroup/rounded';
import IconInput from './components/inputgroup/iconInput';
import SuccessInput from './components/inputgroup/success';
import ErrorInput from './components/inputgroup/error';
import DisabledInput from './components/inputgroup/disabledInput';
import NHLayout from './components/layout/';
import RowNB from './components/layout/row';
import ColumnNB from './components/layout/column';
import NestedGrid from './components/layout/nested';
import CustomRow from './components/layout/customRow';
import CustomCol from './components/layout/customCol';
import NHList from './components/list/';
import NHBasicList from './components/list/basic-list';
import NHListDivider from './components/list/list-divider';
import NHListSeparator from './components/list/list-separator';
import NHListHeader from './components/list/list-headers';
import NHListIcon from './components/list/list-icon';
import NHListAvatar from './components/list/list-avatar';
import NHListThumbnail from './components/list/list-thumbnail';
import NHRadio from './components/radio/';
import NHSearchbar from './components/searchbar/';
import NHSpinner from './components/spinner/';
import NHPicker from './components/picker/';
import NHTab from './components/tab/';
import BasicTab from './components/tab/basicTab';
import ConfigTab from './components/tab/configTab';
import NHThumbnail from './components/thumbnail/';
import NHTypography from './components/typography/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sidebar';
import Segment from './components/segment';
import BasicSegment from './components/segment/SegmentHeader';
import AdvSegment from './components/segment/segmentTab';
import Toast from './components/toast';
import statusBarColor from './themes/variables';

const {
  popRoute,
} = actions;

const RouterWithRedux = connect()(Router);

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
    themeState: React.PropTypes.string,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
      routes: React.PropTypes.array,
    }),
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', () => {
      const routes = this.props.navigation.routes;

      if (routes[routes.length - 1].key === 'home') {
        return false;
      }

      this.props.popRoute(this.props.navigation.key);
      return true;
    });
  }

  componentDidUpdate() {
    if (this.props.drawerState === 'opened') {
      this.openDrawer();
    }

    if (this.props.drawerState === 'closed') {
      this._drawer._root.close();
    }
  }

  popRoute() {
    this.props.popRoute();
  }

  openDrawer() {
    this._drawer._root.open();
  }

  closeDrawer() {
    if (this.props.drawerState === 'opened') {
      this.props.closeDrawer();
    }
  }

  render() {
    return (
      <StyleProvider style={getTheme((this.props.themeState === 'material') ? material : undefined)}>
        <Drawer
          ref={(ref) => { this._drawer = ref; }}
          content={<SideBar navigator={this._navigator} />}
          onClose={() => this.closeDrawer()}
        >
          <StatusBar
            hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
            backgroundColor={statusBarColor.statusBarColor}
          />
          <RouterWithRedux>
            <Scene key="root">
              <Scene key="home" component={Home} hideNavBar initial={true} />
              <Scene key="header" component={Header} />
              <Scene key="header1" component={Header1} />
              <Scene key="header2" component={Header2} />
              <Scene key="header3" component={Header3} />
              <Scene key="header4" component={Header4} />
              <Scene key="header5" component={Header5} />
              <Scene key="header6" component={Header6} />
              <Scene key="header7" component={Header7} />
              <Scene key="header8" component={Header8} />
              <Scene key="anatomy" component={Anatomy} />
              <Scene key="footer" component={Footer} />
              <Scene key="basicFooter" component={BasicFooter} />
              <Scene key="iconFooter" component={IconFooter} />
              <Scene key="iconText" component={IconText} />
              <Scene key="badgeFooter" component={BadgeFooter} />
              <Scene key="badge" component={NHBadge} />
              <Scene key="button" component={NHButton} />
              <Scene key="outline" component={Outline} />
              <Scene key="default" component={Default} />
              <Scene key="rounded" component={Rounded} />
              <Scene key="disabled" component={Disabled} />
              <Scene key="block" component={Block} />
              <Scene key="full" component={Full} />
              <Scene key="custom" component={Custom} />
              <Scene key="transparent" component={Transparent} />
              <Scene key="iconBtn" component={IconBtn} />
              <Scene key="card" component={NHCard} />
              <Scene key="basic" component={BasicCard} />
              <Scene key="cardImage" component={NHCardImage} />
              <Scene key="cardShowcase" component={NHCardShowcase} />
              <Scene key="cardList" component={NHCardList} />
              <Scene key="cardHeaderAndFooter" component={NHCardHeaderAndFooter} />
              <Scene key="checkbox" component={NHCheckbox} />
              <Scene key="deckswiper" component={NHDeckSwiper} />
              <Scene key="fab" component={NHFab} />
              <Scene key="basicFab" component={BasicFab} />
              <Scene key="multipleFab" component={MultipleFab} />
              <Scene key="form" component={NHForm} />
              <Scene key="fixedLabel" component={FixedLabel} />
              <Scene key="inlineLabel" component={InlineLabel} />
              <Scene key="floatingLabel" component={FloatingLabel} />
              <Scene key="placeholderLabel" component={PlaceholderLabel} />
              <Scene key="stackedLabel" component={StackedLabel} />
              <Scene key="textArea" component={TextArea} />
              <Scene key="basicIcon" component={BasicIcon} />
              <Scene key="state" component={IconState} />
              <Scene key="specific" component={SpecificIcon} />
              <Scene key="icon" component={NHIcon} />
              <Scene key="inputgroup" component={NHInputGroup} />
              <Scene key="regularInput" component={RegularInput} />
              <Scene key="underlineInput" component={UnderlineInput} />
              <Scene key="roundedInput" component={RoundedInput} />
              <Scene key="iconInput" component={IconInput} />
              <Scene key="successInput" component={SuccessInput} />
              <Scene key="errorInput" component={ErrorInput} />
              <Scene key="disabledInput" component={DisabledInput} />
              <Scene key="layout" component={NHLayout} />
              <Scene key="row" component={RowNB} />
              <Scene key="column" component={ColumnNB} />
              <Scene key="nested" component={NestedGrid} />
              <Scene key="customRow" component={CustomRow} />
              <Scene key="customCol" component={CustomCol} />
              <Scene key="list" component={NHList} />
              <Scene key="basicList" component={NHBasicList} />
              <Scene key="listDivider" component={NHListDivider} />
              <Scene key="listSeparator" component={NHListSeparator} />
              <Scene key="listHeader" component={NHListHeader} />
              <Scene key="listIcon" component={NHListIcon} />
              <Scene key="listAvatar" component={NHListAvatar} />
              <Scene key="listThumbnail" component={NHListThumbnail} />
              <Scene key="picker" component={NHPicker} />
              <Scene key="radio" component={NHRadio} />
              <Scene key="searchbar" component={NHSearchbar} />
              <Scene key="spinner" component={NHSpinner} />
              <Scene key="tab" component={NHTab} />
              <Scene key="basicTab" component={BasicTab} />
              <Scene key="configTab" component={ConfigTab} />
              <Scene key="thumbnail" component={NHThumbnail} />
              <Scene key="typography" component={NHTypography} />
              <Scene key="segment" component={Segment} />
              <Scene key="basicSeg" component={BasicSegment} />
              <Scene key="advSeg" component={AdvSegment} />
              <Scene key="toast" component={Toast} />
            </Scene>
          </RouterWithRedux>
        </Drawer>
      </StyleProvider>
    );
  }
}

const bindAction = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  themeState: state.drawer.themeState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
