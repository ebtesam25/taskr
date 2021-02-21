import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Searchbar, Badge } from 'react-native-paper';



const Item = ({ title }) => {
    const navigation = useNavigation();

    return(
    <View style={{marginBottom:40, marginRight:20}}>
         
                <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'left',
                    
                    
                }} onPress={()=>{navigation.navigate('Profileset1')}}>${title.toString()}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Brand</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Item name</Text>
                </View>
        </View>
  );}
  

export default function Helpee3() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = React.useState('');
    const onChangeSearch = query => setSearchQuery(query);
    const DATA = [
        {
          id: '1',
          title: 3.75,
        },
        {
          id: '2',
          title: 10.10,
        },
        {
            id: '3',
            title: 3.14,
          },
          {
            id: '4',
            title: 40.21,
          },
          {
            id: '5',
            title: 3.99,
          },
      ];
    const renderItem = ({ item }) =>
        (
        <Item title={item.title} />
      );

    return (
        <View style={styles.container}>
           
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={25} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:300}}><Icon name="shoppingcart" type="ant-design" size={20} onPress={()=>{navigation.navigate('Helpee4')}}></Icon></Text>
            </View>
            <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
            <Searchbar
            style={{width:'90%', alignSelf:'center', marginTop:'5%'}}
            placeholder="Search the store for"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '900', fontSize: 22.5, paddingVertical:'1.5%', textAlign: 'left', paddingLeft:'10%', backgroundColor:'#33CC99'
                }}>Food Category</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:360, marginTop:'10%'}}>
                <FlatList horizontal scrollEnabled={true} 
                centerContent
                style={{width:500, height:500, position:'relative'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}>
                
                
                </FlatList>
            </SafeAreaView>

            <View style={{ marginTop: '2.5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '900', fontSize: 22.5, paddingVertical:'1.5%', textAlign: 'left', paddingLeft:'10%', backgroundColor:'#33CC99'
                }}>Food Category</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:350, marginTop:'10%'}}>
                <FlatList horizontal scrollEnabled={true} 
                centerContent
                style={{width:500, height:500, position:'relative'}}
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