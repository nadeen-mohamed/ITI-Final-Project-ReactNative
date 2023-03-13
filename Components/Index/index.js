
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, View, Image, Button ,TouchableOpacity} from "react-native";
import CustomerRating from "../CustomerRating";
import FooterSection from "../FooterSection";
import DownloadApp from "../DownloadApp";

function Index() {


    return (
        <ScrollView>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
{/* 
                <View style={{ width: 100, height: 100, marginTop: 10 }} >
                    <Text style={{ marginTop: 18, fontSize: 18 }}>الاكيلة</Text>
                </View> */}

                <Image style={{ width: 50, height: 50, borderRadius:'50%'  ,marginRight:'10px', marginTop:'10px'}} source={require('../../assets/logo.png')}></Image>



            </View>

            <View style={{ flex: 2, flexDirection: 'column', justifyContent: 'flex-start' }}>

                <Image style={{ width: 250, height: 190, alignSelf:'center' }} source={require('../../assets/hero.png')}></Image>
                <Text style={{ textAlign: 'center', fontSize: 22, color: 'orange',fontWeight:'bold' }}>نحن نقدم لك مذاقك الخاص &#129316;</Text>
                <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5 }}>نقدم لك طعامك المفضل بشكل صحي ونضيف</Text>

            </View>

            <View style={{ flex: -1, flexDirection: 'column', justifyContent: 'flex-start' , margin:'auto',marginTop:'30px' }}>

                <View style={{ marginTop: 20 }}>
                    <Text style={{ textAlign: 'center', fontSize: 23, marginTop: 20 ,color: 'orange',fontWeight:'bold' }}>نحن أكثر من مجرد خدمة متعددة</Text>
                    <Text style={{ textAlign: 'center', fontSize: 15, marginTop: 5, }}>نصنع كل شيء يدويًا بأفضل المكونات الممكنة</Text>
                    <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'flex-ce', margin: 30 }}>

                        <View >
                            <View style={{  alignItems:"center"}}>
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

            <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'flex-start' , margin:'auto'}}>

                <Image style={{ width: 300, height: 300, alignSelf:'center',margin:'auto' }} source={require('../../assets/service.png')}></Image>

            </View>

            <View style={{ flex: -1, flexDirection: 'column', justifyContent: 'center'  , marginTop:'90px'}}>

                <Image style={{ width: 300, height: 300,margin:'auto',borderRadius:'30%' }} source={require('../../assets/Eat.jpg')}></Image>
                <Text style={{ textAlign: 'center', fontSize: 25, color: 'orange', marginTop: 5 ,fontWeight:'bold'}}>محتار تتعشي إيه!؟ 🙄</Text>
                <Text style={{ textAlign: 'center', fontSize: 14, marginTop: 5 ,marginBottom:10}}>عندنا هتلاقي كل اللي نفسك فيه متشغلش بالك بالتجهيز</Text>
                < TouchableOpacity  style={Styles.submitBtn}>
                                <Text style={Styles.submitBtnTxt}>مقتراحات</Text>
                            </ TouchableOpacity>
                
               
            </View>
           
            <CustomerRating></CustomerRating>
            <DownloadApp/>
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
      
    },
    img: {
        height: 400,
        width: 300,
        alignSelf: 'center',

    },
    submitBtn: {
        backgroundColor: "orange",
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15,
        width:'50%',
        margin:'auto'
    },
    submitBtnTxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    }
})