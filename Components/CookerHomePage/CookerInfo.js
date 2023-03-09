
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager,Image,ImageBackground } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";
import Icon from 'react-native-vector-icons/Entypo';
function CookInfoComponent(){

    return(
        <>
        <View style={{  flexDirection: 'column', justifyContent: 'flex-start', borderWidth: 2,
        borderColor: 'green',margin:10 ,borderRadius:40}}>
        <Icon
              name="edit"
              onPress={() => alert('Login with edite')}
              style={{color:"green",margin:20}}
              size={30}
              >
            
            </Icon>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View  ><Text style={{fontSize:23 ,marginRight:15}}>من 9 صباحا الي 9 مساءا</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>مواعيد العمل</Text></View>
            </View>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:23 ,marginRight:15}}>01147791094</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>رقم التليفون </Text></View>
            </View>
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:23 ,marginRight:15}}>اهناسيا - بني سويف</Text></View>
            <View style={Styles.containerinfo}><Text style={{fontSize:23 ,marginLeft:15}}>العنوان</Text></View>
            </View>
           
            <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,marginTop:25}}>
            <View ><Text style={{fontSize:23 ,marginRight:15,marginBottom:15}}>تفاصيل اكتر</Text></View>
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