import { Stack } from "expo-router";
import * as React from 'react';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Tabs } from 'expo-router';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from "@/screens/SearchScreen";
import Home from "@/screens/Home";





export default function RootLayout() {

  // const Stack = createStackNavigator();


  return (

     <Stack>
     <Stack.Screen name="index" options={{headerShown:false}} />
     </Stack>

    

  )


}
