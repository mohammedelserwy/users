import * as React from 'react';
import { LogBox } from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { UsersNavigator } from './UsersNavigator';
import { usersReducer } from './store/state';
LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);
const root = combineReducers({
  users: usersReducer,
});
const store = createStore(root, applyMiddleware(ReduxThunk));

const App = () => {
  return (
    <Provider store={store}>
      <UsersNavigator />
    </Provider>
  );
};



export default App;
