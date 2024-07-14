import * as React from 'react';
import { Tabs } from 'expo-router';
import { Icon } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import { Text } from 'react-native';



export default function RootLayout() {

  return (

    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#191414',
          borderColor: '#191414',
          height:45,
          
        },    
       
      }}>

      <Tabs.Screen name="HomeScreen"
        options={{

          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#1DB954' : '#fff', fontWeight:focused? '700':'700',fontSize:10 }}>
              Home
            </Text>
          ),
  
          tabBarIcon:({focused})=>{
            const colorChange=focused? '#1DB954':'#fff';
            return <Icon name='home' color={colorChange} size={25}/>
          }
        }}/>

      <Tabs.Screen name="SearchScreen"
        options={{   
          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#1DB954' : '#fff', fontWeight:focused? '700':'700',fontSize:10 }}>
              Search
            </Text>
          ),
  
          tabBarIcon:({focused})=>{
            let colorChange=focused? '#1DB954':'#fff';
            return <Icon name='search' color={colorChange} size={25}/>
          }
        }} />

      <Tabs.Screen name="LibraryScreen"
        options={{

          tabBarLabel: ({ focused }) => (
            <Text style={{ color: focused ? '#1DB954' : '#fff', fontWeight:focused? '700':'700',fontSize:10 }}>
              Library
            </Text>
          ),
  


          tabBarIcon:({focused})=>{
            let colorChange=focused? '#1DB954':'#fff';
            return <Icon name='star' size={25} color={colorChange} />
          }
 
        }}/>

    </Tabs>





  )

}
