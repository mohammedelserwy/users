import * as React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
} from 'react-native';

import { createStore, combineReducers, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { UsersNavigator } from './UsersNavigator';
import { usersReducer } from './store/state';
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
