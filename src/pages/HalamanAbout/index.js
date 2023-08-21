
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';



function HalamanAbout({ navigation }) {

    const images = [

        require('../../assets/img/potoslider1.png'),
        require('../../assets/img/potoslider2revisi.png'),
        require('../../assets/img/potoslider3revisi.png'),



    ]

    return (



        <SafeAreaView style={{
            flex: 1,
            backgroundColor: colors.white
        }}>

            <View style={{
                padding: 10,
                backgroundColor: colors.primary,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}>
                    <Image style={{ width: 16, height: 14, }} source={require('../../assets/img/logoback.png')} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', color: colors.white, fontSize: 25, fontFamily: 'Alata-Regular', }}>About</Text>


            </View>
            <View style={{
                flex: 1,
                backgroundColor: colors.white
            }}>
                <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 20, marginLeft: 10, marginVertical: 30 }}>Follow us on :</Text>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    marginVertical: 2,
                }} onPress={() => Linking.openURL('https://instagram.com/prylashlift?igshid=YmMyMTA2M2Y=')}>

                    <Image style={{ width: 24, height: 17, resizeMode: 'contain' }} source={require('../../assets/img/iconinstagram.png')} />
                    <Text style={{ left: 10, color: colors.primary, fontSize: 15, fontFamily: 'Alata-Regular' }}>Prylashlift</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    marginVertical: 2,
                }} onPress={() => Linking.openURL('https://youtube.com/channel/UCiUNVXKgYTn5alPcbqSZc1Q')}>

                    <Image style={{ width: 24, height: 17, resizeMode: 'contain' }} source={require('../../assets/img/iconyt.png')} />
                    <Text style={{ left: 10, color: colors.primary, fontSize: 15, fontFamily: 'Alata-Regular' }}>PryLashLift.id</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    padding: 10,
                    marginVertical: 2,
                }}>

                    <Image style={{ width: 24, height: 17, resizeMode: 'contain' }} source={require('../../assets/img/iconmaps.png')} />
                    <Text style={{ left: 10, color: colors.primary, fontSize: 15, fontFamily: 'Alata-Regular' }}>Gg Kepudang rt02 rw04 padasugih Brebes</Text>

                </TouchableOpacity>

            </View>

        </SafeAreaView >


    );
}

export default HalamanAbout;