
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button } from "react-native";
import CustomerRating from "../CustomerRating";
import FooterSection from "../FooterSection";

function Index() {


    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>

                <View style={{ width: 100, height: 100, marginTop: 10 }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }}>الاكيلة</Text>
                </View>

                <Image style={{ width: 100, height: 90 }} source={require('../../assets/logo.png')}></Image>



            </View>

            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start', margin: 30 }}>

                <Image style={{ width: 400, height: 300 }} source={require('../../assets/hero.png')}></Image>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'orange' }}>نحن نقدم لك مذاقك الخاص &#129316;</Text>
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 5 }}>نقدم لك طعامك المفضل بشكل صحي ونضيف</Text>

            </View>

            <View style={{ flex: -1, flexDirection: 'column', justifyContent: 'center', margin: 30 }}>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 28, marginTop: 20 }}>نحن أكثر من مجرد خدمة متعددة</Text>
                    <Text style={{ textAlign: 'center', fontSize: 20, marginTop: 5, color: 'orange' }}>نصنع كل شيء يدويًا بأفضل المكونات الممكنة</Text>
                    <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'flex-ce', margin: 30 }}>

                        <View >
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 18 }} >🍗 مشويات</Text>
                                <Text style={{ fontSize: 18 }}>🥙 محاشي</Text>
                                <Text style={{ fontSize: 18 }}>🧁 حلويات</Text>
                                <Text style={{ fontSize: 18 }}>🧃 عصائر</Text>
                            </View>

                        </View>
                        <View style={{ width: 200 }}>

                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 18 }} >🍗 مشويات</Text>
                                <Text style={{ fontSize: 18 }}>🥙 محاشي</Text>
                                <Text style={{ fontSize: 18 }}>🧁 حلويات</Text>
                                <Text style={{ fontSize: 18 }}>🧃 عصائر</Text>
                            </View>
                        </View>
                    </View>
                </View>

            </View>

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start', margin: 30 }}>

                <Image style={{ width: 400, height: 300 }} source={require('../../assets/service.png')}></Image>

            </View>

            <View style={{ flex: -1, flexDirection: 'column', justifyContent: 'center', margin: 30 }}>

                <Image style={{ width: 400, height: 300, borderRadius: 100 }} source={require('../../assets/Eat.jpg')}></Image>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'orange', marginTop: 5 }}>محتار تتعشي إيه!؟ 🙄</Text>
                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 5 ,marginBottom:10}}>عندنا هتلاقي كل اللي نفسك فيه متشغلش بالك بالتجهيز</Text>
                <Button title=" مقتراحات" color="orange"style={{width:50}}></Button>
            </View>
           
            <CustomerRating></CustomerRating>
            <FooterSection></FooterSection>
        </ScrollView>
    )
}

export default Index;
const Styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#000',
        borderWidth: 3,
        borderColor: '#ffd700',
        margin: 10,
        padding: 10
    },
    img: {
        height: 400,
        width: 300,
        alignSelf: 'center',

    }
})