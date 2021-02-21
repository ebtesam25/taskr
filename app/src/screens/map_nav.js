import React, { useEffect, useState } from 'react';
import {
  FlatList,
  Image,
  SectionList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  Button, TouchableRipple
} from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons';
import colors from '../colors'

export default ({ text }) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between'}}>
      <View style={{ width: '80%', }}>
        <View style={{ width: '100%', backgroundColor: colors.green, padding: 10 }}>
          <View style={{ flexDirection: 'row' }}>
            <Icon style={{ alignSelf: 'center', color: colors.darkBlue }} name="arrow-upward" size={60}/>
            <View>
              <Text style={{paddingLeft: 10, fontSize: 40, fontWeight: 'bold', color: colors.darkBlue }}>1st street</Text>
              <Text style={{paddingLeft: 10, fontSize: 20, color: colors.darkBlue}} >towards 2nd Avenue</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: 'row', backgroundColor: colors.lightGreen, padding: 10, width: 100 }}>
          <Text style={{ fontSize: 20, color: colors.darkBlue }}>then</Text>
          <Icon style={{ alignSelf: 'center', marginLeft: 10, color: colors.darkBlue }} name="arrow-forward" size={20} />
        </View>
      </View>
      <View style={{ padding: 10, width: '100%', backgroundColor: colors.darkBlue }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.yellow }}>Grocery Store</Text>
          <Text style={{ fontSize: 30, fontWeight: 'bold', color: colors.yellow }}>14 min</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Text style={{ fontSize: 20, color: colors.yellow }}>Task 1</Text>
          <Text style={{ fontSize: 20, color: colors.yellow }}>8.7 mi - 5:30pm</Text>
        </View>
      </View>
    </View>
  )
}