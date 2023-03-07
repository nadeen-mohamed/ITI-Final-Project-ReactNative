import React from 'react'
import { SafeAreaView, StyleSheet, View, Text, FlatList,Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function FooterSection() {

return (
      <View  style={styles.container}>
    <View style={styles.headerFooterStyle}>

       
     
           <Image 
        source={require('../assets/logo.png')}
  style={styles.img}
    /> 
       <Text style={styles.icon}>
       <Icon 
        name='facebook-square' size={30} color={'orange'} style={{margin:'6px'}}onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }} ></Icon>
       <Icon
        name='twitter-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
         <Icon
        name='phone-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
         <Icon
        name='instagram' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://www.instagram.com/');
        }}></Icon>
         <Icon
        name='linkedin-square' size={30} color={'orange'} style={{margin:'6px'}} onPress={() => {
          Linking.openURL('https://twitter.com/?lang=ar');
        }}></Icon>
        
        </Text> 
       

       

      
    </View>
    </View>
  );
}
const styles = StyleSheet.create({
 
    headerFooterStyle: {
     
      width: '100%',
      height: 140,
      backgroundColor: 'rgba(0, 0, 0, .04)'
    },
    textStyle: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18,
      padding: 7,
    },
    myText: {
      fontSize: 25,
      color:"white"
    }
  ,
  img:{
    width:100,
    height:100,
    borderRadius:400 ,
    justifyContent: "space-between",
    alignSelf:'center'
  },
  text:{
    color:"gray",
    padding: 20,
  alignSelf:'center'
  },
  icon:{
    justifyContent: "space-between",
    alignSelf:'center'
  }
    
   
  
  });




