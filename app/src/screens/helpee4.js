import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Button, ScrollView, SafeAreaView, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Svg, { Line } from 'react-native-svg';
import { Icon } from 'react-native-elements'
import { round } from 'react-native-reanimated';
import { Searchbar, Badge, Modal, Portal, Provider } from 'react-native-paper';
import DropDownPicker from 'react-native-dropdown-picker';


     

const Item = ({ title }) => {
    const navigation = useNavigation();
    const [quantity,setQuantity] = useState();
    return(
    <View style={{marginBottom:40, marginRight:20, flexDirection:'row'}}>
         
                <Image source={require('../assets/img.jpg')} style={styles.header}></Image>
                <View style={{marginLeft:'5%',}} >
                    <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 25, textAlign: 'left',
                    
                    
                }} onPress={()=>{navigation.navigate('Profileset1')}}>${title.toString()}</Text>
                
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Brand</Text>
                    <Text style={{fontFamily:'Roboto', fontSize:15}}>Item name</Text>
                    
                </View>
                <DropDownPicker
                        items={[
                            {label: '1', value: 1,},
                            {label: '2', value: 2,},
                            {label: '3', value: 3,},
                        ]}
                        defaultValue={quantity}
                        containerStyle={{height: 40, width:100, marginLeft:'10%'}}
                        style={{backgroundColor: '#333366', color:'#66FFCC'}}
                        itemStyle={{
                            justifyContent: 'flex-start'
                        }}
                        dropDownStyle={{backgroundColor: '#fafafa'}}
                        onChangeItem={item => setQuantity(item)}
                        placeholder={'Quantity'}
                        placeholderStyle={{color:'#66FFCC'}}
                    />
                     
        </View>
  );}
  

export default function Helpee4() {
    const navigation = useNavigation();
    const [searchQuery, setSearchQuery] = useState('');
    const [total, setTotal] = useState(0);
    const onChangeSearch = query => setSearchQuery(query);
    const [visible, setVisible] = React.useState(false);
  
    const showModal = () => setVisible(true);
    const hideModal = () => setVisible(false);
    const DATA = [
        {
          id: '1',
          title: 3.75,
        },
        {
          id: '2',
          title: 10.10,
        },
        {
            id: '3',
            title: 3.14,
          },
          {
            id: '4',
            title: 40.21,
          },
          {
            id: '5',
            title: 3.99,
          },
      ];
    const renderItem = ({ item }) =>
        (
        <Item title={item.title} />
      );

    return (
        <Provider  style={styles.container}>
        <Portal> 
           
            <View style={{marginTop:'10%', marginHorizontal:'7.5%', flexDirection:'row'}}>
                <Text><Icon name="hearto" type="ant-design" size={25} ></Icon></Text>
                <Text style={{textAlign:'right', marginLeft:300}}><Icon name="shoppingcart" type="ant-design" size={20}></Icon></Text>
            </View>
           
            <View style={{ marginTop: '5%', flexDirection:'row', width:'100%' }}>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, paddingVertical:'1.5%', textAlign: 'left', paddingLeft:'10%',
                }}>Your Cart</Text>
                <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 40, paddingVertical:'1.5%', textAlign: 'right', paddingLeft:'10%', marginLeft:'20%',
                }}>${total}</Text>
            </View>
            <SafeAreaView style={{ position:'relative', flex:1, alignSelf:'center', width:360, marginTop:'10%'}}>
                <FlatList  scrollEnabled={true} 
                centerContent
                style={{width:500, height:500, position:'relative'}}
                data={DATA}
                renderItem={renderItem}
                keyExtractor={item => item.id}>
                
                
                </FlatList>
            </SafeAreaView>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 20, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '10%', marginBottom:'10%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%'
                }}  onPress={()=>{showModal()}}>Confirm Order</Text>
           
          
          <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={{backgroundColor:'#FFF', height:'40%', width:'70%', alignSelf:'center', borderRadius:10}}>
            <Text style={{color:'#000000', fontSize:20, fontWeight:'bold', textAlign:'center', textAlignVertical:'top', alignSelf:'flex-start'}}>Order confirmed. Want to add another task?</Text>
            <Text style={{color:'#546480', fontSize:12, fontWeight:'100', textAlign:'center', textAlignVertical:'top', alignSelf:'flex-start'}}>Either add another task for the task runner or skip to chosing your person.</Text>
            <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '20%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', borderRadius:5,
                }} onPress={()=>{navigation.navigate('Helpee5')}}>Add another task</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '2.5%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', borderRadius:5,
                }} onPress={()=>{navigation.navigate('Helpee5')}}>Choose task runner</Text>
                 <Text style={{
                    fontFamily: 'Roboto', fontWeight: 'bold', fontSize: 15, textAlign: 'center',
                    marginHorizontal: '20%', marginTop: '2.5%', backgroundColor:'#33CC99', color:'#333366',
                    paddingVertical:'2.5%', borderRadius:5,
                }} onPress={()=>{navigation.navigate('Helpee5')}}>Send task to someone</Text>

          </Modal>
        </Portal>
      </Provider>
            
      
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
        borderWidth:2,
        borderColor:'#000',
        resizeMode: 'contain',
        alignSelf: 'center',
    },

});