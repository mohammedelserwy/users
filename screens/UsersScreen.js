import { useDispatch, useSelector } from 'react-redux';
import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  Button,
  FlatList,
  View,
  TextInput,
  ActivityIndicator,
  Image,
  ImageBackground,
} from 'react-native';
import { fetchUsers } from '../store/action';

const UsersScreen = function (props) {
  const users = useSelector(function (state) {
    return state.users.users;
  });


  if (users.length === 0) {
    return (
      <View style={styles.indicator}>
        <ActivityIndicator color={'blue'} size={'large'} />
      </View>
    );
  }

  return (
    <FlatList
      data={users}
      renderItem={function (itemData) {
        return (
          <View style={styles.screen}>

            <ImageBackground style={styles.image} source={{ uri: itemData.item.avatar }} />
            <View style={styles.textView}>

              <Text style={styles.text}>{`${itemData.item.first_name} ${itemData.item.last_name}`}</Text>
            </View>
            <ImageBackground />
          </View>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    height: 220,
    margin: 5,
  },
  text: {
    fontWeight: "bold",
    fontSize: 15,
    color: "black",
  },
  textView: {
    position: "absolute",
    top: 0,

    right: 0,


  },
  image: {
    flex: 1,
  },

  indicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default UsersScreen;
