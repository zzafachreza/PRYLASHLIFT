
import React , { useState, useEffect} from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';



function HalamanChat({navigation}) {

    const images = [

require('../../assets/img/potoslider1.png'),
require('../../assets/img/potoslider2revisi.png'),
require('../../assets/img/potoslider3revisi.png'),



    ]

  return (


  
    <View style={{ flex: 1, justifyContent: 'center',}}>
 
<View style={{padding:10, backgroundColor:colors.primary, paddingVertical:80, borderRadius:20,marginBottom:590  }}>
<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} style={{position:'absolute', marginTop:110, marginLeft:20}}>
<Image   style={{width:16, height:14, }}  source={require('../../assets/img/logoback.png')}  />
</TouchableOpacity>
<Text style={{color:colors.white, fontSize:30, fontFamily:'Alata-Regular', position:'absolute', marginTop:90, marginLeft:140,}}>Chat</Text>

</View>






<View style={{padding:0.5, backgroundColor:colors.primary}}>

</View>

<View style={{marginBottom:130, }}>
<TouchableOpacity  style={{ marginLeft:250, marginTop:10, position:'absolute',}}>
    <Image style={{ width:30, height:39,}}  source={require('../../assets/img/logologutrevisi.png')}  />
</TouchableOpacity>

<TouchableOpacity   onPress={()=>navigation.navigate('HalamanHome')} style={{ marginLeft:73, marginTop:10, position:'absolute'}}>
    <Image   style={{ width:40, height:40}} source={require('../../assets/img/logorumahhome.png')}  />
</TouchableOpacity>
</View>





    </View>
    
   
  );
}

export default  HalamanChat;