import {View, Text, Button} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import DetailScren from './src/pages/DetailScren';
import HomeScreen from './src/pages/HomeScreen';
import LoginScreen from './src/pages/LoginScreen';
import Icon from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Text>merhaba</Text>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: 'red',
          headerStyle: {
            backgroundColor: '#900',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 22,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="home" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="rocket" size={30} color="#900" />,
          }}
        />
        <Tab.Screen
          name="Detail"
          component={DetailScren}
          options={{
            headerShown: false,
            tabBarIcon: () => <Icon name="heart" size={30} color="#900" />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
