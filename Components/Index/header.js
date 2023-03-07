
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";
import CustomerRating from "./CustomerRating";
import FooterSection from "./FooterSection";




function Header() {


    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>

                <View style={{ width: 100, height: 100, marginTop: 10 }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }}>الاكيلة</Text>
                </View>

                <Image style={{ width: 100, height: 90 }} source={require('../../assets/logo.png')}></Image>



            </View>

         

            
                      
        </ScrollView>
    )
}

export default Header;
const Styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#000',
        borderWidth: 3,
        borderColor: '#ffd700',
        margin: 10,
        padding: 10
    },
    Button: {
        height: 20,
        width: 30,
        alignSelf: 'center',

    }



})