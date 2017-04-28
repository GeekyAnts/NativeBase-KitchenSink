
export type Action =
  
      { type: 'OPEN_DRAWER'}
    | { type: 'CLOSE_DRAWER'}
    | { type: 'CHANGE_PLATFORM'}
    | { type: 'CHANGE_MATERIAL'}

export type Dispatch = (action:Action | Array<Action>) => any;
export type GetState = () => Object;
export type PromiseAction = Promise<Action>;
