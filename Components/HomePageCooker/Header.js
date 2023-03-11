
import axios from "axios";
import React, { useEffect, useState } from "react";
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import { ScrollView, Text, StyleSheet, I18nManager,Image,ImageBackground } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";

function HeaderComponent(props){

    return(
        <>
       
        <View style={Styles.container}>
    <ImageBackground source={require('../../assets/Try.jpg')} resizeMode="cover" style={Styles.image}>
    </ImageBackground>
    <View style={Styles.profileview}>
    <Text style={Styles.profiletext}>{props.Name} </Text>
    {/* <View style={Styles.profile} >
    <Image style={Styles.img} resizeMode="center" source={require('../../assets/team1.jpg')}></Image>
    </View> */}
     <Image style={Styles.profile} resizeMode="cover" source={props?.photo} ></Image>
    </View>
  </View>
    </>
      

    )
}

export default HeaderComponent;
const Styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#000',
        borderWidth: 3,
        borderColor: 'green',
        margin: 10,
        padding: 10,

    },
    container: {
       
        
      },
      image: {
       
        justifyContent: 'center',
        height:300
        
      },
      profileview: {
      
        flexDirection:"row",
        justifyContent: 'flex-end',
   
      },
      profile: {
        
        color: 'white',
        marginTop:-60,
        textAlign: 'center',
        width:130,
        height:130,
        borderRadius:130/2
          
    },
    img:{
  width:"100%"
    },
    profiletext:{
        color: 'green',
        fontSize:23,
        marginTop:10,
        textAlign: 'center',
        width:150,
       
    }
   })