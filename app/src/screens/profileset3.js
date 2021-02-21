import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Slider } from 'react-native-elements'
import { RadioButton } from 'react-native-paper';



export default function Profileset3() {
    const navigation = useNavigation();
    const [checked, setChecked] = useState('first');    
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop:'5%'
                }}>Payment Method</Text>
                 <View style={{flexDirection:'row', marginLeft:'7.5%', marginTop:'10%'}}>
                <RadioButton
                    value="visa"
                    status={ checked === 'visa' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('visa')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', marginLeft:'1%', marginTop:'1.5%', color:'#33CC99'}}>VISA card</Text></View>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Card Number</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"></TextInput>

                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Name on card</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"></TextInput>


                <View style={{flexDirection:'row', marginLeft:'7.5%'}}>
                <View>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'7.5%'
                }} placeholder="MM/DD/YYYY">CVV</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99" placeholder="XXX"></TextInput></View>
                <View>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'7.5%'
                }} placeholder="MM/DD/YYYY">Expiration</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99" placeholder="MM/YYYY"></TextInput></View>
               </View>
               <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676', marginTop:'1.5%'
                }} >Zip code</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', backgroundColor:'#333366', color:'#33CC99',
                    paddingVertical:'2.5%',  borderWidth:2, paddingLeft:'5%'
                }} placeholderTextColor="#33CC99"></TextInput>
                <View style={{flexDirection:'row', marginLeft:'10%', marginTop:'10%'}}>
                <RadioButton
                    value="bank"
                    status={ checked === 'bank' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('bank')}
                    color="#074EE8"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', marginLeft:'1%', marginTop:'1.5%', color:'#33CC99'}}>Direct Bank Transfer</Text></View>
                <View style={{flexDirection:'row', marginLeft:'10%'}}>
                <RadioButton
                    value="cheque"
                    status={ checked === 'cheque' ? 'checked' : 'unchecked' }
                    onPress={() => setChecked('cheque')}
                    color="#074EE8"
                />
               <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', marginLeft:'1%', marginTop:'0.5%', color:'#33CC99'}}>Check By Mail</Text></View>
               

              
               <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }} onPress={()=>{navigation.navigate('Profileset4')}}>Next</Text>
            </View>
           
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="120" y2="0" stroke="#333366" strokeWidth="10"/>
                        <Line x1="120" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
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