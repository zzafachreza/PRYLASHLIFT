
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Linking } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';


function HalamanOrder({ navigation }) {

    const initialJenis = {
        1: {
            nama: 'Eyelash',
            pilih: false
        },
        2: {
            nama: 'Lash Lift',
            pilih: false
        },
        3: {
            nama: 'Nail Art',
            pilih: false
        }
    }

    const [jenis, setJenis] = useState({
        1: {
            nama: 'Eyelash',
            pilih: false
        },
        2: {
            nama: 'Lash Lift',
            pilih: false
        },
        3: {
            nama: 'Nail Art',
            pilih: false
        }
    })

    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = new Date(selectedDate);
        setShow(false);
        setDate(currentDate);
        console.log(selectedDate);

        var date = new Date(selectedDate);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        switch (hari) {
            case 0: hari = "Minggu"; break;
            case 1: hari = "Senin"; break;
            case 2: hari = "Selasa"; break;
            case 3: hari = "Rabu"; break;
            case 4: hari = "Kamis"; break;
            case 5: hari = "Jum'at"; break;
            case 6: hari = "Sabtu"; break;
        }
        switch (bulan) {
            case 0: bulan = "Januari"; break;
            case 1: bulan = "Februari"; break;
            case 2: bulan = "Maret"; break;
            case 3: bulan = "April"; break;
            case 4: bulan = "Mei"; break;
            case 5: bulan = "Juni"; break;
            case 6: bulan = "Juli"; break;
            case 7: bulan = "Agustus"; break;
            case 8: bulan = "September"; break;
            case 9: bulan = "Oktober"; break;
            case 10: bulan = "November"; break;
            case 11: bulan = "Desember"; break;
        }
        var tampilTanggal = hari + ", " + tanggal + " " + bulan + " " + tahun;
        var tampilWaktu = "Jam: " + jam + ":" + menit + ":" + detik;
        console.log(tampilTanggal);
        setKirim({
            ...kirim,
            tanggal: tampilTanggal
        })
    };

    const showMode = (currentMode) => {
        if (Platform.OS === 'android') {
            setShow(false);
            // for iOS, add a button that closes the picker
        }
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    const showTimepicker = () => {
        showMode('time');
    };

    const [kirim, setKirim] = useState({
        nama_pesanan: '',
        alamat: '',
        tanggal: '',
        jenis_pesanan: ''
    });

    const __sendServer = () => {
        console.log(kirim);
        let text = 'Nama Pesanan : *' + kirim.nama_pesanan + '* %0A' + 'Alamat : *' + kirim.alamat + '* %0A' + 'Tanggal : *' + kirim.tanggal + '* %0A' + 'Jenis Pesanan : *' + kirim.jenis_pesanan + '*'
        Linking.openURL('https://api.whatsapp.com/send/?phone=6285293044917&text=' + text)
    }

    const images = [

        require('../../assets/img/s1.jpg'),
        require('../../assets/img/s2.jpg'),
        require('../../assets/img/s3.jpg'),
        require('../../assets/img/s4.jpg'),
        require('../../assets/img/s5.jpg'),



    ]

    return (



        <View style={{ flex: 1, backgroundColor: colors.white }}>

            <View style={{
                padding: 10,
                backgroundColor: colors.primary,
                flexDirection: 'row',
                alignItems: 'center'
            }}>
                <TouchableOpacity onPress={() => navigation.navigate('HalamanHome')} style={{}}>
                    <Image style={{ width: 16, height: 14, }} source={require('../../assets/img/logoback.png')} />
                </TouchableOpacity>
                <Text style={{ flex: 1, textAlign: 'center', color: colors.white, fontSize: 25, fontFamily: 'Alata-Regular', }}>Order</Text>


            </View>
            <SafeAreaView style={{
                flex: 1,
            }}>
                <ScrollView>
                    <SliderBox style={{ width: '100%', height: 220, }} images={images} dotStyle={{ height: 5, width: 5, marginBottom: 10, }} dotColor="red" />


                    <View style={{ flex: 1, marginTop: 20 }}>

                        <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 15, marginLeft: 20 }}>Nama Pesanan</Text>
                        <TextInput onChangeText={x => setKirim({
                            ...kirim,
                            nama_pesanan: x
                        })} style={{ margin: 10, backgroundColor: colors.white, elevation: 6, fontFamily: 'Alata-Regular', borderRadius: 10, color: colors.black, paddingVertical: 9 }} />


                        <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 15, marginLeft: 20 }}>Alamat</Text>
                        <TextInput onChangeText={x => setKirim({
                            ...kirim,
                            alamat: x
                        })} style={{ margin: 10, backgroundColor: colors.white, elevation: 6, fontFamily: 'Alata-Regular', borderRadius: 10, color: colors.black }} />



                        <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 15, marginLeft: 20 }}>Tanggal Pesanan</Text>
                        <TextInput value={kirim.tanggal} onTouchStart={() => setShow(true)} style={{ margin: 10, backgroundColor: colors.white, elevation: 6, fontFamily: 'Alata-Regular', borderRadius: 10, color: colors.black }} />



                        <Text style={{ color: colors.primary, fontFamily: 'Alata-Regular', fontSize: 15, marginLeft: 20 }}>Jenis Pesanan</Text>

                        <View style={{
                            marginTop: 10,
                            marginHorizontal: 10,
                            flexDirection: 'row',
                            justifyContent: 'space-around'
                        }}>
                            <TouchableOpacity onPress={() => {
                                setJenis({
                                    ...initialJenis,
                                    1: {
                                        nama: 'Eyelash',
                                        pilih: true
                                    },

                                })

                                setKirim({
                                    ...kirim,
                                    jenis_pesanan: 'Eyelash'
                                })
                            }} style={{
                                width: '30%',
                                borderWidth: 1,
                                borderColor: colors.primary,
                                borderRadius: 10,
                                padding: 10,
                                backgroundColor: jenis[1].pilih ? colors.primary : colors.white,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: jenis[1].pilih ? colors.white : colors.black,
                                    fontFamily: 'Alata-Regular',
                                    fontSize: 15,
                                }}>{jenis[1].nama}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setJenis({
                                    ...initialJenis,

                                    2: {
                                        nama: 'Lash Lift',
                                        pilih: true
                                    },

                                })

                                setKirim({
                                    ...kirim,
                                    jenis_pesanan: 'Lash Lift'
                                })
                            }} style={{
                                width: '30%',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: colors.primary,
                                padding: 10,
                                backgroundColor: jenis[2].pilih ? colors.primary : colors.white,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: jenis[2].pilih ? colors.white : colors.black,
                                    fontFamily: 'Alata-Regular',
                                    fontSize: 15,
                                }}>{jenis[2].nama}</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => {
                                setJenis({
                                    ...initialJenis,
                                    3: {
                                        nama: 'Nail Art',
                                        pilih: true
                                    }
                                })

                                setKirim({
                                    ...kirim,
                                    jenis_pesanan: 'Nail Art'
                                })
                            }} style={{
                                width: '30%',
                                borderWidth: 1,
                                borderRadius: 10,
                                borderColor: colors.primary,
                                backgroundColor: jenis[3].pilih ? colors.primary : colors.white,
                                padding: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }}>
                                <Text style={{
                                    color: jenis[3].pilih ? colors.white : colors.black,
                                    fontFamily: 'Alata-Regular',
                                    fontSize: 15,
                                }}>{jenis[3].nama}</Text>
                            </TouchableOpacity>
                        </View>




                    </View>


                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={mode}
                            is24Hour={true}
                            onChange={onChange}
                        />
                    )}


                </ScrollView>
                <TouchableOpacity onPress={__sendServer} style={{ padding: 10, backgroundColor: colors.primary, }}>
                    <Text style={{ color: colors.white, fontFamily: 'Alata-Regular', fontSize: 22, textAlign: 'center' }}>Input Data</Text>
                </TouchableOpacity>
            </SafeAreaView>


        </View >


    );
}

export default HalamanOrder;