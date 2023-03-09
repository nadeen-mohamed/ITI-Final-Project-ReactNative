
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";





function Header() {


    return (
        <>
        <View style={{padding:10}}>
        <View style={{  flexDirection: 'row', justifyContent: 'flex-end' ,borderWidth: 2,
        borderColor: 'green' ,borderRadius:40}}>
                <View style={{  flexDirection: 'column', justifyContent: 'center'}}>
         <Text>تقوي علي</Text>
         <Text>الاكل اكتر من رائع تسلم ايدك</Text>

        </View>
        <Image style={Styles.profile} source={require('../../assets/team1.jpg')} resizeMode="contain"></Image>
     
        </View>
        </View>
        </>
    )
}

export default Header;
const Styles = StyleSheet.create({
    profile: {
    
        width:100,
        height:100,
        borderRadius:100/2
          
    },
})