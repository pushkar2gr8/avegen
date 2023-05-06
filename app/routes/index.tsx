import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/home';
import Trackers from '../screens/trackers';

const Stack = createNativeStackNavigator();

export const Routes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen component={Home} name={'Home'} />
      <Stack.Screen component={Trackers} name={'Trackers'} />
    </Stack.Navigator>
  );
};
