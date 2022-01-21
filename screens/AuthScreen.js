import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  View,
  TextInput,
  Alert,
} from 'react-native';
import { StackActions } from '@react-navigation/native';


import { useDispatch } from 'react-redux';
import { fetchUsers, logIn, register } from '../store/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
const AuthScreen = function (props) {
  const dispatch = useDispatch();
  const [signUpMode, setSignUpMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [registerState, setRegisterState] = useState(false);

  return (
    <View style={styles.view}>
      <View style={styles.screen}>
        <View>
          <Text> email</Text>
          <TextInput
            style={styles.textInput}
            value={email}
            onChangeText={function (text) {
              setEmail(text);
            }}
          />
        </View>
        {email === '' && <Text style={styles.error}> enter your email</Text>}
        <View>
          <Text> password</Text>
          <TextInput
            secureTextEntry={true}
            style={styles.textInput}
            value={password}
            onChangeText={function (text) {
              setPassword(text);
            }}
          />
        </View>
        {email === '' && <Text style={styles.error}> enter your password</Text>}

        <Button
          color={'red'}
          title={signUpMode ? 'register' : 'log in'}
          onPress={async function () {
            if (email === "" || password === "") {
              Alert.alert('error', 'enter your data ', [
                { text: 'ok' },
              ]);
              return;
            }
            else if (signUpMode) {

              if (email === 'byron.fields@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else if (email === 'michael.lawson@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else if (email === 'lindsay.ferguson@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else if (email === 'tobias.funke@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else if (email === 'rachel.howell@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else if (email === 'george.edwards@reqres.in') {
                dispatch(register(email, password));
                await AsyncStorage.setItem('password', password);
                setRegisterState(true);
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );
              }
              else {
                Alert.alert(
                  'error',
                  'only defined users succeed registration',
                  [{ text: 'ok' }],
                );
                return;
              }

            }

            else {

              const storedPassword = await AsyncStorage.getItem('password');

              if (!registerState) {
                Alert.alert('error', 'only defined users succeed loged in', [
                  { text: 'ok' },
                ]);
                return;
              }
              else if (password !== storedPassword) {
                Alert.alert('error', 'invalid password try again', [
                  { text: 'ok' },
                ]);
                return;
              }
              else if (email === 'byron.fields@reqres.in') {
                dispatch(logIn(email, password));

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              } else if (email === 'michael.lawson@reqres.in') {
                dispatch(logIn(email, password));

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              } else if (email === 'lindsay.ferguson@reqres.in') {
                dispatch(logIn(email, password));
                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              } else if (email === 'tobias.funke@reqres.in') {
                dispatch(logIn(email, password));

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              } else if (email === 'rachel.howell@reqres.in') {
                dispatch(logIn(email, password));

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              } else if (email === 'george.edwards@reqres.in') {
                dispatch(logIn(email, password));

                props.navigation.dispatch(
                  StackActions.replace('Users'

                  )
                );

              }

              else {
                Alert.alert('error', 'only defined users succeed loged in', [
                  { text: 'ok' },
                ]);
                return;
              }

            }

            dispatch(fetchUsers());
          }}
        />

        <Button
          title={signUpMode ? 'switch to log in' : 'switch to register'}
          onPress={function () {
            setSignUpMode(function (state) {
              return !state;
            });
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    justifyContent: 'space-between',
    width: '95%',
    height: 300,
    borderColor: '#ccc',
    borderWidth: 3,
    borderRadius: 8,
  },
  button: {
    alignItems: 'center',
  },
  textInput: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  error: {
    color: 'red',
  },
});
export default AuthScreen;

