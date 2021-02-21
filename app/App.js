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
import GroceryList from './src/screens/grocery_list'
import { useTestData } from './src/data/data';
import Type from './src/screens/type';
import Profileset1 from './src/screens/profileset1';
import Profileset2 from './src/screens/profileset2';
import Profileset3 from './src/screens/profileset3';
import Profileset4 from './src/screens/prpfileset4';
import Profileallset from './src/screens/profileallset';
import Vehicletype from './src/screens/vehicletype';
import Vehicledoc from './src/screens/vehicledoc';
import Helpee1 from './src/screens/helpee1';
import Helpee2 from './src/screens/helpee2';
import Helpee3 from './src/screens/helpee3';
import Helpee4 from './src/screens/helpee4';
import Helpee5 from './src/screens/helpee5';
import Helpee6 from './src/screens/helpee6';
import Helpee7 from './src/screens/helpee7';
import Helpeerate from './src/screens/helpeerate';
import HelpeeRateSubmit from './src/screens/helpeeratesubmit';
import Helpeemap from './src/screens/helpeemap';

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
        name="Vehicletype" 
        component={Vehicletype} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Vehicledoc" 
        component={Vehicledoc} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpee1" 
        component={Helpee1} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpee2" 
        component={Helpee2} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpee3" 
        component={Helpee3} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpee4" 
        component={Helpee4} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpee5" 
        component={Helpee5} 
        options={{ headerShown: false}} 
      />
        <Stack.Screen 
        name="Helpee6" 
        component={Helpee6} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Helpee7" 
        component={Helpee7} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Helpeerate" 
        component={Helpeerate} 
        options={{ headerShown: false}} 
      />
       <Stack.Screen 
        name="Helpeeratesubmit" 
        component={HelpeeRateSubmit} 
        options={{ headerShown: false}} 
      />
      <Stack.Screen 
        name="Helpeemap" 
        component={Helpeemap} 
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
      <Stack.Screen
        name="GroceryList"
        component={GroceryList}
        options={{ title: 'Grocery List', headerTitleAlign: 'center', headerStyle: { elevation: 0, shadowOpacity: 0 } }} 
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