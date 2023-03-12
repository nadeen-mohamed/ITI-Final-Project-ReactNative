
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager,Image,ImageBackground } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";
import Icon from 'react-native-vector-icons/Entypo';
import HeaderComponent from "./Header";
import CookInfoComponent from "./CookerInfo";
import ReviewCard from "./ClientReview";
import { doc, getDocs,onSnapshot,query,collection } from 'firebase/firestore';
import { db } from '../../firebase';

function CookHomeComponent(){
    let user=JSON.parse(localStorage.getItem('user'))
    const [userInfo, setuserInfo] = useState('')
  
  
    useEffect(() => {
      const q = doc(db, "cookers",`${user.uid}`);
      onSnapshot(q, (snapshot) => {
       console.log(snapshot.data())
       setuserInfo( snapshot.data() )
        })
  
   },[])

    return(
        <>
        <ScrollView>

         <HeaderComponent Name = {userInfo?.fullName} photo={userInfo.photo && userInfo.photo} typeofworkcooker={userInfo?.typeofworkcooker}></HeaderComponent>
         <CookInfoComponent  alldata={userInfo} phone={userInfo?.phone} address={userInfo?.address} country={userInfo?.country}></CookInfoComponent>
         <ReviewCard></ReviewCard>
        </ScrollView>
    
    </>
      

    )
}

export default CookHomeComponent;
