import { View, Text ,Image} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';

export default function LibraryScreen() {
  return (
    <View style={{height:'100%',backgroundColor: '#191414',paddingTop:40 }}>
             
            <View style={styles.topSearchContainer}>
                <Image style={styles.topSearchProfileCircle} source={require('../../assets/images/user.png')}></Image>
                <Text style={styles.topSearchContainerTxt}>Your Library</Text>
                <Icon name="camera" size={20} color="white" style={{ marginEnd: 20 }} />
            </View>

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
    justifyContent: 'space-between',

},

topSearchProfileCircle: {
    width: 40,
    height: 40,
    backgroundColor: '#1DB954',
    borderRadius: 50,
    marginStart: 14
},

topSearchContainerTxt: {
    color: '#fff',
    fontWeight: '800',
    fontSize: 20,
    marginStart:-80

},

iconContainer: {
    backgroundColor: 'red',
    borderRadius: 15,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
},

})