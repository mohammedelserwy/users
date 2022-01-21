import 'react-native-gesture-handler';
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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthScreen from './screens/AuthScreen';
import UsersScreen from './screens/UsersScreen';
const authScreenOptions = {
  headerStyle: {
    backgroundColor: "blue",
  },
  headerTintColor: "white",
};
const UsersStackNavigator = createStackNavigator();
export const UsersNavigator = function () {
  return (<NavigationContainer>
    <UsersStackNavigator.Navigator >
      <UsersStackNavigator.Screen name='Auth' component={AuthScreen} options={authScreenOptions} />
      <UsersStackNavigator.Screen name='Users' component={UsersScreen} />

    </UsersStackNavigator.Navigator>
  </NavigationContainer>);
}