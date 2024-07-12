import { View, Text,Image } from 'react-native'
import React from 'react'

export default function TrySomething(props:any) {
  return (
    <View style={styles.singleTrySomethingElseContainer}>
    <Image style={styles.trySomethingImage} source={props.source}></Image>
    <Text style={styles.trySomethingName}>{props.name}</Text>
    <Text style={styles.trySomethingDesc}>{props.desc}</Text>
  </View>
  )
}

const styles=({
    singleTrySomethingElseContainer:{
        display: 'flex',
        // alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20 ,
        width:100,
        height:160
        
      },
    
      trySomethingImage:{
        width: 100,
        height: 100,
        borderRadius:10
      },
    
      trySomethingName:{
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
      },
    
      trySomethingDesc:{
        color: '#cccccc',
        fontWeight: '500',
        fontSize:9
        
      }
    
})