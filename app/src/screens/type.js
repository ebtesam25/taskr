import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Type() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Who are you?</Text>
            </View>
            <View style={{flexDirection:'row', height:'60%', alignSelf:'center', marginTop:'10%', marginLeft:'5%'}}>
                <View>
                <Image source={require('../assets/placeholder.png')} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Profileset1')}}>Helpee</Text>
                </View>

                <View>
                <Image source={require('../assets/placeholder.png')} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Profileset1')}}>Taskrunner</Text>
                </View>

            </View>
            
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="40" y2="0" stroke="#074EE8" strokeWidth="10"/>
                        <Line x1="40" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
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
        height: 400,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});