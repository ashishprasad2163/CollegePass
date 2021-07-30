import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../components/home/Home";
import Tutoring from "../components/tutoring/index";
import Blog from "../components/blog/index";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const Navigator = () => {
  return (
    <Tab.Navigator initialRouteName="Home" screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if(route.name === 'Home') {
          iconName = focused
            ? 'home'
            : 'home-outline' ;
        }
        else if (route.name === 'Tutoring') {
          iconName = focused
            ? 'book'
            : 'book-outline' ;
        }
        else if (route.name === 'Blog') {
          iconName = focused
            ? 'newspaper'
            : 'newspaper-outline' ;
        }
        return <Ionicons name = {iconName} size = {size} color={color} />;
      },
    })}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Tutoring" component={Tutoring} />
            <Tab.Screen name="Blog" component={Blog} />
    </Tab.Navigator>
  );
};

export default () => {
  return <Navigator/>;
};
