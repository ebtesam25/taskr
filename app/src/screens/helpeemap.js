import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Colors, RadioButton, Avatar} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker, Polygon, Polyline } from 'react-native-maps'
import * as Location from 'expo-location';




  

export default function Helpeemap() {
    const haversine =()=>{
        Number.prototype.toRad = function() {
            return this * Math.PI / 180;
         }
         
         var latitude2 = polym[0].latitude; 
         var longitude2 = polym[0].longitude; 
         var latitude1 = polym[1].latitude; 
         var longitude1 = polym[1].longitude; 
         
         var R = 6371;
         var x1 = latitude1-latitude2;
         var dist_latitude = x1.toRad();  
         var x2 = longitude2-longitude1;
         var dist_longtitude = x2.toRad();  
         var a = Math.sin(dist_latitude/2) * Math.sin(dist_latitude/2) + 
                         Math.cos(latitude1.toRad()) * Math.cos(latitude2.toRad()) * 
                         Math.sin(dist_longtitude/2) * Math.sin(dist_longtitude/2);  
         var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
         var d = R * c; 
         var eta = d/0.8;
         console.log(d,eta);
         setEta(eta);
    }
    const navigation = useNavigation();
    let [step,setStep] = useState(1);
    let [eta,setEta] = useState(1);
    const [location, setLocation] = useState(null);
    const [coords, setCoords] = useState(null);
    const [done, setDone] = useState('');
    const [tip, setTip] = useState(0);
    const [markers, setMarkers] = useState( [{"latlng":{
        "latitude": 37.7948605,
        "longitude": -122.4596065,
      }},{"latlng":{
        "latitude": 37.8025259,
        "longitude": -122.4311431,
      }},{"latlng":{
        "latitude": 37.8025159,
        "longitude": -122.4131431,
      }}]);
      const [polym, setPolym] = useState( [ { latitude: 37.7734153, longitude: -122.4577787 },
        { latitude: 37.7948605, longitude: -122.4596065 },
        { latitude: 37.8025259, longitude: -122.4311431 },
        { latitude: 37.8025159, longitude: -122.4131431 }]);
      useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          let c = {"latitude": location.coords.latitude,"longitude": location.coords.longitude}
          console.log(polym);
          haversine();
        })();
      }, []);
      if(location){
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text onPress={()=>{navigation.navigate('Helpee5')}}><Icon name="hearto" type="ant-design" size={30} color="#33CC99" ></Icon></Text>
                <Text onPress={haversine} style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25} color="#33CC99"></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
             
            </View>
            
            <View style={styles.mapContainer}> 
                <MapView
                style={styles.map}
                initialRegion={{
                latitude:37.7734152,
                longitude: -122.4577787,
                latitudeDelta: .005,
                longitudeDelta: .005
                }} 
               
               >
                {
                    markers.map((marker, i) => (
                        <Marker pinColor="green" key={i} coordinate={marker.latlng} >
                        {console.log(marker.latlng)}
                        </Marker>
                        
                        
                    ))}

                 <Marker coordinate={markers[2].latlng} pinColor="red" >
                        {console.log(markers[2].latlng)}
                       
                        
                        </Marker>   

                        <Marker coordinate={markers[1].latlng} pinColor="green" >
                        {console.log(markers[1].latlng)}
                       <Icon type="font-awesome" name="location-arrow" size={50} color="#6BB75F"></Icon>
                        
                        </Marker> 
                    
                <Polyline
                    coordinates={polym}
                    strokeColor="#EF6565" 
                   
                    strokeWidth={6}
                    
                />  
                <Polyline
                    coordinates={[
                        { latitude: 37.7734153, longitude: -122.4577787 },
                        { latitude: 37.7948605, longitude: -122.4596065 },
                        { latitude: 37.8025259, longitude: -122.4311431 }
                    ]}
                    strokeColor="#6BB75F" 
                    strokeWidth={6}
                    
                />   
            </MapView>
            </View>
            <View style={{position:'absolute', bottom:10, flex:1, paddingHorizontal:'5%'}}>
            <View style={{flexDirection:'row'}}>
            <Avatar.Image style={{backgroundColor:'#33CC99'}} size={50} source={require('../assets/addimg.png')} />
                <View>
                    <Text style={{fontWeight:'900', fontSize:20, marginLeft:20, color:'#33CC99'}}>Year/Car Model</Text>
                    <Text style={{fontWeight:'bold', marginLeft:20, color:'#33CC99'}}>Car Make</Text>
                </View>
                <View>
                <Text style={{fontWeight:'bold',fontSize:30, marginLeft:60, textAlign:'right', right:20, color:'#33CC99'}}>{eta.toFixed(0)} mins</Text>
                <Text style={{fontWeight:'900',fontSize:30, marginLeft:20,textAlign:'right', right:20, color:'#33CC99'}}>6:20 PM Arrival</Text>
                </View>
            </View>
            </View>

           
            
        </View>
    );}
    else{
        return(
            <View><ActivityIndicator/></View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width:'100%',
        flex:1,
        position: 'relative',
        backgroundColor: '#333366'
    },
    header: {
        height: 50,
        width: 50,
        resizeMode: 'contain',
        alignSelf: 'center',
        position:'absolute',
    },
    mapContainer: {
        height: 600,
        width:'100%',
        alignSelf:'center',
        position:'absolute',
        zIndex:1,
        top:'12%',
        backgroundColor:'#F2F3F5',
        alignContent:'center',
      },
      map: {
        height: '92%',
        borderRadius:100,
        width:'90%',
        margin:'5%',
        alignSelf:'center',
        
      },

});