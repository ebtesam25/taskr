import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon, Rating, AirbnbRating} from 'react-native-elements'
import { round } from 'react-native-reanimated';
import {ActivityIndicator, Avatar, Colors, RadioButton} from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';




  

export default function Helpeerate() {
    const navigation = useNavigation();
    let [step,setStep] = useState(1);
    const [done, setDone] = useState('');
    const [tip, setTip] = useState(0);
    return (
        <View style={styles.container}>
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={30} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:285}}><Icon name="infocirlceo" type="ant-design" size={25}></Icon></Text>
            </View>
            <View style={{ marginTop: '5%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, textAlign: 'center'
                }}>How was John Doe?</Text>
            </View>
            {step==1 &&
            <View style={{marginHorizontal:'10%', height:'50%', alignContent:'center', alignItems:'center'}}>
                 <Avatar.Image style={{backgroundColor:'#33CC99', marginTop:'5%'}} size={150}  source={require('../assets/addimg.png')} />
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Give John Doe a rating</Text>
                

                    <Rating
                    type='custom'
                    ratingTextColor="#33CC99"
                    ratingColor='#333366'
                    imageSize={30}
                    style={{ paddingVertical: 10 }}
                    />
                
             
            </View>}


            {step==2 &&
            <View style={{marginHorizontal:'10%', height:'50%',alignItems:'center'}}>
                 <Avatar.Image style={{backgroundColor:'#33CC99', marginTop:'5%'}} size={150} source={require('../assets/addimg.png')} />
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Did John Doe complete everything you asked for?</Text>
                

                    <View style={{flexDirection:'row'}}>
                    <RadioButton
                    value="yes"
                    status={ done === 'yes' ? 'checked' : 'unchecked' }
                    onPress={() => setDone('yes')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', color:'#33CC99', marginLeft:'5%',marginRight:'15%', marginTop:'1.5%'}}>Yes</Text>
                <RadioButton
                    value="no"
                    status={ done === 'no' ? 'checked' : 'unchecked' }
                    onPress={() => setDone('no')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', color:'#33CC99', marginLeft:'1%',marginRight:'15%', marginTop:'1.5%'}}>No</Text>
                <RadioButton
                    value="kinda"
                    status={ done === 'kinda' ? 'checked' : 'unchecked' }
                    onPress={() => setDone('kinda')}
                    color="#33CC99"
                />
                <Text style={{fontFamily:'Roboto', fontSize:15, fontWeight:'bold', color:'#33CC99', marginLeft:'1%',marginRight:'15%', marginTop:'1.5%'}}>Kinda</Text>
                        </View>
             
            </View>}
            {step==3 &&
            <View style={{marginHorizontal:'10%', height:'50%'}}>
                 <Avatar.Image style={{backgroundColor:'#33CC99', marginTop:'5%', alignSelf:'center'}} size={150} source={require('../assets/addimg.png')} />
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Did John Doe complete everything you asked for?</Text>
                

                    <View style={{}}>
                    <TextInput style={{backgroundColor:'#333366', color:'#66FFCC', paddingLeft:'5%', fontWeight:'bold', paddingTop:'5%', alignContent:'center',
                    width:'70%', alignSelf:'center', textAlignVertical:'top'}} placeholder="Comment (optional)" multiline numberOfLines={5} placeholderTextColor="#66FFCC"></TextInput>
                        </View>
             
            </View>}
            {step==4 &&
            <View style={{marginHorizontal:'10%', height:'50%'}}>
                 <Avatar.Image style={{backgroundColor:'#33CC99', marginTop:'5%', alignSelf:'center'}} size={150} source={require('../assets/addimg.png')} />
                <Text style={{fontWeight:'900', textAlign:'center', fontSize:17, marginTop:'15%'}}>Leave John Doe a tip</Text>
                

                    <View style={{}}>
                    <DropDownPicker
                        items={[
                            {label: '5%', value: 5,},
                            {label: '10%', value: 10,},
                            {label: '15%', value: 15,},
                        ]}
                        containerStyle={{height: 60, width:150, alignSelf:'center'}}
                        style={{backgroundColor: '#333366', color:'#66FFCC',marginTop:'10%', }}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setTip(item)}
                        placeholder={'Tip Percentage'}
                        placeholderStyle={{color:'#66FFCC'}}
                    />
                    <TextInput style={{backgroundColor:'#333366', color:'#66FFCC', paddingLeft:'5%', fontWeight:'bold', paddingTop:'5%', alignContent:'center',
                    width:'70%', alignSelf:'center', textAlignVertical:'top', marginTop:'10%'}} placeholder="Custom Tip"  placeholderTextColor="#66FFCC"></TextInput>
                        </View>
             
            </View>}



            {step<4 && <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '10%',  backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }}  onPress={()=>{setStep(step++)}}>Next</Text>}
             {step==4 && <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '10%',  backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }}  onPress={()=>{navigation.navigate('Helpeeratesubmit')}}>Submit</Text>}   
           {step==3 && <Text style={{
                    fontFamily: 'Roboto', fontWeight: '900', fontSize: 20, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '1.5%', marginBottom:'10%',  color:'#333366',
                    paddingVertical:'2.5%'
                }}  onPress={()=>{setStep(step++)}}>Skip</Text>}
            
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
        height: 200,
        width: 200,
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});