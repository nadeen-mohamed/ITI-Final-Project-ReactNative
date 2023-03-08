import React from 'react'
import { StyleSheet, View, Text, Image,  TouchableOpacity, } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function DownloadApp() {

  return (
   <View style={{display:'flex', flexDirection:'coulmn'}}>
 <Image
               source={require('../assets/app.png')}
               style={styles.img}
           />
           <View >
           <Text style={{fontSize:'15px', textAlign:'center', color:'orange'}}>  لا تشعر بالجوع ابدا وحمل تطبيقنا الأن واستمتع ب ألذ الأطعمة </Text>
         
<View  style={{display:'flex', flexDirection:'row'}} >

            <View>
            <Image
               source={require('../assets/Android.png')}
               style={styles.imag}
           />
            </View>
         <View>
         <Image
               source={require('../assets/apple.png')}
               style={styles.imag}
           />
         </View>

           </View >
           </View>
   </View>
  )
}
const styles = StyleSheet.create({
    img:{
        width:200,
        height:200,
        marginTop:10,
        justifyContent: "space-between",
        alignSelf:'center'
      },
      imag:{
        width:200,
        height:50,
       marginLeft:10,
       marginButtom:10,
       marginTop:10,
      }
  });