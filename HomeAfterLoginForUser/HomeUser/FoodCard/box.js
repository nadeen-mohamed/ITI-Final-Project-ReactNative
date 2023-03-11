import React from 'react'
import { View, Text, Image, Pressable } from 'react-native';
import style from './boxStyle.js'
import Icon from 'react-native-vector-icons/FontAwesome';


//import { useHistory } from "react-router-dom";
export default function Box(props) {
  // const { navigation } = props;
  
  console.log(props.element)
  

 
  return (

    <View style={style.box} >
      <Image source={props.element.foodImg[0]} style={style.Image} />
      <View style={style.boxDetails}>
        <Text style={{color:'green', fontSize:'14px'}} >  {props.element?.foodName} </Text>
        <Text  style={{color:'black', fontSize:'14px'}}> {props.element?.foodDiscription}</Text>
        <Text  style={{color:'green', fontSize:'14px'}}> <Text>{props.element?.middlePrice} </Text>السعر</Text>
      </View>
      <Pressable style={style.btn} onPress={() => props.nav.navigate('Details',{id: props.element.id})} ><Icon name="shopping-cart" size={15} color="#fff" ></Icon></Pressable> 
      {/* onPress={() => navigation.navigate("Details", {id : props.element.id})} */}
    </View>
  )
}