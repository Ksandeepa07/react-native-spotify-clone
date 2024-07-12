import { View, Text, StyleSheet,Dimensions,Image} from 'react-native'
import React,{useState, useEffect} from 'react'
import Welcome from '@/screens/welcome';
import Login from '@/screens/login';
import AppBar from '@/components/AppBar';
import Home from '@/screens/Home';
import SearchScreen from '@/screens/SearchScreen';

 


export default function welcome() {

  const dimensions = Dimensions.get('window');
  const { width, height } = dimensions;

  return (
    

    <View>
  
      {/* <AppBar></AppBar> */}
      {/* <Welcome></Welcome> */}
      {/* <Login></Login> */}
      
      <SearchScreen></SearchScreen>

       {/* <Home></Home> */}

     
     
     {/* {Object.entries(dimensions).map(([key, value]) => (
        <View key={key}  style={{ width, height, backgroundColor: '#191414', display:'flex',alignItems:'center',justifyContent:'center'}}>
         
         <Image style={styles.logo} source={require('../assets/images/spotify-logo.png')} />

        </View>
      ))} */}

    </View>
  )
}

const styles=StyleSheet.create({

  logo:{
    width:100,
    height:100,    
  }

})