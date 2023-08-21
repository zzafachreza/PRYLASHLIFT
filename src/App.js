// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HalamanSplash from './pages/HalamanSplash/index';
import HalamanHome from './pages/HalamanHome/index';
import HalamanOrder from './pages/HalamanOrder';
import HalamanServiceProduk from './pages/HalamanServiceProduk';
import HalamanChat from './pages/HalamanChat';
import HalamanAbout from './pages/HalamanAbout';
import { StatusBar } from 'react-native';
import colors from './utils/colors';
import HalamanDesc from './pages/HalamanDesc';



const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.primary} />
      <Stack.Navigator initialRouteName='HalamanSplash'>
        <Stack.Screen name="HalamanSplash" component={HalamanSplash} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanHome" component={HalamanHome} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanOrder" component={HalamanOrder} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanServiceProduk" component={HalamanServiceProduk} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanChat" component={HalamanChat} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanAbout" component={HalamanAbout} options={{ headerShown: false }} />
        <Stack.Screen name="HalamanDesc" component={HalamanDesc} options={{ headerShown: false }} />




      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;