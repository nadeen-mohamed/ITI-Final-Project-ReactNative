import React from 'react'
import { StyleSheet, View, Text, Image,  TouchableOpacity, } from 'react-native';
export default function Aboutcheif() {
  return (
   <View style={{display:'flex', flexDirection:"row",justifyContent:'space-between' }}>
  <View style={{display:'flex', flexDirection:"coulmn", marginTop:'50px'}}>
  <Text style={{textAlign:'center'}}>عائشة</Text>
     <Text style={{fontSize:'15px', textAlign:'center', color:'orange'}}> اقدم لكم افضل الاكلات ب اقل الاسعار  </Text>
  </View>
     
    
     
   
    
    <View>
    <Image
            source={require('../../../assets/team4.jpg')}
            style={styles.img}
        />  
      </View>    





       
 
    </View>
  )
}
const styles = StyleSheet.create({
  img:{
      width:200,
      height:200,


    
    },
   About:{
    fontSize:'15px',
     textAlign:'center', 
     color:'orange',
     marginTop:50,
     textAlign:'center'
   }
});
