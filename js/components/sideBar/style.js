
const React = require('react-native');

const { StyleSheet, Platform, Dimensions } = React;

const deviceHeight = Dimensions.get('window').height;

module.exports = StyleSheet.create({
  sidebar: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerCover: {
    alignSelf: 'stretch',
    // resizeMode: 'cover',
    height: deviceHeight / 3.5,
    width: null,
    position: 'relative',
    marginBottom: 10,
  },
  drawerImage: {
    position: 'absolute',
    left: (Platform.OS === 'android') ? 15 : 20,
    top: (Platform.OS === 'android') ? 10 : 15,
    // borderWidth: 0,
    borderColor: '#fff',
    // shadowColor: '#000',
    // shadowOffset: { width: 2, height: 2 },
    // shadowOpacity: 0.4,
    // shadowRadius: 1,
    borderRadius: 26,
    width: 250,
    height: 150,
    alignSelf: 'stretch',
    resizeMode: 'cover',
  },
  listItemContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  iconContainer: {
    width: 37,
    height: 37,
    borderRadius: 18,
    marginRight: 12,
    paddingLeft: 11,
    paddingTop: (Platform.OS === 'android') ? 7 : 5,
  },
  sidebarIcon: {
    fontSize: 21,
    color: '#fff',
    lineHeight: 25,
    backgroundColor: 'transparent',
  },
  text: {
    fontWeight: '500',
    fontSize: 16,
  },
});
