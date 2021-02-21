import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Colors, RadioButton, Avatar, Modal, Provider, Portal} from 'react-native-paper';
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
         var eta = d/0.08;
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
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const [visible, setVisible] = React.useState(false);
    const [markers, setMarkers] = useState( [{"latlng":{
        "latitude": 37.71848102153304,
        "longitude":  -122.17900091737451
      }},{"latlng":{
        "latitude":  37.714493791188524,
        "longitude": -122.17783392424562
      }},{"latlng":{
        "latitude":  37.71848102153304,
        "longitude": -122.17900091737451,
      }}]);
      const [polym, setPolym] = useState( [ { latitude: 37.71848102153304, longitude: -122.17900091737451 },
        { latitude: 37.714493791188524, longitude: -122.17783392424562 },
        { latitude: 37.71848102153304, longitude: -122.17900091737451 },
        { latitude: 37.71294298194722,  longitude: -122.15505415619701 }]);
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
          setTimeout(() => {
              showModal();
          }, 6000);
        })();
      }, []);
      if(location){
    return (
        <View style={styles.container}>
            <Provider>  
                <Portal>
               
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
                latitude:37.71848102153304, 
                longitude: -122.17900091737451,
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

                        <Marker coordinate={markers[2].latlng} pinColor="green" >
                        {console.log(markers[2].latlng)}
                       <Icon type="font-awesome" name="location-arrow" size={50} color="#6BB75F"></Icon>
                        
                        </Marker> 
                    
                <Polyline
                    coordinates={polym}
                    strokeColor="#EF6565" 
                   
                    strokeWidth={6}
                    
                />  
                <Polyline
                    coordinates={[
                        { latitude: 37.714493791188524, longitude: -122.17783392424562 },
                        { latitude: 37.71848102153304, longitude: -122.17900091737451 },
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
                    <Text style={{fontWeight:'900', fontSize:20, marginLeft:20, color:'#33CC99'}}>John Doe</Text>
                    <Text style={{fontWeight:'bold', marginLeft:20, color:'#33CC99'}}>Davis St</Text>
                </View>
                <View>
                <Text style={{fontWeight:'bold',fontSize:30, marginLeft:150, textAlign:'right', right:20, color:'#33CC99'}}>{eta.toFixed(0)} mins</Text>
                <Text style={{fontWeight:'900',fontSize:30, marginLeft:40,textAlign:'right', right:20, color:'#33CC99'}}>6:20 PM Arrival</Text>
                </View>
            </View>
            </View>

            <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor:'#FFF', height:'40%', width:'70%', alignSelf:'center', borderRadius:10}}>
            <Text style={{color:'#000000', fontSize:20, fontWeight:'bold', textAlign:'center', textAlignVertical:'top', alignSelf:'center'}}>John Doe is closeby!</Text>
            <Text style={{color:'#546480', fontSize:12, fontWeight:'100', textAlign:'center', textAlignVertical:'top', alignSelf:'center'}}>Make sure you are close to the drop-off point.</Text>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '20%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', borderRadius:5,
                }} onPress={()=>{navigation.navigate('Helpee7')}}>Confirm</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '2.5%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', borderRadius:5,
                }} onPress={()=>{hideModal()}}>Not yet</Text>
                 

          </Modal>

           </Portal>
      </Provider> 
            
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
        position:'relative',
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