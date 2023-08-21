
import * as React from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import TextTicker from 'react-native-text-ticker'
import colors from '../../utils/colors';



function HalamanSplash({ navigation }) {


  setTimeout(() => {
    navigation.replace('HalamanHome');
  }, 1500)

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colors.white }}>


      <Image style={{ width: 233, height: 252, }} source={require('../../assets/img/potosplash.png')}

      />
      <ActivityIndicator size="large" color={colors.primary} />
      <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 30, marginTop: 20 }}>PRYLASHLIFT</Text>
    </View>
  );
}

export default HalamanSplash;