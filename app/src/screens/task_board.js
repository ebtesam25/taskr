import React, { useEffect, useState } from 'react';
import { 
  FlatList,
  StyleSheet, 
  Text,
  TouchableHighlight, 
  View, 
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { getItem } from '../util'

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
            <Icon style={taskItemStyles.icon} name={iconNames[task.taskName]} size={25} />
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

const Task = ({ payment, taskList, timeEst, navigation, style }) => {
  return (
    <TouchableHighlight onPress={() => navigation.push('TaskDetails')}>
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

export default ({ navigation }) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    getItem('taskRunnerTasks').then(tasks => {
      if (tasks)
        setTasks(tasks)
    })
  }, [])

  const renderTask = ({ index, item: task }) => {
    return <Task key={index} style={styles.task} navigation={navigation} {...task} />
  };

  return (
    <View style={styles.container}>
      {/* <Text style={styles.title}>Task Board</Text> */}
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
    paddingTop: 20,
    paddingHorizontal: 20,
  },
});
