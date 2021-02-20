import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Slider } from 'react-native-elements'
import { TextInput } from 'react-native-gesture-handler';


export default function Login() {
    const navigation = useNavigation();
    const [error, setError] = useState(false);
    return (
        <View style={styles.container}>
            <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Email or username</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>

                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left', marginHorizontal:'10%', color:'#767676'
                }}>Password</Text>
                <TextInput style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'left',
                    marginHorizontal: '10%', marginTop: '1.5%', borderColor:'#AAAAAA', color:'#000',
                    paddingVertical:'2.5%', borderRadius:5, borderWidth:2, paddingLeft:'5%'
                }}></TextInput>
                {!error &&
                <Text style={{
                    color:'#EB5757', fontFamily:'Roboto', fontSize:15, textAlign:'center'
                }}>Wrong username or password.</Text>}
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '5%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:5
                }} onPress={()=>{navigation.navigate('Locationpref')}}>Login</Text>
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Text style={{
                fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                marginHorizontal: '20%', marginTop: '5%', color:'#074EE8'
            }}>Forgot my password</Text>
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