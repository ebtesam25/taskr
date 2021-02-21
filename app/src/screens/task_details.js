import React, { useEffect, useState } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { getPlace } from '../util'
import { Button } from 'react-native-paper';
import { testTask } from '../data/data'
import { FlatList } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskItem = ({ task }) => {
  const [place, setPlace] = useState(null)

  useEffect(() => {
    getPlace(task.placeId).then((place) => {
      if (place)
        setPlace(place)
    })
  }, [])

  if (!place) {
    // Render home
    return (
      <View>
        <Image style={taskItemStyles.image} source={require('../assets/img.jpg')}/>
        <View style={taskItemStyles.text}>
          <Text style={taskItemStyles.name}>House</Text>
          <Text style={{ textAlign: 'center' }}>address</Text>
        </View>
      </View>
    )
  }

  return (
    <View>
      <Image style={taskItemStyles.image} source={{uri: place.img}}/>
      <View style={taskItemStyles.text}>
        <Text style={taskItemStyles.name}>{place.name}</Text>
        <Text style={{ textAlign: 'center' }}>{place.address}</Text>
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

const Separator = () => {
  return (
    <Icon style={{ top: 35 }} name="keyboard-arrow-right" size={25} />
  )
}

export default ({ route, navigation }) => {
  let task
  if (!route.params) 
    task = testTask 
  else 
    task = route.params.task
  return (
    <View style={styles.container}>
      <View style={styles.map}>
        <Text> MAP goes here </Text>
      </View>
      <View style={styles.details}>
        <FlatList
          style={{ height: 50, marginVertical: 15 }}
          data={task.taskList}
          renderItem={({ item: task }) => <TaskItem task={task} />}
          keyExtractor={(item, i) => ''+i}
          horizontal={true}
          ItemSeparatorComponent={Separator}
        />
        {/*<View style={[styles.row, {marginTop: 20}]}>
          {
            task.taskList.map((t, i) => {
              if (t.type !== 'home') {
                return <TaskItem key={i} task={t} />
              }
              return null
            })
          }
        </View>*/}
        <View style={ styles.bottomRow }>
          <Text style={{ marginTop: 15, textAlign: 'center' }}>{ task.taskList.length } Tasks</Text>
          <Text style={{ marginBottom: 15, textAlign: 'center' }}>30 Items Total</Text>
          <Button mode="contained" onPress={() => { navigation.push('GroceryList', { task }) }}>
            Accept Order
          </Button>
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
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  bottomRow: {
    flex: 1,
    marginHorizontal: 70,
    marginBottom: 30,
    justifyContent: 'flex-end',
  },
})