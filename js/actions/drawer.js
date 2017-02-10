
import type { Action } from './types';

export const OPEN_DRAWER = 'OPEN_DRAWER';
export const CLOSE_DRAWER = 'CLOSE_DRAWER';
export const CHANGE_MATERIAL = 'CHANGE_MATERIAL';
export const CHANGE_PLATFORM = 'CHANGE_PLATFORM';

export function openDrawer():Action {
  return {
    type: OPEN_DRAWER,
  };
}

export function closeDrawer():Action {
  return {
    type: CLOSE_DRAWER,
  };
}

export function changeMaterial():Action {
  return {
    type: CHANGE_MATERIAL,
  };
}

export function changePlatform():Action {
  return {
    type: CHANGE_PLATFORM,
  };
}
