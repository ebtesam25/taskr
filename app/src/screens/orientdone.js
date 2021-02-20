import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Orientdone() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Lorem Ipsum</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '15%', marginTop: '5%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:5
                }} onPress={()=>{navigation.navigate('Type')}}>Sign Up</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '25%', marginTop: '2.5%', color:'#074EE8', borderWidth:2,
                    paddingVertical:'2.5%', borderRadius:5, borderColor:'#074EE8'
                }}>Sign Up with Google</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '25%', marginTop: '2.5%', color:'#074EE8', borderWidth:2,
                    paddingVertical:'2.5%', borderRadius:5, borderColor:'#074EE8'
                }}>Sign Up with Text</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Text onPress={()=>{navigation.navigate('Orienthree')}} style={{marginTop:'12.5%', marginRight:'7.5%'}}><Icon name='arrowleft' type="ant-design" color='#323232' /></Text>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                        <Line x1="150" y1="0" x2="200" y2="0" stroke="#074EE8" strokeWidth="10"/>  
                </Svg>
            </View>
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