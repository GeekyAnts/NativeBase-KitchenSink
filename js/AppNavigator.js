
import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform } from 'react-native';
import { connect } from 'react-redux';
import { Drawer } from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';

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
import NHListHeader from './components/list/list-headers';
import NHListIcon from './components/list/list-icon';
import NHListAvatar from './components/list/list-avatar';
import NHListThumbnail from './components/list/list-thumbnail';
import NHRadio from './components/radio/';
import NHSearchbar from './components/searchbar/';
import NHSpinner from './components/spinner/';
import NHPicker from './components/picker/';
import NHTabs from './components/tabs/';
import NHTab from './components/tab/';
import NHThumbnail from './components/thumbnail/';
import NHTypography from './components/typography/';
import SplashPage from './components/splashscreen/';
import SideBar from './components/sidebar';
import statusBarColor from './themes/base-theme';

const {
  popRoute,
} = actions;

const {
  CardStack: NavigationCardStack,
} = NavigationExperimental;

class AppNavigator extends Component {

  static propTypes = {
    drawerState: React.PropTypes.string,
    popRoute: React.PropTypes.func,
    closeDrawer: React.PropTypes.func,
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

  _renderScene(props) { // eslint-disable-line class-methods-use-this
    switch (props.scene.route.key) {
      case 'splashscreen':
        return <SplashPage />;
      case 'home':
        return <Home />;
      case 'header':
        return <Header />;
      case 'header1':
        return <Header1 />;
      case 'header2':
        return <Header2 />;
      case 'header3':
        return <Header3 />;
      case 'header4':
        return <Header4 />;
      case 'header5':
        return <Header5 />;
      case 'header6':
        return <Header6 />;
      case 'header7':
        return <Header7 />;
      case 'header8':
        return <Header8 />;
      case 'anatomy':
        return <Anatomy />;
      case 'footer':
        return <Footer />;
      case 'basicFooter':
        return <BasicFooter />;
      case 'iconFooter':
        return <IconFooter />;
      case 'iconText':
        return <IconText />;
      case 'badgeFooter':
        return <BadgeFooter />;
      case 'badge':
        return <NHBadge />;
      case 'button':
        return <NHButton />;
      case 'outline':
        return <Outline />;
      case 'default':
        return <Default />;
      case 'rounded':
        return <Rounded />;
      case 'block':
        return <Block />;
      case 'full':
        return <Full />;
      case 'custom':
        return <Custom />;
      case 'transparent':
        return <Transparent />;
      case 'iconBtn':
        return <IconBtn />;
      case 'disabled':
        return <Disabled />;
      case 'card':
        return <NHCard />;
      case 'basic':
        return <BasicCard />;
      case 'cardImage':
        return <NHCardImage />;
      case 'cardShowcase':
        return <NHCardShowcase />;
      case 'cardList':
        return <NHCardList />;
      case 'cardHeaderAndFooter':
        return <NHCardHeaderAndFooter />;
      case 'checkbox':
        return <NHCheckbox />;
      case 'deckswiper':
        return <NHDeckSwiper />;
      case 'fab':
        return <NHFab />;
      case 'basicFab':
        return <BasicFab />;
      case 'multipleFab':
        return <MultipleFab />;
      case 'form':
        return <NHForm />;
      case 'fixedLabel':
        return <FixedLabel />;
      case 'inlineLabel':
        return <InlineLabel />;
      case 'floatingLabel':
        return <FloatingLabel />;
      case 'placeholderLabel':
        return <PlaceholderLabel />;
      case 'stackedLabel':
        return <StackedLabel />;
      case 'textArea':
        return <TextArea />;
      case 'basicIcon':
        return <BasicIcon />;
      case 'state':
        return <IconState />;
      case 'specific':
        return <SpecificIcon />;
      case 'icon':
        return <NHIcon />;
      case 'inputgroup':
        return <NHInputGroup />;
      case 'regularInput':
        return <RegularInput />;
      case 'underlineInput':
        return <UnderlineInput />;
      case 'roundedInput':
        return <RoundedInput />;
      case 'iconInput':
        return <IconInput />;
      case 'successInput':
        return <SuccessInput />;
      case 'errorInput':
        return <ErrorInput />;
      case 'disabledInput':
        return <DisabledInput />;
      case 'layout':
        return <NHLayout />;
      case 'row':
        return <RowNB />;
      case 'column':
        return <ColumnNB />;
      case 'nested':
        return <NestedGrid />;
      case 'customRow':
        return <CustomRow />;
      case 'customCol':
        return <CustomCol />;
      case 'list':
        return <NHList />;
      case 'basicList':
        return <NHBasicList />;
      case 'listDivider':
        return <NHListDivider />;
      case 'listHeader':
        return <NHListHeader />;
      case 'listIcon':
        return <NHListIcon />;
      case 'listAvatar':
        return <NHListAvatar />;
      case 'listThumbnail':
        return <NHListThumbnail />;
      case 'picker':
        return <NHPicker />;
      case 'radio':
        return <NHRadio />;
      case 'searchbar':
        return <NHSearchbar />;
      case 'spinner':
        return <NHSpinner />;
      case 'tab':
        return <NHTab />;
      case 'tabs':
        return <NHTabs />;
      case 'thumbnail':
        return <NHThumbnail />;
      case 'typography':
        return <NHTypography />;
      default :
        return <Home />;
    }
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<SideBar navigator={this._navigator} />}
        onClose={() => this.closeDrawer()}
      >
        <StatusBar
          hidden={(this.props.drawerState === 'opened' && Platform.OS === 'ios') ? true : false}
          backgroundColor={statusBarColor.statusBarColor}
          barStyle="default"
        />
        <NavigationCardStack
          navigationState={this.props.navigation}
          renderOverlay={this._renderOverlay}
          renderScene={this._renderScene}
        />
      </Drawer>
    );
  }
}

const bindAction = dispatch => ({
  closeDrawer: () => dispatch(closeDrawer()),
  popRoute: key => dispatch(popRoute(key)),
});

const mapStateToProps = state => ({
  drawerState: state.drawer.drawerState,
  navigation: state.cardNavigation,
});

export default connect(mapStateToProps, bindAction)(AppNavigator);
