import React,{ useState } from 'react';
import { StyleSheet, Text, View, Image, Button} from 'react-native';
import AppLoading from 'expo-app-loading';


export default function Welcome (){
    return (
    <View style={styles.container}>
      <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
      <View style={{ marginTop:'10%'}}>
        <Text>Welcome to TaskR</Text>
      </View>
    </View>
    );

  }

const styles = StyleSheet.create({
  container: {
    height:'100%',
    position:'relative',
    backgroundColor:'#000'
  },
  header:{
    height:'30%',
    width:'40%',
    marginTop:'50%',
    resizeMode:'contain',
    alignSelf:'center'
  },
  
});