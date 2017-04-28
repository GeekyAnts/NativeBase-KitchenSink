import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {autoRehydrate, persistStore} from 'redux-persist'
import devTools from 'remote-redux-devtools';

import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    applyMiddleware(thunk, promise),
    devTools({
      name: 'KitchenSink', realtime: true,
    }),
  );

  const store = createStore(reducer);
  // persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
