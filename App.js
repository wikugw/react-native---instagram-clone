import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/Router'

const App: () => React$Node = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" />
      <Router />
    </NavigationContainer>
  );
};

export default App;
