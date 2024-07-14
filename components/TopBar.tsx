import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import React from 'react'

export default function header() {
    return (
        <View style={styles.topSearchContainer}>
            <Image style={styles.topSearchProfileCircle} source={require('../assets/images/user.png')}></Image>
            <Text style={styles.topSearchContainerTxt}>Search</Text>
            <Icon name="camera" size={20} color="white" style={{ marginEnd: 20 }} />
        </View>


    )
}


const styles = ({
    topSearchContainer: {
        width: '100%',
        height: 40,
        // backgroundColor:'blue',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position:'absolute',
        top:40,
        
    },

    topSearchProfileCircle: {
        width: 35,
        height: 35,
        backgroundColor: '#1DB954',
        borderRadius: 50,
        marginStart: 14
    },

    topSearchContainerTxt: {
        color: '#fff',
        fontWeight: '800',
        fontSize: 20,
        marginStart: '-40%'

    },

    iconContainer: {
        backgroundColor: 'red',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})