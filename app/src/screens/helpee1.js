import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';


const Item = ({ title, img }) =>{ 
    const navigation = useNavigation(); 
    return(
    <View style={{marginRight:40}}>
                <Image source={img} style={styles.header}></Image>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    
                }} onPress={()=>{navigation.navigate('Helpee2')}}>{title}</Text>
        </View>
  );}
  

export default function Helpee1() {
    const navigation = useNavigation();
    const DATA = [
        {
          id: '1',
          title: 'Groceries',
          img:require('../assets/grocery.jpg'),
        },
        {
          id: '2',
          title: 'Library Book',
          img:require('../assets/library.jpg'),

        },
      ];
    const renderItem = ({ item }) => (
        <Item title={item.title} img={item.img}/>
      );
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={30} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25}></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Pick a task</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:350, marginTop:'10%'}}>
           <ScrollView horizontal>
                <FlatList horizontal scrollEnabled={true} 
                centerContent
                style={{width:450, height:500, position:'relative'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}>
                
                
                </FlatList></ScrollView>
            </SafeAreaView>
            
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', position:'absolute', bottom:10}}>
            <Text onPress={()=>{navigation.navigate('Welcome')}} style={{marginTop:'12.5%', marginRight:'7.5%'}}><Icon name='arrowleft' type="ant-design" color='#323232' /></Text>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                        <Line x1="50" y1="0" x2="100" y2="0" stroke="#333366" strokeWidth="10"/>  
                </Svg>
                <Text onPress={()=>{navigation.navigate('Orienthree')}} style={{marginTop:'12.5%', marginLeft:'7.5%'}}><Icon name='arrowright' type="ant-design" color='#323232' /></Text>
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
        resizeMode: 'cover',
        alignSelf: 'center',
    },

});