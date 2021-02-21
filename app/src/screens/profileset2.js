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
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop:'5%', color:'#333366'
                }}>Profile Setup</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'10%'
                }}>First Name</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"></TextInput>

                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Last Name</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"></TextInput>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'7.5%'
                }} >Birthday</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"placeholder="MM/DD/YYYY"></TextInput>
               
                <View style={{flexDirection:'row', marginLeft:'10%', marginTop:'10%'}}>
                <RadioButton
                    value="male"
                    status={ checked === 'male' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('male')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, marginLeft:'1%', marginTop:'1.5%', fontWeight:'bold', color:'#33CC99'}}>Male</Text></View>
                <View style={{flexDirection:'row', marginLeft:'10%'}}>
                <RadioButton
                    value="female"
                    status={ checked === 'female' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('female')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, marginLeft:'1%', marginTop:'1.5%', fontWeight:'bold', color:'#33CC99'}}>Female</Text></View>
                <View style={{flexDirection:'row', marginLeft:'10%'}}>
                <RadioButton
                    value="other"
                    status={ checked === 'other' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('other')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, marginLeft:'1%', marginTop:'1.5%', fontWeight:'bold', color:'#33CC99'}}>Other</Text></View>
               

              
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }} onPress={()=>{navigation.navigate('Profileset3')}}>Next</Text>
            </View>
           
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="80" y2="0" stroke="#333366" strokeWidth="10"/>
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