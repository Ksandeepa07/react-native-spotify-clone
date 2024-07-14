import { Stack } from "expo-router";
import * as React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


export default function RootLayout() {


  return (

     <Stack screenOptions={{headerShown:false}}>
     <Stack.Screen name="(tabs)" />
     </Stack>

  )


}
