import { View, Text,Image } from 'react-native'
import React from 'react'

export default function FreshMusic(props:any) {
  return (
    <View style={styles.singleFreshMusicContainer}>
    <Image style={styles.freshMusicImage} source={props.source}></Image>
    <Text style={styles.freshMusicName}>{props.name}</Text>
    <Text style={styles.freshMusicDesc}>{props.desc}</Text>
  </View>
  )
}

const styles=({
    singleFreshMusicContainer:{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20 ,
        width:100,
        height:160
        
      },
    
      freshMusicImage:{
        width: 100,
        height: 100,
        borderRadius:10
      },
    
      freshMusicName:{
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
      },
    
      freshMusicDesc:{
        color: '#cccccc',
        fontWeight: '500',
        fontSize:9
        
      }
})