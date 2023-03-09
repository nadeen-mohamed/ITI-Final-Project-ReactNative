import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import style from './boxStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome';
//import { useHistory } from "react-router-dom";
export default function Box() {

  return (
    <View style={style.box} >

      <Image source={require('../../../assets/6.png')} style={style.Image}/>

    <View style={style.boxDetails}>
    <Text> اسم الأكله</Text>
    <Text>الوصف</Text>
    <Text>EGP السعر</Text>
    </View>
    
    <Pressable style={style.btn}><Icon name="shopping-cart" size={15} color="#fff"></Icon></Pressable>
</View>
  )
}