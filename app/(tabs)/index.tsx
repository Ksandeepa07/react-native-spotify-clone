import { View, Text, StyleSheet,Dimensions,Image} from 'react-native'
import React,{useState, useEffect} from 'react'
import LibraryScreen from './LibraryScreen';
import Home from './Home';
import { useNavigation } from '@react-navigation/native'

 


export default function Index() {

  const dimensions = Dimensions.get('window');
  const { width, height } = dimensions;

  const [isLoad, setIsLoad] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoad(true);
    }, 2000);

    return () => clearTimeout(timer); 
  }, [navigation]);

  if (isLoad) {
    return <Home />;
  }


  return (

    <View>
  
     {Object.entries(dimensions).map(([key, value]) => (
        <View key={key}  style={{ width, height, backgroundColor: '#191414', display:'flex',alignItems:'center',justifyContent:'center'}}>
         
         <Image style={styles.logo} source={require('../../assets/images/spotify-logo.png')} />

        </View>
      ))}

    </View>

    
  )

  
}




const styles=StyleSheet.create({

  logo:{
    width:100,
    height:100,    
  }

})