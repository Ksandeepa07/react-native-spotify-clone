import { View, Text } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function AppBar() {
  return (
   
      <View style={styles.appBarContainer}>
        <View style={styles.miniContainer}>

          <View style={styles.miniContainerContent}>
             <Icon name='home' size={22} color={'#fff'}></Icon>
             <Text style={styles.miniContainerTxt}>Home</Text>
          </View>
            
            <View style={styles.miniContainerContent}>
             <Icon name='search' size={22} color={'#fff'}></Icon>
             <Text style={styles.miniContainerTxt}>search</Text>
          </View>

          <View style={styles.miniContainerContent}>
             <Icon name='star' size={22} color={'#fff'}></Icon>
             <Text style={styles.miniContainerTxt}>Your Library</Text>
          </View>

          <View style={styles.miniContainerContent}>
             <Icon name='spotify' size={22} color={'#fff'}></Icon>
             <Text style={styles.miniContainerTxt}>Premium</Text>
          </View>

        </View>
      </View>
  )
}

const styles=({
    appBarContainer:{
        // width:'100%',
        height:60,
        backgroundColor:'#191414',
        position:'absolute',
        bottom:110,
        left:0,
        right:0,
        opacity:0.9
    },

    miniContainer:{
        height:'100%',
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-around'


    },

    miniContainerTxt:{
        fontSize:10,
        fontWeight:'bold',
        color:'#fff',
        marginTop:2
        

    },

    miniContainerContent:{
        display:'flex',
        alignItems:'center'

    }
})