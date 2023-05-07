import {StackActions, useNavigation} from '@react-navigation/native';
import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {Constants} from '../assets/constants';
import {removeData} from './storage';

const Logout = () => {
  const navigation = useNavigation();
  const logout = () => {
    removeData(Constants.mobile);
    navigation.dispatch(StackActions.replace(Constants.Login));
  };

  return (
    <TouchableOpacity onPress={logout}>
      <Text style={{color: 'black'}}>Logout</Text>
    </TouchableOpacity>
  );
};

export default Logout;
