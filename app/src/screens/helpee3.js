import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Searchbar, Badge } from 'react-native-paper';



const Item = ({ price,img, title, brand }) => {
    const navigation = useNavigation();

    return(
    <View style={{marginBottom:40, marginRight:20}}>
         
                <Image source={img} style={styles.header}></Image>
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'left',
                    
                    
                }} onPress={()=>{navigation.navigate('Profileset1')}}>${price.toString()}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{brand}</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{title}</Text>
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
          price: 3.75,
          title:'Apples',
          brand:'Fuji',
          img:require('../assets/food/apple.jpg'),
        },
        {
          id: '2',
          price: 5.15,
          title:'Oranges',
          brand:'Paramount Citrus',
          img:require('../assets/food/orange.jpg'),

        },
        {
            id: '3',
            price: 3.14,
            title:'Strawberries',
            brand:'Blue Raven',
            img:{uri:'https://www.thermofisher.com/blog/food/wp-content/uploads/sites/5/2015/08/single_strawberry__isolated_on_a_white_background.jpg'},

          },
          {
            id: '4',
            price: 4.21,
            title:'Carrots',
            brand:'Organic',
            img:{uri:'https://media.healthyfood.com/wp-content/uploads/2019/07/The-lost-plot-growing-carrots-iStock-471680420.jpg'},

          },
          {
            id: '5',
            price: 3.99,
            title:'Cabbages',
            img:require('../assets/food/fruitpunch.jpg'),

          },
      ];
      const DATA2 = [
        {
          id: '1',
          price: 4.75,
          title:'All-purpose Flour',
          brand:'King Aurthur',
          img:{uri:'https://www.bobsredmill.com/media/catalog/product/cache/8646dbe0b50cb9bce8e481734e0f2ffe/2/5/2513s224_speltflour_f_2.jpg'},
        },
        {
          id: '2',
          price: 10.16,
          title:'Salted crackers',
          brand:'Nabisco',
          img:{uri:'https://images.heb.com/is/image/HEBGrocery/000138699'},

        },
        {
            id: '3',
            price: 3.14,
            title:'Fruit Punch',
            brand:'Capri Sun',
            img:require('../assets/food/fruitpunch.jpg'),

          },
          {
            id: '4',
            price: 1.21,
            title:'Coke',
            brand:'Cocacola',
            img:require('../assets/food/coke.jpg'),

          },
          {
            id: '5',
            price: 3.99,
            title:'Butter',
            img:{uri:'https://images.heb.com/is/image/HEBGrocery/000122119'},

          },
          {
            id: '6',
            price: 3.99,
            title:'Butter',
            img:{uri:'https://images.heb.com/is/image/HEBGrocery/000122119'},

          },
      ];
    const renderItem = ({ item }) =>
        (
        <Item price={item.price} img={item.img} title={item.title} brand={item.brand} />
      );

    return (
        <View style={styles.container}>
           
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={25} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:300}}><Icon name="shoppingcart" type="ant-design" size={20} onPress={()=>{navigation.navigate('Helpee4')}}></Icon></Text>
            </View>
            <Image source={require('../assets/walmart.jpg')} style={styles.header}></Image>
            <Searchbar
            style={{width:'90%', alignSelf:'center', marginTop:'5%'}}
            placeholder="Search the store for"
            onChangeText={onChangeSearch}
            value={searchQuery}
            />
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '900', fontSize: 22.5, paddingVertical:'1.5%', textAlign: 'left', paddingLeft:'10%', backgroundColor:'#33CC99'
                }}>Fresh Produce</Text>
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
                }}>Pantry Items</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:350, marginTop:'10%'}}>
                <FlatList horizontal scrollEnabled={true} 
                centerContent
                style={{width:500, height:500, position:'relative'}}
                data={DATA2}
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