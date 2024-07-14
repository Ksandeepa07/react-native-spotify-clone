import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import React from 'react'
import { Button } from 'react-native-elements';
import { color } from 'react-native-elements/dist/helpers';
import AppBar from '@/components/AppBar';
import PopularArtist from '@/components/PopularArtist';
import TrySomething from '@/components/TrySomething';
import FreshMusic from '@/components/FreshMusic';

export default function Home() {
  const dimensions = Dimensions.get('window');
  const { width, height } = dimensions;
  return (

   


    <View style={{ height: '100%', backgroundColor: '#191414', paddingTop: 40 }}>

      <View style={styles.topSearchContainer}>
        <Image style={styles.topSearchProfileCircle} source={require('../../assets/images/user.png')}></Image>
        <Button title='All' buttonStyle={styles.btn} titleStyle={styles.btnTitle}></Button>
        <Button title='Music' buttonStyle={styles.btnMusic} titleStyle={styles.btnTitle}></Button>
      </View>

      <ScrollView >

        <Text style={styles.topTxt}>Popular artists</Text>

        <View style={styles.popularArtisContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <PopularArtist source={require('../../assets/images/artist1.jpeg')} artistName={"Coldplay"}></PopularArtist>
            <PopularArtist source={require('../../assets/images/artist2.jpeg')} artistName={"NF"}></PopularArtist>
            <PopularArtist source={require('../../assets/images/artist3.jpeg')} artistName={"Ryan Caraveo"}></PopularArtist>
            <PopularArtist source={require('../../assets/images/user.png')} artistName={"Billie Eilish"}></PopularArtist>
          </ScrollView>
        </View>

        <Text style={styles.secondoryTxt}>Try something else</Text>

        <View style={styles.trySomethingElseContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <TrySomething source={require('../../assets/images/trySomthing1.jpeg')} name={"Soft Pop Hits"} desc={"Warm familiar pop you know and love."}></TrySomething>
            <TrySomething source={require('../../assets/images/trySomthing2.jpeg')} name={"Mega Hit Mix"} desc={"A mega mix of 75 favorites from the last few years!"}></TrySomething>
            <TrySomething source={require('../../assets/images/trySomthing3.jpeg')} name={"Throwback "} desc={"Here it is, the playlist for the ultimate throwback bash!"}></TrySomething>
            <TrySomething source={require('../../assets/images/trySomthing4.jpeg')} name={"Mega Hit Mix"} desc={"A mega mix of 75 favorites from the last few years!"}></TrySomething>
          </ScrollView>
        </View>

        <Text style={styles.secondoryTxt}>Fresh new music</Text>

        <View style={styles.freshMussicContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FreshMusic source={require('../../assets/images/freshMusic1.jpeg')} name={"Frequency"} desc={"New music from Black artists every Friday."}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic2.jpeg')} name={"Christian"} desc={"he best new tracks of all Christian, Gospel,"}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic3.jpeg')} name={"The Core  "} desc={"metalcore at its best. Cover:Windwaker"}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic1.jpeg')} name={"frequency"} desc={"New music from Black artists every Friday."}></FreshMusic>
          </ScrollView>
        </View>

        <Text style={styles.secondoryTxt}>Fresh new music</Text>

        <View style={styles.freshMussicContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <FreshMusic source={require('../../assets/images/freshMusic1.jpeg')} name={"This is frequency"} desc={"New music from Black artists every Friday."}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic2.jpeg')} name={"Mega Hit Mix"} desc={"A mega mix of 75 favorites from the last few years!"}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic3.jpeg')} name={"The Core "} desc={"metalcore at its best. Cover:Windwaker"}></FreshMusic>
            <FreshMusic source={require('../../assets/images/freshMusic1.jpeg')} name={"frequency"} desc={"New music from Black artists every Friday."}></FreshMusic>
          </ScrollView>
        </View>



      </ScrollView>

      {/* <AppBar></AppBar> */}


    </View>


  )
}

const styles = ({
  topSearchContainer: {
    width: '100%',
    height: '6%',
    // backgroundColor:'blue',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginTop: '4%',


  },

  topSearchProfileCircle: {
    width: '10%',
    height: '80%',
    backgroundColor: '#1DB954',
    borderRadius: 50,
    marginStart: 14,
    marginEnd: 20,
  },

  btn: {
    backgroundColor: '#1DB954',
    paddingTop: 6,
    paddingBottom: 6,
    paddingStart: 20,
    paddingEnd: 20,
    borderRadius: 20,
    marginEnd: 10

  },

  btnMusic:{
    backgroundColor: 'transparent',
    paddingTop: 6,
    paddingBottom: 6,
    paddingStart: 20,
    paddingEnd: 20,
    marginEnd: 10,
    borderRadius: 20,
    borderColor:'#1DB954',
    borderWidth: 1,
    
  },

  btnTitle: {
    fontSize: 12,
    fontWeight: 'bold'
  },

  topTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 14,
    marginTop: '10%'
  },

  popularArtisContainer: {
    width: '100%',
    // height: 140,
    // backgroundColor:'red',
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',

  },


  secondoryTxt: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginStart: 14,
    marginTop: '6%'
  },


  trySomethingElseContainer:{
    width: '100%',
    // height: 200,
    // backgroundColor:'red',
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'

  },

  freshMussicContainer:{
    width: '100%',
    // height: 200,
    // backgroundColor:'red',
    marginTop: 14,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  }

})