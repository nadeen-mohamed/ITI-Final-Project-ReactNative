
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";

import Icon from 'react-native-vector-icons/Entypo';



function ReviewCard() {


    return (
        <>
                        <Text style={{textAlign:"center",fontSize:20,fontWeight:"bold"}}>رأي العميل</Text>
                  
            <View style={{ padding: 10 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 2,
                    borderColor: 'green', borderRadius: 40
                }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' ,marginRight:15}}>
                        <Text style={{ fontSize: 23,fontWeight:"bold" , textAlign:"center"}}>تقوي علي</Text>
                        <Text style={{ fontSize: 18 ,}}>الاكل اكتر من رائع تسلم ايدك</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>

                            <Icon
                                name="star"

                                style={{ color: "#FFFF00", margin: 7 }}
                                size={30}
                            >

                            </Icon>
                            <Icon
                                name="star"

                                style={{ color: "#FFFF00", margin: 7 }}
                                size={30}
                            >

                            </Icon>
                            <Icon
                                name="star"

                                style={{ color: "#FFFF00", margin: 7 }}
                                size={30}
                            >

                            </Icon> <Icon
                                name="star"

                                style={{ color: "#FFFF00", margin: 7 }}
                                size={30}
                            >

                            </Icon>
                            <Icon
                                name="star"

                                style={{ color: "#FFFF00", margin: 7 }}
                                size={30}
                            >

                            </Icon>

                        </View>
                    </View>
                    <Image style={Styles.profile} source={require('../../assets/user1.jpg')} resizeMode="cover"></Image>

                </View>
            </View>
        </>
    )
}

export default ReviewCard;
const Styles = StyleSheet.create({
    profile: {

        width: 120,
        height: 120,
        borderRadius: 120 / 2,
        margin:10

    },
})