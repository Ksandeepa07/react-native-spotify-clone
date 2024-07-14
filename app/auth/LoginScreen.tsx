import * as React from 'react';
import { View, Dimensions, Image, StyleSheet, Text ,TextInput} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { opacity } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


export default function login() {

  const dimensions = Dimensions.get('window');
  const { width, height } = dimensions;

  return (
    <View >
     
     {Object.entries(dimensions).map(([key, value]) => (
        <View key={key}  style={{ width, height, backgroundColor: '#191414',display:'flex',justifyContent:'center'}}>
         
        <Text style={styles.emailTxt}>Email or Username</Text>
        <TextInput style={styles.input} />

        <Text style={styles.emailTxt}>Password</Text>
        <TextInput style={styles.input} icon={<Icon name="eye" size={15} color="white"/>} />

        <Button title="Log in" titleStyle={styles.btnTxt} buttonStyle={styles.loginBtn}/>

        <Button title="Log in without password" titleStyle={styles.loginWithOutBtnTxt} buttonStyle={styles.loginBtn}/>


        </View>
      ))}

    </View>
  )
}

const styles=({

  emailTxt:{
    color:'#fff',
    fontSize:20,
    fontWeight:'bold',
    marginStart:14,
    
  },

  input: {
    height: 40,
    margin: 12,
    width:'90%',
    borderWidth: 1,
    padding: 10,
    backgroundColor:'black',
  

  },

  btnTxt: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    opacity:0.5
  },

  loginBtn: {
    backgroundColor: '#191414',
    marginBottom: 14,
    paddingStart: 40,
    paddingEnd: 40,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 20,

  },

  loginWithOutBtnTxt:{
    fontSize:12,
    color:'#fff'
  }


})