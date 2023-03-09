
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
function CookHome(){

    return(
        <>
        <ScrollView>

         <HeaderComponent></HeaderComponent>
         <CookInfoComponent></CookInfoComponent>
         <ReviewCard></ReviewCard>
        </ScrollView>
    
    </>
      

    )
}

export default CookHome;
