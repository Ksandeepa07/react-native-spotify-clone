import { View, Text,Image } from 'react-native'
import React from 'react'

export default function searchBoxes(props) {
  return (
    <View style={[styles.singlePost,{backgroundColor:props.boxColor}]}>
    <Text numberOfLines={2} lineBreakMode='tail' style={{color:'#fff',fontWeight:'bold',margin:6}}>{props.titleName}</Text>
    <Image style={styles.boxesImage} source={props.source}/>
</View>
  )
}


const styles=({
  singlePost:{
    width:'45%',
    height:80,
    // backgroundColor:'rgb(220, 20, 140)',
    margin:6,
    borderRadius:6,
    position:'relative',
    overflow:'hidden'
    
  
},

boxesImage:{
    width:'40%',
    height:'80%',
    position:'absolute',
    right:-16,
    bottom:0,
    transform: [{rotate: '20deg'}],
    
}

})