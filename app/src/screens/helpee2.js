import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Searchbar } from 'react-native-paper';



const Item = ({ title,img, distance, city, zip }) => {
    const navigation = useNavigation();
        return(
    <View style={{marginBottom:40, flexDirection:'row'}}>
                <Image source={img} style={styles.header}></Image>
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'center',
                    
                    
                }} onPress={()=>{navigation.navigate('Helpee3')}}>{title}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{distance}</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{city}</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{zip}</Text>
                </View>
        </View>
  );}
  

export default function Helpee2() {
    const navigation = useNavigation();
    const DATA = [
        {
          id: '1',
          title: 'Walmart',
          img: require('../assets/walmart.jpg'),
          distance:'1.2 mi',
          city:'San Francisco, CA',
          zip:'$$$',
        },
        {
          id: '2',
          title: 'Target',
          img: require('../assets/target.jpg'),
          distance:'2.3 mi',
          city:'San Francisco, CA',
          zip:'$$$',
        },
        {
            id: '3',
            title: 'Costco',
            img: {uri:'https://lh3.googleusercontent.com/proxy/snfvOuUD6l3IPOQxCn1TmXEB10oW5Mi7vAG2ASUOSrUvVXoDh-8sCaoO3R7S8A8RAgRD2OhMW5hELhqHKM-UhNQJMp37NYXXeKhU4CG0Q47qFo5DKEdHb8CJUMRxjw'},
            distance:'2.5 mi',
            city:'San Francisco, CA',
            zip:'$$',
          },
          {
            id: '4',
            title: 'Meijer',
            img:{uri:'https://pbs.twimg.com/profile_images/1189995810647396357/mknHwFTv_400x400.jpg'},
            distance:'3.2 mi',
            city:'San Francisco, CA',
            zip:'$$',

          },
          {
            id: '5',
            title: 'Giant Eagle',
            img:{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7yi9xOhV6iFNqFwhuK2xNtwLgSc_gTql-A&usqp=CAU'},
            distance:'5.1 mi',
            city:'San Francisco, CA',
            zip:'$$$',

          },
      ];
    const renderItem = ({ item , img, distance, city, zip}) =>
        (
        <Item title={item.title} img={item.img} distance={item.distance} city={item.city} zip={item.zip}/>
      );

    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon onPress={()=>{navigation.navigate('Payitf1')}} name="hearto" type="ant-design" size={30} ></Icon></Text>
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
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});