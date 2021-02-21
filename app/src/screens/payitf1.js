import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Avatar, Portal, Searchbar, Provider, Modal } from 'react-native-paper';



const Item = ({ title,img, distance, city, amount }) => {
    const navigation = useNavigation();
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
        return(
    <View style={{marginBottom:40, flexDirection:'row'}}>
      
                 <Avatar.Image style={{backgroundColor:'#33CC99'}} size={75} source={require('../assets/addimg.png')} />
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'left',
                    
                    
                }} onPress={()=>{navigation.navigate('Helpee3')}}>{title}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{distance}</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>{city}</Text>
                    
                </View>
               
                <Text style={{fontFamily:'Roboto', fontSize:25, fontWeight:'bold', textAlign:'right',position:'absolute', left:270}}>${amount}</Text>
                <View style={{flexDirection:'column', marginTop:'5%', alignSelf:'flex-end', position:'absolute', left:250}}>
                    <Text style={{fontWeight:'bold', color:'#FFFF99', backgroundColor:'#333366', paddingHorizontal:'2.5%', width:100, textAlign:'center'}} onPress={()=>{showModal()}}>Pay It Forward</Text>
                </View>
                
       </View>
  );}
  

export default function Payitf1() {
    const navigation = useNavigation();
    

    const DATA = [
        {
          id: '1',
          title: 'Jane',
          img: require('../assets/walmart.jpg'),
          distance:'Groceries',
          city:'Drycleaning',
          amount:30.51
          
        },
        {
          id: '2',
          title: 'Lillia',
          img: require('../assets/target.jpg'),
          distance:'Drycleaning',
          city:'Gift shopping',
          amount:20.14

        },
        {
            id: '3',
            title: 'Patrick',
            img: {uri:'https://lh3.googleusercontent.com/proxy/snfvOuUD6l3IPOQxCn1TmXEB10oW5Mi7vAG2ASUOSrUvVXoDh-8sCaoO3R7S8A8RAgRD2OhMW5hELhqHKM-UhNQJMp37NYXXeKhU4CG0Q47qFo5DKEdHb8CJUMRxjw'},
            distance:'Library Book',
            amount:5.00

          },
          {
            id: '4',
            title: 'Gloria',
            img:{uri:'https://pbs.twimg.com/profile_images/1189995810647396357/mknHwFTv_400x400.jpg'},
            distance:'Groceries',
            amount:60.10


          },
          {
            id: '5',
            title: 'Elaine',
            img: {uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy7yi9xOhV6iFNqFwhuK2xNtwLgSc_gTql-A&usqp=CAU'},
            distance:'Groceries',
            city:'Library book',
            amount:12.05


          },
      ];
    const renderItem = ({ item , img, distance, city, amount}) =>
        (
        <Item title={item.title} img={item.img} distance={item.distance} city={item.city} amount={item.amount}/>
      );

    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon  name="hearto" type="ant-design" size={30} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25}></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>Pay It Forward</Text>
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