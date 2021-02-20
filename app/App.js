import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './src/screens/welcome';
import TaskBoard from './src/screens/task_board';
import TaskDetails from './src/screens/task_details';
import { useTestData } from './src/data/data';

const Stack = createStackNavigator();
useTestData()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="TaskBoard"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen
        name="TaskBoard"
        component={TaskBoard}
        options={{ title: 'Task Board', headerTitleAlign: 'center' }} 
      />
      <Stack.Screen
        name="TaskDetails"
        component={TaskDetails}
        options={{ title: 'Task Details', headerTitleAlign: 'center' }} 
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}