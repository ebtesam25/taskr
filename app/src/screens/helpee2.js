import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Searchbar } from 'react-native-paper';



const Item = ({ title }) => {
    const navigation = useNavigation();
        return(
    <View style={{marginBottom:40, flexDirection:'row'}}>
                <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    
                    
                }} onPress={()=>{navigation.navigate('Helpee3')}}>{title}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Callout 1</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Callout 2</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Callout 3</Text>
                </View>
        </View>
  );}
  

export default function Helpee2() {
    const navigation = useNavigation();
    const DATA = [
        {
          id: '1',
          title: 'Store 1',
        },
        {
          id: '2',
          title: 'Store 2',
        },
        {
            id: '3',
            title: 'Store 3',
          },
          {
            id: '4',
            title: 'Store 4',
          },
          {
            id: '5',
            title: 'Store 5',
          },
      ];
    const renderItem = ({ item }) =>
        (
        <Item title={item.title} />
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
                }}>Pick Your Store</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:350, marginTop:'10%', marginLeft:'10%'}}>
                <FlatList  scrollEnabled={true} 
                centerContent
                style={{width:450, height:500, position:'relative'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}>
                
                
                </FlatList>
            </SafeAreaView>
            
            
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
        height: 100,
        width: 100,
        borderWidth:2,
        borderColor:'#000',
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});