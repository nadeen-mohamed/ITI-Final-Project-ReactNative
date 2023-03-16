
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager,Image,ImageBackground } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";
import Icon from 'react-native-vector-icons/Entypo';
import EditFormPopUp from "../CookerAfterLogin/EditInfoForm/EditFormPopUp";

function CookInfoComponent(props){

    return(
        <>
    
        <View style={{  flexDirection: 'column', justifyContent: 'flex-start', borderWidth: 2,
        borderColor: 'green',margin:10 ,borderRadius:40}}>
        
           <EditFormPopUp editecookerpersonal={props.alldata}></EditFormPopUp>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View  ><Text style={{fontSize:15 }}> {props.alldata?.pmcooker}    </Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>مواعيد العمل</Text></View>
            </View>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:20 }}>{props?.phone}</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>رقم التليفون </Text></View>
            </View>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:20 ,marginRight:15}}>{props?.country}, {props?.address}</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>العنوان</Text></View>
            </View>
           
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25,flexDirection:'row'}}>
            <View ><Text style={{fontSize:20 ,flex: 1, flexWrap: 'wrap',marginLeft:5}}>{props.alldata?.detailscooker} </Text></View>
            {console.log(props)}
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:1,marginBottom:15 }}> عن الطباخ</Text></View>
            </View>
        </View>
    </>
      

    )
}

export default CookInfoComponent;
const Styles = StyleSheet.create({
    containerinfo: {
     width:180,
    paddingRight:10

    },
 })