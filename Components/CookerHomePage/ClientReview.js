
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";

import Icon from 'react-native-vector-icons/Entypo';



function ReviewCard() {


    return (
        <>
            <View style={{ padding: 10 }}>
                <View style={{
                    flexDirection: 'row', justifyContent: 'flex-end', borderWidth: 2,
                    borderColor: 'green', borderRadius: 40
                }}>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' ,marginRight:15}}>
                        <Text style={{ fontSize: 23 }}>تقوي علي</Text>
                        <Text style={{ fontSize: 20 }}>الاكل اكتر من رائع تسلم ايدك</Text>
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
                    <Image style={Styles.profile} source={require('../../assets/team1.jpg')} resizeMode="cover"></Image>

                </View>
            </View>
        </>
    )
}

export default ReviewCard;
const Styles = StyleSheet.create({
    profile: {

        width: 100,
        height: 100,
        borderRadius: 100 / 2

    },
})