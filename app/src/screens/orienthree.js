import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Orienthree() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
             <ImageBackground style={{height:'100%', width:'100%'}} source={require('../assets/bg2.png')}>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Community</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed.</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Text onPress={()=>{navigation.navigate('Orientwo')}} style={{marginTop:'12.5%', marginRight:'7.5%'}}><Icon name='arrowleft' type="ant-design" color='#323232' /></Text>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                        <Line x1="100" y1="0" x2="150" y2="0" stroke="#333366" strokeWidth="10"/>  
                </Svg>
                <Text onPress={()=>{navigation.navigate('Orientdone')}} style={{marginTop:'12.5%', marginLeft:'7.5%'}}><Icon name='arrowright' type="ant-design" color='#323232' /></Text>
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