import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Colors, RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';
import MapView, { Marker } from 'react-native-maps'





  

export default function Helpeemap() {
    const navigation = useNavigation();
    let [step,setStep] = useState(1);
    const [done, setDone] = useState('');
    const [tip, setTip] = useState(0);
    const [markers, setMarkers] = useState( [{"latlng":{
        "latitude": 25.76684817404011,
        "longitude": -80.19163068383932,
      }}]);
    
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={30} color="#33CC99" ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25} color="#33CC99"></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
             
            </View>
            
            <View style={styles.mapContainer}> 
                <MapView
                style={styles.map}
                initialRegion={{
                latitude: 25.7664362,
                longitude: -80.1915964,
                latitudeDelta: .005,
                longitudeDelta: .005
                }} 
               
                onPress={(e) => setMarkers({ markers: [{ latlng: e.nativeEvent.coordinate }] })}>
                {
                    markers.map((marker, i) => (
                        <MapView.Marker key={i} coordinate={marker.latlng} >
                        {console.log(marker.latlng)}
                        </MapView.Marker>
                        
                        
                    ))}
                    
            </MapView>
            </View>
            <View style={{position:'absolute', bottom:10, flex:1, paddingHorizontal:'5%'}}>
            <View style={{flexDirection:'row'}}>
                <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
                <View>
                    <Text style={{fontWeight:'900', fontSize:20, marginLeft:60, color:'#33CC99'}}>Year/Car Model</Text>
                    <Text style={{fontWeight:'bold', marginLeft:60, color:'#33CC99'}}>Car Make</Text>
                </View>
                <View>
                <Text style={{fontWeight:'bold',fontSize:30, marginLeft:60, textAlign:'right', right:20, color:'#33CC99'}}>43 mins</Text>
                <Text style={{fontWeight:'900',fontSize:30, marginLeft:20,textAlign:'right', right:20, color:'#33CC99'}}>6:20 PM Arrival</Text>
                </View>
            </View>
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