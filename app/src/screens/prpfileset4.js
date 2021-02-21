import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Profileset4() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Picture</Text>
            </View>
            <View style={{flexDirection:'column', height:'40%', alignSelf:'center', marginTop:'20%'}}>
                <View>
                <Image source={require('../assets/addimg.png')} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '15%', color:'#333366', borderWidth:2, borderColor:'#333366'
                }} onPress={()=>{navigation.navigate('Profileallset')}}>Skip this step</Text>
                </View>
                
            </View>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }} onPress={()=>{navigation.navigate('Profileallset')}}>Next</Text>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="160" y2="0" stroke="#333366" strokeWidth="10"/>
                        <Line x1="160" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
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
        height: 300,
        width: 300,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});