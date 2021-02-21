import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Colors} from 'react-native-paper';



export default function Payitf2() {
    const navigation = useNavigation();
    const [confirmed, setConfirmed] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setConfirmed(true)
        }, 5000);
        if(confirmed){
            setTimeout(() => {
                navigation.navigate('Helpee7');
            }, 3000);
        }
      });
    
    return (
        <View style={styles.container}>
            {!confirmed && 
            <View><ActivityIndicator animating={true} color={Colors.indigo400} size={100} style={{marginTop:'40%'}}/>
             <Text style={{fontSize:20, textAlign:'center', marginTop:'10%', color:'#333366', fontWeight:'bold'}}>Confirming payment...</Text></View>}
             {confirmed && 
            <View><Icon type="ant-design" name="check" size={100} color="#333366" style={{marginTop:'40%'}}></Icon>
             <Text style={{fontSize:20, textAlign:'center', marginTop:'10%', color:'#333366', fontWeight:'bold'}}>Thank you for paying it forward!</Text>
             <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '10%', marginBottom:'10%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }}  onPress={()=>{navigation.navigate('Helpeemap')}}>Home Page</Text></View>}
            
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
        height: 400,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});