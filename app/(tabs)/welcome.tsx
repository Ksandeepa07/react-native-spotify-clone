// import * as React from 'react';
// import { View, Dimensions, Image, StyleSheet, Text, Pressable } from "react-native";
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Button } from 'react-native-elements';
// import { FontAwesome } from '@expo/vector-icons';
// import { router } from 'expo-router';

// export default function Welcome() {

//   const dimensions = Dimensions.get('window');
//   const { width, height } = dimensions;


//   return (

//     <View>

//       {Object.entries(dimensions).map(([key, value]) => (

//         <View key={key} style={{ width, height, backgroundColor: '#191414', display: 'flex', alignItems: 'center'}}>

//           <Image style={styles.logo} source={require('../assets/images/spotify-logo.png')} />

//           <Text style={styles.mainTxt} >Millions of songs.{"\n"}Free on Spotify.</Text>

//           <Pressable style={styles.signUpBtn} >
//             <Text style={styles.btnTxt}>Sign up for free</Text>
//           </Pressable>


//           {/* <FontAwesome.Button backgroundColor={"red"}  borderRadius={20} style={{paddingTop:10,paddingBottom:10,paddingStart:20,paddingEnd:20}} name="facebook"  >
//              Sign in with Facebook
//           </FontAwesome.Button> */}

//           <Button icon={<Icon name="google" size={15} color="white" style={{ marginEnd: 20 }} />} title="Continue with Google" titleStyle={styles.btnTxt} buttonStyle={styles.signUpWithBtn} />
//           <Button icon={<Icon name="facebook" size={15} color="white" style={{ marginEnd: 20 }} />} title="Continue with Facebook" titleStyle={styles.btnTxt} buttonStyle={styles.signUpWithBtn} />

//           <Button title="Login" titleStyle={styles.btnTxt} buttonStyle={styles.signUpWithBtn} />

//           <Text style={styles.warningText}>While you are signed in, anyone else using {"\n"} this device will able to acess your  {"\n"} account</Text>

//         </View>

//       ))}

//     </View>


//   );
// }


// const styles = StyleSheet.create({
//   logo: {
//     marginTop: '30%',
//     marginBottom: '10%',
//     width: 100,
//     height: 100,
//   },

//   mainTxt: {
//     color: '#fff',
//     fontSize: 40,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: '10%',

//   },

//   signUpBtn: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     paddingStart: 40,
//     paddingEnd: 40,
//     paddingTop: 10,
//     paddingBottom: 10,
//     backgroundColor: '#1DB954',
//     borderRadius: 20,
//     marginBottom: 40

//   },

//   btnTxt: {
//     fontSize: 16,
//     fontWeight: 'bold',
//     color: 'white',
//   },

//   signUpWithBtn: {
//     backgroundColor: 'black',
//     marginBottom: 14,
//     paddingStart: 40,
//     paddingEnd: 40,
//     paddingTop: 10,
//     paddingBottom: 10,
//     borderRadius: 20,

//   },

//   warningText: {
//     fontSize: 12,
//     color: '#fff',
//     textAlign: 'center',
//     marginTop: 20
//   }


// })
