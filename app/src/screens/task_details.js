import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { testTask } from '../data/data'
import { getPlace } from '../util'


const TaskItem = ({ task }) => {
  const [place, setPlace] = useState(null)

  useEffect(() => {
    getPlace(task.placeId).then((place) => {
      console.log('stop it!')
      if (place)
        setPlace(place)
    })
  }, [])

  if (!place)
    return null

  return (
    <View>
      <Image style={taskItemStyles.image} source={{uri: place.img}}/>
      <View style={taskItemStyles.text}>
        <Text style={taskItemStyles.name}>{place.name}</Text>
        <Text>{place.address}</Text>
      </View>
    </View>
  )
}

const taskItemStyles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 100,
    height: 100,
    borderRadius: 100/2,
    borderWidth: 2,
    borderColor: 'lightgray',
  },
  text: {
    width: 175
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
})

export default ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Text> MAP goes here </Text>
      </View>
      <View style={styles.details}>
        <View style={styles.row}>
          <TaskItem task={testTask.taskList[0]}/>
          <TaskItem task={testTask.taskList[1]}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  details: {
    flex: 1,
    backgroundColor: 'white',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
})