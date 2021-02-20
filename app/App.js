import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './src/screens/welcome';
import Orientwo from './src/screens/orientwo';
import Orienthree from './src/screens/orienthree';
import Orientdone from './src/screens/orientdone';
import Login from './src/screens/login';
import Locationpref from './src/screens/locationpref';


import TaskBoard from './src/screens/task_board';
import TaskDetails from './src/screens/task_details';
import { useTestData } from './src/data/data';
import Type from './src/screens/type';
import Profileset1 from './src/screens/profileset1';
import Profileset2 from './src/screens/profileset2';
import Profileset3 from './src/screens/profileset3';
import Profileset4 from './src/screens/prpfileset4';
import Profileallset from './src/screens/profileallset';

const Stack = createStackNavigator();
useTestData()

function MyStack() {
  return (
    <Stack.Navigator
      initialRouteName="Welcome"
    >
      <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orientwo" 
        component={Orientwo} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orienthree" 
        component={Orienthree} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Orientdone" 
        component={Orientdone} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Login" 
        component={Login} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Locationpref" 
        component={Locationpref} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Type" 
        component={Type} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Profileset1" 
        component={Profileset1} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Profileset2" 
        component={Profileset2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Profileset3" 
        component={Profileset3} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Profileset4" 
        component={Profileset4} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Profileallset" 
        component={Profileallset} 
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