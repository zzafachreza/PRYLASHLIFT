
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, Linking, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Carousel from 'react-native-snap-carousel';
import TextTicker from 'react-native-text-ticker'
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';



function HalamanHome({ navigation }) {



    const [berita, setBerita] = useState('');

    useEffect(() => {



        fetch('https://zavalabs.com/api/pry.php')
            .then((response) => response.json())
            .then((json) => {
                console.log(json.text);
                setBerita(json.text)
            })
            .catch((error) => {
                console.error(error);
            });

    }, [])


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
                backgroundColor: colors.primary,
                padding: 10,
                flexDirection: 'row',
                paddingBottom: 30,
                borderBottomLeftRadius: 20,
                borderBottomRightRadius: 20,
            }}>
                <View style={{
                    flex: 1,
                }}>
                    <Text style={{ color: colors.white, fontSize: 18, fontFamily: 'Alata-Regular', }}>Selamat Datang</Text>
                    <Text style={{ color: colors.white, fontSize: 14, fontFamily: 'Alata-Regular' }}>Jasa Eyelash, Lash Lift, dan Nail Art Tersertifikasi</Text>
                    <Text style={{ color: colors.white, fontSize: 25, fontFamily: 'Alata-Regular' }}>PRYLASHLIFT</Text>


                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <Image style={{ width: 50, height: 50, borderRadius: 30 }} source={require('../../assets/img/potosplash.png')} />
                </View>
            </View>
            <Image style={{ width: '100%', alignSelf: 'center', height: 220, marginBottom: 10, borderRadius: 20, marginTop: 10, resizeMode: 'contain' }} source={require('../../assets/img/gambarmukauntukhome.png')} />
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanOrder')} style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        flex: 1,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>

                        <Image style={{ width: 50, height: 45, }} source={require('../../assets/img/logochart.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15 }}>Order</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanServiceProduk')} style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        flex: 1,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>

                        <Image style={{ width: 50, height: 45, resizeMode: 'contain' }} source={require('../../assets/img/logoservice.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15 }}>Service & Product</Text>

                    </TouchableOpacity>
                </View>
                <View style={{
                    flex: 1,
                    flexDirection: 'row'
                }}>
                    <TouchableOpacity onPress={() => Linking.openURL('https://wa.me/6285293044917&text=hallo')} style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        flex: 1,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>

                        <Image style={{ width: 50, height: 45, }} source={require('../../assets/img/logochat.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15 }}>Chat</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanDesc')} style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        flex: 1,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>

                        <Image style={{ width: 50, height: 45, }} source={require('../../assets/img/desc.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15 }}>Deskripsi</Text>

                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('HalamanAbout')} style={{
                        padding: 10,
                        backgroundColor: colors.primary,
                        flex: 1,
                        margin: 15,
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: 10,
                    }}>

                        <Image style={{ width: 50, height: 45, }} source={require('../../assets/img/logoabout.png')} />
                        <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 15 }}>About</Text>

                    </TouchableOpacity>
                </View>
            </View>
            <TextTicker style={{ fontSize: 20, fontFamily: 'Alata-Regular' }} duration={10000}
                loop
                bounce
                repeatSpacer={50}
                marqueeDelay={1000}>
                {berita}
            </TextTicker>
            <View style={{
                padding: 10,
                flexDirection: 'row',
                borderTopWidth: 2,
                borderTopColor: colors.primary,
            }}>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Image style={{ width: 30, height: 39, }} source={require('../../assets/img/logorumahhome.png')} />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 1,
                }}>
                    <Image style={{ width: 30, height: 39, }} source={require('../../assets/img/logologutrevisi.png')} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default HalamanHome;