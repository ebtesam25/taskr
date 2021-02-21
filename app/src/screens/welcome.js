import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Welcome() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={{height:'100%', width:'100%'}} source={require('../assets/bg1.png')}>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Welcome to TaskR</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }}>TaskR is like a combination of Uber and Tinder for getting basic day to day things done. It maximizes a taskrunner's income by pooling available tasks nearby and ensures
                helpees receive the best service through a Tinder-like interface for finding a taskrunner.</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="50" y2="0" stroke="#333366" strokeWidth="10"/>
                        <Line x1="50" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                </Svg>
                <Text onPress={()=>{navigation.navigate('Orientwo')}} style={{marginTop:'12.5%', marginLeft:'7.5%'}}><Icon name='arrowright' type="ant-design" color='#323232' /></Text>
            </View></ImageBackground>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '50%',
        width: '50%',
        marginTop: '10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});