import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import COLORS from './src/const/color';
import OnBoardScreen from './src/views/screens/OnBoadScreen';
import BottomNavigator from './src/views/navigation/BottomNavigator';
import DetailsScreen from './src/views/screens/DetailsScreen'
import LoginScreen from './src/views/screens/LoginScreen';


const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={COLORS.white} barStyle="dark-content"/>
      <Stack.Navigator screenOptions={{headerShown: false}}>
       <Stack.Screen name='BoardScreen' component={OnBoardScreen}/>
       <Stack.Screen name='Home' component={BottomNavigator}/>
       <Stack.Screen name='DetailsScreen' component={DetailsScreen}/>
       <Stack.Screen name='login' component={LoginScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

