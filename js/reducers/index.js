
import { combineReducers } from 'redux';

import drawer from './drawer';
import cardNavigation from './cardNavigation';
import route from './route';

export default combineReducers({

  drawer,
  cardNavigation,
  route,

});
