import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Profileallset() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Complete/Welcome!</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum tempus egestas sed sed.</Text>
            </View>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '10%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:5
                }} onPress={()=>{navigation.navigate('Profileset2')}}>Start Running Tasks</Text>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#074EE8" strokeWidth="10"/>
                        
                </Svg>
                
         
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