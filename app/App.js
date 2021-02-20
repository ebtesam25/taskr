import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './src/screens/welcome';
import Orientwo from './src/screens/orientwo';
import Orienthree from './src/screens/orienthree';
import Orientdone from './src/screens/orientdone';
import Login from './src/screens/login';
import Locationpref from './src/screens/locationpref';


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
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