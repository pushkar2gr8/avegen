/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {Routes} from './app/routes';
import {QueryClient, QueryClientProvider} from 'react-query';
import {getData} from './app/components/storage';
import {Constants} from './app/assets/constants';

function App(): JSX.Element {
  const queryClient = new QueryClient();

  return (
    <SafeAreaView style={styles.container}>
      <QueryClientProvider client={queryClient}>
        <NavigationContainer>
          <Routes initialRouteName={getData(Constants.mobile)} />
        </NavigationContainer>
      </QueryClientProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
