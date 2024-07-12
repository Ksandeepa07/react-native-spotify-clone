import { View, Text, ScrollView, Dimensions, TextInput,Image,} from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome';
import SearchBoxes from '@/components/SearchBoxes';
import AppBar from '@/components/AppBar';




export default function index() {
    const dimensions = Dimensions.get('window');
    const { width} = dimensions;

    
    return (
             
                <View style={{width,backgroundColor: '#191414'}}>

                    <View style={styles.topSearchContainer}>
                        <Image style={styles.topSearchProfileCircle} source={require('../assets/images/user.png')}></Image>
                        <Text style={styles.topSearchContainerTxt}>Search</Text>
                        <Icon name="camera" size={20} color="white" style={{ marginEnd: 20 }} />
                    </View>
                    

                    <ScrollView stickyHeaderIndices={[0]}>

                    <View style={styles.inputContainer}>
                        <Icon name="search" size={20} color="white" style={{ position:'absolute',left:40,top:10}} /> 
                        <TextInput style={styles.input} placeholder="What do you want to listen to?" placeholderTextColor="#cccccc" ></TextInput>
                    </View>
                
                    <Text style={{color:'#fff',fontWeight:'bold',marginStart:12,marginTop:'4%'}}>Browse all</Text>


                    <View style={styles.postContainer}>

                         <SearchBoxes titleName='Music' source={require('../assets/images/searchBoxes3.jpeg')} boxColor='rgb(220, 20, 140)'></SearchBoxes>
                         <SearchBoxes titleName='Life Events' source={require('../assets/images/searchBoxes2.jpg')} boxColor='rgb(132, 0, 231)'></SearchBoxes>
                         <SearchBoxes  titleName={'Made For \nYou'} source={require('../assets/images/searchBoxes4.jpg')} boxColor='rrgb(30, 50, 100)'></SearchBoxes>
                         <SearchBoxes titleName={'New \nReleases'} source={require('../assets/images/searchBoxes1.jpeg')} boxColor='rgb(96, 129, 8)'></SearchBoxes>
                         <SearchBoxes titleName='Pop' source={require('../assets/images/searchBoxes5.jpeg')} boxColor='rgb(71, 125, 149)'></SearchBoxes>
                         <SearchBoxes titleName='Hip-Hop' source={require('../assets/images/searchBoxes6.jpeg')} boxColor='rgb(71, 125, 149)'></SearchBoxes>
                         <SearchBoxes titleName={'Dance/\nElectronic'} source={require('../assets/images/searchBoxes7.jpeg')} boxColor='rgb(71, 125, 149)'></SearchBoxes>
                         <SearchBoxes titleName='Latin' source={require('../assets/images/searchBoxes8.jpeg')} boxColor='rgb(225, 17, 140)'></SearchBoxes>
                         <SearchBoxes titleName='Educational' source={require('../assets/images/searchBoxes9.jpeg')} boxColor='rgb(71, 125, 149)'></SearchBoxes>
                         <SearchBoxes titleName='Documentry' source={require('../assets/images/searchBoxes10.jpeg')} boxColor='rgb(80, 55, 80)'></SearchBoxes>
                         <SearchBoxes titleName='Comedy' source={require('../assets/images/searchBoxes11.jpeg')} boxColor='rgb(175, 40, 150)'></SearchBoxes>
                         <SearchBoxes titleName='Pop Culture' source={require('../assets/images/searchBoxes12.jpeg')} boxColor='rgb(220, 20, 140)'></SearchBoxes>
                         <SearchBoxes titleName='charts' source={require('../assets/images/searchBoxes13.jpg')} boxColor='rgb(141, 103, 171)'></SearchBoxes>
                         <SearchBoxes titleName='Rock' source={require('../assets/images/searchBoxes14.jpeg')} boxColor='rgb(0, 100, 80)'></SearchBoxes>
                        
                    </View>
                    
                    </ScrollView>

              <AppBar></AppBar>

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
        marginTop:'4%',
    

    },

    topSearchProfileCircle: {
        width: '10%',
        height:'70%',
        backgroundColor: '#1DB954',
        borderRadius: 50,
        marginStart:8
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
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        marginLeft: 10,
    },

    

    inputContainer:{
       marginTop:'8%',
   
    },

    input:{
        windth:'100%',
        height:40,
        marginStart:'6%',
        marginEnd:'6%',
        borderRadius:20,
        borderColor: '#fff', 
        borderWidth: 1, 
        fontWeight:'bold',
        textAlign:'center',
    },

    postContainer:{
        width:'100%',
        display:'flex',
        flexWrap:'wrap',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        paddingBottom:'50%'

    },

   
    
})