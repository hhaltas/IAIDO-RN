import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//import page
import HomeScreen from '../../src/Home';
import LoginScreen from '../../src/Login';
import ProfileScreen from '../../src/Profile';
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Home() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="TabHome" component={HomeScreen} />
      <Tab.Screen name="TabProfile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

function RouterPAGE() {
  return (
    <NavigationContainer screenOptions={{headerShown: false}}>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RouterPAGE;
