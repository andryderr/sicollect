import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../utils/AuthContext';
import { FontAwesome } from "@expo/vector-icons";

import LoginScreen from '../screens/LoginScreen';
import BerandaScreen from '../screens/BerandaScreen';
import UserProfileScreen from '../screens/UserProfileScreen';
import InputScreen from '../screens/InputScreen';

const Tab = createBottomTabNavigator();

const AppNavigator: React.FC = () => {
  const { user } = useContext(AuthContext);

  return user ? (
    <Tab.Navigator>
      <Tab.Screen
        name="Pekerjaan Saya"
        component={BerandaScreen}
        options={{
          tabBarLabel: "Beranda",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Input Data"
        component={InputScreen}
        options={{
          tabBarLabel: "Input Data",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="database" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil Pengguna"
        component={UserProfileScreen}
        options={{
          tabBarLabel: "User",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
      
    </Tab.Navigator>
  ) : (
    <LoginScreen />
  );
};

export default AppNavigator;