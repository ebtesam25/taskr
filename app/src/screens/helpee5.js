import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Colors} from 'react-native-paper';




  

export default function Helpee5() {
    const navigation = useNavigation();
   
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={30} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25}></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Task Runners</Text>
            </View>
            <View style={{marginHorizontal:'10%', height:'50%', borderWidth:5, borderColor:'#333366'}}>
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:25, marginTop:'15%'}}>John Doe</Text>
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Overall Rating</Text>
                

                    <Rating
                    type='custom'
                    ratingTextColor="#33CC99"
                    ratingColor='#33CC99'
                    readonly
                    style={{ paddingVertical: 10 }}
                    />
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Highly Rated In</Text>
                <Text style={{fontWeight:'bold', backgroundColor:'#33CC99', width:'60%', textAlign:'center', fontSize:15, alignSelf:'center', height:30, textAlignVertical:'center', marginTop:'2.5%', borderRadius:20}}>Fresh Produce Selection</Text>
                <Text style={{fontWeight:'bold', backgroundColor:'#33CC99', width:'55%', textAlign:'center', fontSize:15, alignSelf:'center', height:30, textAlignVertical:'center', paddingHorizontal:'5%', marginTop:'2.5%', borderRadius:20}}>Suggeting Alternatives</Text>

             
            </View>
            <View style={{flexDirection:'row', alignSelf:'center', marginHorizontal:'10%', marginTop:'15%'}}>
                <Icon name="x-circle" type="feather" size={100} style={{marginRight:'40%'}}></Icon>
                <Icon name="checkcircleo" type="ant-design" size={100} onPress={()=>{navigation.navigate('Helpee6')}}></Icon>

            </View>
            
            
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        flex:1,
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: 400,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});