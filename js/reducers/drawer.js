
import type { Action } from '../actions/types';
import { OPEN_DRAWER, CLOSE_DRAWER } from '../actions/drawer';

export type State = {
    drawerState: string
}

const initialState = {
  drawerState: 'closed',
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
  return state;
}
