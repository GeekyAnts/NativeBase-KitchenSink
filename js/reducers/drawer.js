
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER, CHANGE_MATERIAL, CHANGE_PLATFORM } from '../actions/drawer';

export type State = {
    drawerState: string,
    drawerDisabled: boolean,
    themeState: string,
}

const initialState = {
  drawerState: 'closed',
  drawerDisabled: true,
  themeState: 'platform',
};

export default function (state:State = initialState, action:Action): State {
  if (action.type === OPEN_DRAWER) {
    return {
      ...state,
      drawerState: 'opened',
    };
  }

  if (action.type === CLOSE_DRAWER) {
    return {
      ...state,
      drawerState: 'closed',
    };
  }

  if (action.type === CHANGE_PLATFORM) {
    return {
      ...state,
      themeState: 'platform',
    };
  }

  if (action.type === CHANGE_MATERIAL) {
    return {
      ...state,
      themeState: 'material',
    };
  }

  return state;
}
