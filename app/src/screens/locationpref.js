import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button, Animated } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Slider } from 'react-native-elements';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';




export default function Locationpref() {
    const navigation = useNavigation();
    const [location, setLocation] = useState(null);
    const [coords, setCoords] = useState(null);
    const [radius, setRadius] = useState(50);

    useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
          
    
          let location = await Location.getCurrentPositionAsync({});
          setLocation(location);
          let c = {latitude: location.coords.latitude,longitude: location.coords.longitude}
          setCoords(c);
          console.log(c);
        })();
      }, []);
    if(location){  
    return (
        <View style={styles.container}>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', marginTop:'20%'
                }}>Location Preference</Text>
            <View style={styles.header}>
                <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: .005,
                    longitudeDelta: .005
                }} >
                     <MapView.Marker coordinate={{latitude: location.coords.latitude,longitude: location.coords.longitude}} >
                    </MapView.Marker>
                    <MapView.Circle
                        key = { (location.coords.latitude + location.coords.longitude).toString() }
                        center = { coords }
                        radius = { radius }
                        strokeWidth = { 2 }
                        strokeColor = { '#1a66ff' }
                        fillColor = { 'rgba(177,238,246,0.25)' }
                    />
                </MapView>
                <Slider
                style={{marginLeft:'-25%', marginRight:'20%'}}
                    maximumValue={500}
                    minimumValue={50}
                    value={radius}
                    onValueChange={(value) => setRadius(value)}
                    thumbStyle={{ height: 5, width: 5, backgroundColor: 'transparent' }}
                    thumbProps={{
                        children: (
                          <Icon
                            name="circle"
                            type="font-awesome"
                            size={10}
                            reverse
                            containerStyle={{ bottom: 20, right: 20 }}
                            color="#074EE8"
                          />
                        ),
                      }}
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', position:'absolute',zIndex:2, top:360, left:175}}>{radius.toFixed(0)} miles</Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: '100', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '15%', marginTop: '5%', backgroundColor:'#074EE8', color:'#FFF',
                    paddingVertical:'2.5%', borderRadius:10
                }} onPress={()=>{console.log('Here');}}>Next</Text>
                 
            </View>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                        <Line x1="150" y1="0" x2="200" y2="0" stroke="#074EE8" strokeWidth="10"/>  
                </Svg>
            </View>
        </View>
    );
                }
                else{
                    return(
                        <View>
                            <Text>LOADING</Text>
                        </View>
                    )
                }
   

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: '50%',
        width: '50%',
        marginTop: '10%',
        alignSelf: 'center'
    },
    map: {
        width:350,
        height:350,
        alignSelf:'center',
        borderWidth:2,
        borderColor:'#AAAAAA'
    }

});