import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Slider } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';



export default function Profileset2() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState('first');    
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop:'5%'
                }}>Profile setup</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'10%'
                }}>First Name</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:10, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>

                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Last Name</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:10, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'7.5%'
                }} placeholder="MM/DD/YYYY">Birthday</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:10, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>
                
                <RadioButton
                    value="male"
                    status={ checked === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('male')}
                />
                <RadioButton
                    value="female"
                    status={ checked === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('female')}
                />
               

              
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:10
                }} onPress={()=>{navigation.navigate('Locationpref')}}>Next</Text>
            </View>
           
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="80" y2="0" stroke="#074EE8" strokeWidth="10"/>
                        <Line x1="80" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
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