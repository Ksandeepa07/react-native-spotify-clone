import { View, Text,Image ,Dimensions,ScrollView} from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';

export default function Home() {
  const dimensions = Dimensions.get('window');
  const { width,height} = dimensions;
  return (
   
   
    <View style={{width,height,backgroundColor: '#191414'}}>

    <View style={styles.topSearchContainer}>
        <Image style={styles.topSearchProfileCircle} source={require('../assets/images/user.png')}></Image>
        <Button title='All'  buttonStyle={styles.btn} titleStyle={styles.btnTitle}></Button>
        <Button title='Music'  buttonStyle={styles.btn} titleStyle={styles.btnTitle}></Button>
    </View>

    <ScrollView>

      <Text style={styles.topTxt}>Popular artists</Text>

      <View style={styles.popularArtisContainer}>

        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

        <View style={styles.singleArtistContaine}>
          <Image style={styles.artistImg} source={require('../assets/images/user.png')}></Image>
        </View>

        <View style={styles.singleArtistContaine}>
          <Image style={styles.artistImg} source={require('../assets/images/user.png')}></Image>
        </View>

         <View style={styles.singleArtistContaine}>
          <Image style={styles.artistImg} source={require('../assets/images/user.png')}></Image>
        </View>

        <View style={styles.singleArtistContaine}>
          <Image style={styles.artistImg} source={require('../assets/images/user.png')}></Image>
        </View>

        </ScrollView>

      </View>

    </ScrollView>
    
</View>


  )
}

const styles=({
   topSearchContainer: {
    width: '100%',
    height: '6%',
    // backgroundColor:'blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop:'4%',


},

topSearchProfileCircle: {
    width: '10%',
    height:'80%',
    backgroundColor: '#1DB954',
    borderRadius: 50,
    marginStart:8,
    marginEnd:20,
},

btn:{
  backgroundColor:'#1DB954',
  paddingTop:6,
  paddingBottom:6,
  paddingStart:20,
  paddingEnd:20,
  borderRadius:20,
  marginEnd:10

},
btnTitle:{
  fontSize:12,
  fontWeight:'bold'
},

topTxt:{
  color:'#fff',
  fontSize:20,
  fontWeight:'bold',
  marginStart:'3%',
  marginTop:'10%'
},

popularArtisContainer:{
  width:'100%',
  height:120,
  // backgroundColor:'red',
  marginTop:10,
  display:'flex',
  flexDirection:'row',
  alignItems:'center',


},

singleArtistContaine:{
  // display:'flex',
  
},

artistImg:{
  width:100,
  height:100,
  borderRadius:100,
  marginStart:20

}



})