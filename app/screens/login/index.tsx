import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {Constants} from '../../assets/constants';
import {styles} from './styles';
import BPInput from '../../components/BPInput';
import {setData} from '../../components/storage';

const Login = () => {
  const navigation = useNavigation();
  const [mobile, setMobileNumber] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <BPInput
          title="Mobile Number"
          onChangeText={number => setMobileNumber(number)}
        />

        <Button
          title="Login"
          disabled={mobile === ''}
          onPress={() => {
            setData(Constants.mobile, mobile);
            navigation.dispatch(StackActions.replace(Constants.Home));
          }}
        />
      </View>
    </View>
  );
};

export default Login;
