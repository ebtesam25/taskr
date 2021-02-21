import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'


export default function Vehicletype() {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Vehicle Library</Text>
            </View>
            <View style={{flexDirection:'row', height:'30%', alignSelf:'center', marginTop:'10%', marginLeft:'5%'}}>
                <View>
                <Image source={{uri:'https://s1.1zoom.me/big0/214/BMW_2020_M550i_xDrive_Worldwide_White_background_586787_1280x685.jpg'}} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Profileset1')}}>Sedan</Text>
                </View>

                <View>
                <Image source={{uri:'https://www.newshub.co.nz/dam/form-uploaded-images-ordered/2019/08/19/lime-scooters-gen-3-CREDIT-LIME-190819-1120.jpg'}} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Profileset1')}}>Electric Scooter</Text>
                </View>
                

            </View>
            <View style={{flexDirection:'row', height:'30%', alignSelf:'center', marginTop:'1%', marginLeft:'5%'}}>
                <View>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNKCccT9-RDCEcbG919eUwbduXAejHfLNvTw&usqp=CAU'}} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Profileset3')}}>Bike</Text>
                </View>

                <View>
                <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5yH0IFl6ENDg8VxDYXu6A-ej-xbnv5QKWAg&usqp=CAU'}} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    marginHorizontal: '10%', marginTop: '2.5%'
                }} onPress={()=>{navigation.navigate('Vehicledoc')}}>Truck</Text>
                </View>
                

            </View>
            
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="40" y2="0" stroke="#333366" strokeWidth="10"/>
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
        height: 150,
        width: 150,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});