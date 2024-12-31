import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FlexBoxLayout from './src/tabs/layouting';
import SingleBarChart from './src/tabs/diagram';
import Masuk from './src/masuk';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const fetchChartValues = async () => {
  // Dummy data
  return { left: 7, right: 50 };
};

function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Diagram">
        {() => <SingleBarChart fetchValues={fetchChartValues} />}
      </Tab.Screen>
      <Tab.Screen name="Box" component={FlexBoxLayout} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Masuk} options={{ headerShown: false }} />
        <Stack.Screen name="Main" component={MainTabs} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
