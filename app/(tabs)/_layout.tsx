import * as React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';





export default function RootLayout() {



  return (

    <Tabs screenOptions={{headerShown:false}}>

   <Tabs.Screen  name="Home" options={{tabBarLabel: 'Home',tabBarIcon: ({ color, size }) => (<Icon name="home" color={'red'}/>)}}/>

  </Tabs>
     

  )


}
