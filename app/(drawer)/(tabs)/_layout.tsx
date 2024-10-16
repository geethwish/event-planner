import { Tabs } from 'expo-router';
import React from 'react';

import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image, Text, View } from 'react-native';
import icons from '@/constants/icons';


export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle: { backgroundColor: 'black', paddingTop: 10 }
      }}>
      <Tabs.Screen
        name="home"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text className={`text-xs font-natoSan400 ${focused ? 'text-primary' : 'text-gray-500'}`}>Home</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? icons.selectedHome : icons.home} className='w-7 h-7' resizeMode='contain' />
          ),
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          tabBarLabel: ({ color, focused }) => (
            <Text className={`text-xs font-natoSan400 ${focused ? 'text-primary' : 'text-gray-500'}`}>Profile</Text>
          ),
          tabBarIcon: ({ color, focused }) => (
            <Image source={focused ? icons.selectedProfile : icons.profile} className='w-7 h-7' resizeMode='contain' />
          )
        }}
      />

      <Tabs.Screen
        name="posts"
        options={{
          href: null
        }}
      />

      <Tabs.Screen
        name="all-photos"
        options={{
          href: null
        }}
      />
    </Tabs>
  );
}
