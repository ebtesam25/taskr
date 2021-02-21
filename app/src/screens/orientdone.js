import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Orientdone() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <ImageBackground style={{height:'100%', width:'100%'}} source={require('../assets/bg3.png')}>
            <Image source={require('../assets/logo.png')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Ready to join?</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '15%', marginTop: '5%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', width:'60%', alignSelf:'center'
                }} onPress={()=>{navigation.navigate('Type')}}>Sign Up</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '25%', marginTop: '2.5%', color:'#333366', borderWidth:2,
                    paddingVertical:'2.5%', borderRadius:0, borderColor:'#333366', width:'60%', alignSelf:'center'
                }}>Sign Up with Google</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '25%', marginTop: '2.5%', color:'#333366', borderWidth:2,
                    paddingVertical:'2.5%', borderRadius:0, borderColor:'#333366', width:'60%', alignSelf:'center'
                }} onPress={()=>{navigation.navigate('Login')}}>Already have an account? Sign In</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Text onPress={()=>{navigation.navigate('Orienthree')}} style={{marginTop:'12.5%', marginRight:'7.5%'}}><Icon name='arrowleft' type="ant-design" color='#323232' /></Text>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                        <Line x1="150" y1="0" x2="200" y2="0" stroke="#333366" strokeWidth="10"/>  
                </Svg>
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