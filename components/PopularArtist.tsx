import { View, Text,Image } from 'react-native'
import React from 'react'

export default function PopularArtist(props:any) {
  return (
    <View style={styles.singleArtistContainer}>
              <Image style={styles.artistImg} source={props.source}></Image>
              <Text style={styles.artistName}>{props.artistName}</Text>
            </View>
  )
}

const styles=({
    singleArtistContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginStart: 20
    
      },
    
      artistImg: {
        width: 100,
        height: 100,
        borderRadius: 100,
        // marginStart:20
    
      },
    
      artistName: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 10
    
      },
})