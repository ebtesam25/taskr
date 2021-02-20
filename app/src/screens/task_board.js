import React, { useState } from 'react';
import { 
  FlatList,
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const TaskItems = ({ taskList }) => {
  const iconNames = {
    shopping: 'shopping-cart',
    library: 'menu-book',
    home: 'home',
  }

  return (
    <View style={taskItemStyles.container}>
    {
      taskList.map((task, i) => {
        return (
          <React.Fragment key={i}>
            { i !== 0 && <Icon style={taskItemStyles.icon} name="keyboard-arrow-right" size={20} /> }
            <Icon style={taskItemStyles.icon} name={iconNames[task]} size={25} />
          </React.Fragment>
        )
      })  
    }
    </View>
  );
}

const taskItemStyles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    marginRight: 20,
    alignItems: 'center',
  },
  icon: {
    paddingRight: 3,
  },
})

const Task = ({ payment, taskList, timeEst, style }) => {
  return (
    <TouchableHighlight onPress={() => console.log('wat')}>
      <View style={[taskStyles.container, style]}>
        <View style={taskStyles.row}>
          <TaskItems taskList={taskList} />
          <Text style={taskStyles.price}>${payment}</Text>
        </View>
        <View style={[taskStyles.row, taskStyles.shrink]}>
          <Text style={taskStyles.numTasks}>{ taskList.length + ' tasks' }</Text>
          <Text style={taskStyles.timeEst}>{ `~${timeEst} min` }</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const taskStyles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: 'white',
    height: 'auto', 
    padding: 15,
    elevation: 5,
  },
  row: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shrink: {
    flex: 0,
    flexShrink: 1,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  numTasks: {

  },
  timeEst: {},
});

// do we need the homes? Multiple homes for different people?
const testTask = {
  payment: 20,
  taskList: [
    'shopping',
    'library',
    'home',
    'home',
  ],
  timeEst: 30,
};
const tasks = [
  testTask, testTask, testTask, testTask, testTask, testTask, testTask, testTask, testTask, testTask, testTask, testTask, 
];

export default (props) => {
  const renderTask = ({ index, item: task }) => {
    return <Task key={index} style={styles.task} {...task} />
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Board</Text>
      <FlatList
        style={styles.list}
        data={tasks}
        renderItem={renderTask}
        keyExtractor={(item, i) => `task-${i}`}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  title: {
    flexShrink: 1,
    marginBottom: 20,
    marginTop: 30,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  task: {
    marginBottom: 10,
  },
  list: {
    paddingHorizontal: 20,
  },
});
