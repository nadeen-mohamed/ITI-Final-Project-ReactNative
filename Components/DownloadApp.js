import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
export default function DownloadApp() {
  return (
   <View style={{display:'flex', flexDirection:'coulmn'}}>
 <Image
               source={require('../assets/app.png')}
               style={styles.img}
           />
           <View >
           <Text style={{fontSize:'15px'}}>  لا تشعر بالجوع ابدا وحمل تطبيقنا الأن واستمتع ب ألذ الأطعمة </Text>
           </View>
   </View>
  )
}
const styles = StyleSheet.create({
    img:{
        width:200,
        height:200,
   
        justifyContent: "space-between",
        alignSelf:'center'
      },
  });