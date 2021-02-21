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
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { testTask } from '../data/data'

export default ({ text }) => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
      <View style={{ }}>
        <Icon style={{ alignSelf: 'center', paddingBottom: 20 }} name="check" size={150} color="green" />
        <Text style={{ fontSize: 20, textAlign: 'center' }}>{text}</Text>
      </View>
    </View>
  )
}