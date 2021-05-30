

import 'react-native-gesture-handler';

import React from 'react';
import { Text, View,Image } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Router from './router';



const App = () => {
  return (
    <NavigationContainer>
   
     <Router/>
    </NavigationContainer>

  );
};

export default App;
