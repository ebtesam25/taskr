import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Welcome from './src/screens/splash';

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
        <Stack.Screen 
        name="Welcome" 
        component={Welcome} 
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