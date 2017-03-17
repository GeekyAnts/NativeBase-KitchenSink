
import { AsyncStorage } from 'react-native';
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers';
import promise from './promise';

export default function configureStore(onCompletion:()=>void):any {
  // const enhancer = compose(
  //   applyMiddleware(thunk, promise),
  //   devTools({
  //     name: 'nativebasekitchensink', realtime: true,
  //   }),
  // );

  const store = createStore(reducer);
  // persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
