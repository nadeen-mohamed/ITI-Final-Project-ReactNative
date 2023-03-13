import React from 'react'
import { StyleSheet, View, Text, Image,  TouchableOpacity, } from 'react-native';


export default function DownloadApp() {

  return (
   <View style={{display:'flex', flexDirection:'coulmn'}}>
 <Image
               source={require('../assets/app.png')}
               style={styles.img}
           />
           <View >
           <Text style={{fontSize:'15px', textAlign:'center', color:'orange' , marginTop:'15px' , marginBottom:'30px' , marginLeft:'25px',marginRight:'25px'}}>  لا تشعر بالجوع ابدا وحمل تطبيقنا الأن واستمتع ب ألذ الأطعمة </Text>
         
<View  style={{ justifyContent:'space-around', alignItems:'center'}} >

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
        height:270,
        marginTop:70,
        justifyContent: "space-between",
        alignSelf:'center'
      },
      imag:{
        width:180,
        height:60,
     margin:'auto',
     marginTop:'20',
     borderColor:'black',
     borderWidth:1,
     marginTop:10
      }
  });