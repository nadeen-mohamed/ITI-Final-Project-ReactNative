
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
            <View  ><Text style={{fontSize:19 }}>من 9 صباحا الي 9 مساءا</Text></View>
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
           
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:20}}>تفاصيل اكتر</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15,marginBottom:15}}> عن الطباخ</Text></View>
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