import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Trackers from '../screens/trackers';
import Login from '../screens/login';
import Logout from '../components/logout';

const Stack = createNativeStackNavigator();

export const Routes = ({initialRouteName}: any) => {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName === '' ? 'Login' : 'Home'}>
      <Stack.Screen component={Login} name={'Login'} />
      <Stack.Screen
        component={Home}
        name={'Home'}
        options={{headerRight: () => <Logout />, title: 'Home'}}
      />
      <Stack.Screen
        component={Trackers}
        name={'Trackers'}
        options={{
          headerRight: () => <Logout />,
          title: 'Tracker',
        }}
      />
    </Stack.Navigator>
  );
};
