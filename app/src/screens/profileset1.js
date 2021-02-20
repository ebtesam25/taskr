import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Slider } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Profileset1() {
    const navigation = useNavigation();
    const [error, setError] = useState(false);
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop:'5%'
                }}>Profile setup</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'10%'
                }}>Email</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>

                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Confirm Email</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'7.5%'
                }}>Password</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>
                
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Confirm Password</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }} ></TextInput>

              
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:5
                }} onPress={()=>{navigation.navigate('Profileset2')}}>Next</Text>
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
        height: '50%',
        width: '50%',
        marginTop: '10%',
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});