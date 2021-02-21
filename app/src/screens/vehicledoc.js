import React, { useState, useEffect, useContext  } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { TouchableHighlight, TouchableOpacity } from 'react-native-gesture-handler';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';

export default function Vehicledoc() {
    const navigation = useNavigation();
    const [image, setImage] = useState(null);
    const [res, setRes] = useState('');
    const CLOUDINARY_URL = 'https://api.cloudinary.com/v1_1/diywehkap/image/upload';
    useEffect(() => {
        (async () => {
          if (Platform.OS !== 'web') {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
              alert('Sorry, we need camera roll permissions to make this work!');
            }
          }
        })();
      }, []);
    
      const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [9, 12],
          quality: 1,
          base64: true
        });
        let base64Img = `data:image/jpg;base64,${result.base64}`;
        let data = {
            "file": base64Img,
            "upload_preset": "hm4fkyir",
            }
    
            fetch(CLOUDINARY_URL, {
            body: JSON.stringify(data),
            headers: {
                'content-type': 'application/json'
            },
            method: 'POST',
            }).then(async r => {
            let data = await r.json()
            setRes(data.secure_url)
            console.log(res)
           
            }).catch(err => console.log(err))

        if (!result.cancelled) {
          setImage(result.uri);
        }
      };
 


        

        
    
    return (
        <View style={styles.container}>
            <View style={{ marginTop: '10%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center', color:'#333366'
                }}>Vehicle Registration</Text>
            </View>
            <View style={{flexDirection:'column', height:'40%', alignSelf:'center', marginTop:'10%', marginBottom:'25%'}}>
                <View>
               {!image && <TouchableOpacity onPress={pickImage}><Image source={require('../assets/camera.png')} style={styles.header}></Image></TouchableOpacity>}
                {image && <Image source={{ uri: image }} style={{ width: 300, height: 500, resizeMode:'contain' }} />}
                </View>
                
            </View>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '15%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%',
                }} onPress={()=>{navigation.navigate('Profileset4')}}>Next</Text>
            <View style={{display:'flex', flexDirection:'row', alignSelf:'center', marginLeft:'10%'}}>
            <Svg height="20" width="200"
                    style={{
                        alignSelf: 'center', marginTop: '15%'
                    }}>
                        <Line x1="0" y1="0" x2="160" y2="0" stroke="#333366" strokeWidth="10"/>
                        <Line x1="160" y1="0" x2="200" y2="0" stroke="#EEEEEE" strokeWidth="10" />
                </Svg>
            </View>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        position: 'relative',
        backgroundColor: '#FFF'
    },
    header: {
        height: 100,
        width: 100,
        resizeMode: 'contain',
        alignSelf: 'center'
    },

});