
import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, ScrollView, Linking, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../utils/colors';
import { SliderBox } from 'react-native-image-slider-box';
import { SafeAreaView } from 'react-native-safe-area-context';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function HalamanDesc({ navigation }) {
    return (
        <SafeAreaView style={{
            flex: 1, backgroundColor: colors.white
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
                <Text style={{ flex: 1, textAlign: 'center', color: colors.white, fontSize: 25, fontFamily: 'Alata-Regular', }}>Deskripsi</Text>


            </View>

            <ScrollView style={{
                padding: 20,

            }}>
                <Text style={styles.judul}>BULU MATA</Text>
                <Text style={styles.desc}>Kami memproduksi bulu mata yang berkualitas dengan bahan terbaik</Text>
                <Text style={styles.judul}>LASHLIFT TINT</Text>
                <Text style={styles.desc}>Memberikan warna khusus pada bulu mata kamu. Tampilan bulu mata jadi terlihat lebih hitam pekat tanpa perlu lagi menggunakan maskara</Text>
                <Text style={styles.judul}>LASHLIFT KERATIN</Text>
                <Text style={styles.desc}>Proses perawatannya dengan cara mengaplikasikan keratin ke seluruh permukaan bulu mata. Sehingga bulu mata asli akan terangkat secara keseluruhan yang kemudian tampak lebih tebal dan lentik</Text>
                <Text style={styles.judul}>EYELASH - Classic Lash</Text>
                <Text style={styles.desc}>Tipe ini paling cocok untuk untuk mencari tampilan eyelash extension natural</Text>
                <Text style={styles.judul}>EYELASH - Medium Lash</Text>
                <Text style={styles.desc}>Tipe ini paling cocok untuk untuk mencari tampilan eyelash untuk acara penting seperti wisuda, kondangan dan kerja</Text>
                <Text style={styles.judul}>EYELASH - Volume Lash</Text>
                <Text style={styles.desc}>Ini adalah lash yang akan memberikan kesan tebal, bervolume, dan fluffy pada bulu matamu. </Text>
                <Text style={styles.judul}>NAIL ART - Basic Manicure</Text>
                <Text style={styles.desc}>Basic manicure adalah manicure standar yang Kuku kamu akan dipotong, dibentuk, dan digosok. Kutikula kamu juga akan dibersihkan dan minyak akan dioleskan di sekitar kuku. Biasanya, kamu juga akan menikmati pijat tangan yang sangat menenangkan.</Text>
                <Text style={styles.judul}>NAIL ART - Basic Manicure</Text>
                <Text style={styles.desc}>Basic manicure adalah manicure standar yang Kuku kamu akan dipotong, dibentuk, dan digosok. Kutikula kamu juga akan dibersihkan dan minyak akan dioleskan di sekitar kuku. Biasanya, kamu juga akan menikmati pijat tangan yang sangat menenangkan.</Text>
                <Text style={styles.judul}>NAIL ART - Pedicure </Text>
                <Text style={styles.desc}>Pedicure adalah perawatan yang dilakukan pada kuku dan kulit bagian kaki. Selain merawat kuku agar bersih mengilap, meni pedi juga memungkinkan kamu untuk memiliki tambahan kuku buatan, kutek, dan hiasan kuku sesuai keinginan.</Text>
                <Text style={styles.judul}>NAIL ART - Gel Polish </Text>
                <Text style={styles.desc}>Gel Polish kini menjadi salah satu pilihan bagi para perempuan yang menginginkan memiliki kuku yang terlihat cantik namun praktis. Penggunaan gel polish pada kuku ini bisa bertahan kurang lebih 1 bulan sehingga kita tidak perlu repot untuk bolak balik cat ulang kuku.</Text>

                <View style={{
                    marginVertical: 20,
                }} /></ScrollView>

        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    judul: { color: colors.black, fontFamily: 'Alata-Regular', fontSize: 20, marginTop: 20, textAlign: "justify" },
    desc: { color: colors.black, fontFamily: 'Alata-Light', fontSize: 15, textAlign: "justify" }
})