

import React from 'react'
import {
    StyleSheet,
    StatusBar,
    Text,
    View,
    Image,
    TextInput,
    Button,
    TouchableOpacity,
} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from "react-native-web";

import { useEffect, useRef, useState } from "react";
import { db } from "../../../firebase"
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

export default function EditInfoForm(props) {
    const user = JSON.parse(localStorage.getItem("user"));
  
    const textarea = useRef('')
    

       const [data, setData] = useState({
        fullName: props.cookerpersonal.alldata.fullName,
      
        detailscooker:props.cookerpersonal.alldata.detailscooker ? props.cookerpersonal.alldata.detailscooker :"تفاصيل اكتر",
        address: props.cookerpersonal.alldata.address,
        tele: props.cookerpersonal.alldata.phone,
        // amcooker: props.cookerpersonal.amcooker ? props.cookerpersonal.amcooker : "",
        Apoint : props.cookerpersonal.alldata.pmcooker ? props.cookerpersonal.alldata.pmcooker : "3",
        
      });
    return (
    <>
    {console.log(data)} 
    
        <Formik
            initialValues={{ name: "",detailscooker:"", Apoint:"", type:"",tele:"", address:""}}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'يجب الا يقل الاسم عن 3 حروف')
                    .max(20, 'لقد تجاوزت الحد الاقصي ')
                    .required(' يجب ادخال الاسم  '),
                desc: Yup.string()
                    .min(3, 'يجب الا يقل الاسم عن 3 احرف')
                    .max(20, 'لقد تجاوزت الحد الاقصي ')

                    .required('يجب اخال اسم العائلة'),
                type: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('ادخل صورتك '),
                Apoint: Yup.string()

                    .required('برجاء ادخال  مواعيد العمل'),
                    info: Yup.string()
                    .min(50, 'يجب الا يقل الاسم عن 50 احرف')
                    
                    .required('برجاء ادخال تفاصيل اكتر'),
            })}
            onSubmit={async values => {
                console.log(values+"dataaaaaaaaaaaaa")
                try {
    
                   await updateDoc(doc(db, "cookers", `${JSON.parse(localStorage.getItem("user")).uid}`), {
            
                      fullName: data.fullName,
                    
                      detailscooker : data.detailscooker,
                      address: data.address,
                      phone: data.tele,
                      Apoint: data.Apoint,
                   
            
            
                    });
                    console.log('bbbbbbbbb')
            
            
                        // for(let i=0;i<8;i++){
                        //   // console.log(e.target[i].value='');
                        //   if(e.target[i].name!=('btnremove')){
            
                        //    e.target[i].value=""
            
                        //   }
                        // }
                        //   setData(   {
                        //     namecooker: "",
                        //     typeofworkcooker: "",
                        //     detailscooker:"",
                        //     addresscooker: "",
                        //     phonecooker: "",
                        //     amcooker: 0,
                        //     pmcooker:0,
                        //     amcookerselect: "",
                        //     pmcookerselect:"",
                        //   })
                        
                        //   textarea.current.value=""
                    //  console.log(     textarea.current.textContent, textarea, textarea.current,textarea.textContent)
            
            
            
                  } catch (err) {
                    console.log(err);
                  }
                
            }}
         
        >
             {props => (
                <View style={styles.wrapper}>
                    <StatusBar barStyle={'light-content'} />

                    <View style={styles.formContainer}>
                        <Text style={styles.title}>تعديل الملف الشخصي </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("name")}  value={data.fullName} style={styles.inputStyle} placeholder="الاسم  ">  </TextInput>
                            {props.touched.name && props.errors.name ? (<Text style={styles.errorTxt}>{props.errors.name} </Text>) : null}
                        </View>
                        {/* <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("tele")} style={styles.inputStyle} placeholder=" رقم التليفون">{data.tele}</TextInput>
                            {props.touched.tele && props.errors.tele ? (<Text style={styles.errorTxt}>{props.errors.tele} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("address")} style={styles.inputStyle} placeholder=" العنوان ">{data.address}</TextInput>
                            {props.touched.address && props.errors.address ? (<Text style={styles.errorTxt}>{props.errors.address} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("Apoint")} style={styles.inputStyle} placeholder="مواعيد العمل">{data.Apoint}</TextInput>
                            {props.touched.Apoint && props.errors.Apoint ? (<Text style={styles.errorTxt}>{props.errors.Apoint} </Text>) : null}

                        </View> */}
                        {/* <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("detailscooker")} style={styles.inputStyle} placeholder="تفاصيل اكتر">  {props.cookerpersonal.detailscooker&&data.detailscooker}</TextInput>
                            {props.touched.detailscooker && props.errors.detailscooker ? (<Text style={styles.errorTxt}>{props.errors.detailscooker} </Text>) : null}

                        </View> */}
                   
                        < TouchableOpacity onPress={props.handleSubmit} style={styles.submitBtn}>
                            <Text style={styles.submitBtnTxt}>حــــفـــظ</Text>
                        </ TouchableOpacity>
                    </View>



                </View>
            )}
           
        </Formik>
        </> 
    )
}
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: 'green',
        paddingHorizontal: 15,
        borderWidth: 3

    },
    formContainer: {
        // backgroundColor: '#faf9f1',
        padding: 20,
        borderRadius: 20,
        width: '100%',
        borderColor: 'green'

    },
    title: {
        color: 'rgb(155, 193, 155)',
        fontSize: 20,
        marginBottom: 15,
        fontWeight: '400',
        textAlign: 'center'
    },
    inputWrapper: {
        marginBottom: 15,
    },
    inputStyle: {
        borderColor: 'green',
        padding: 10,
        borderRadius: 10,
        borderWidth: 1,
        // backgroundColor:'white'

    },
    errorTxt: {
        color: 'red',
        fontSize: 12
    },
    submitBtn: {
        backgroundColor: "green",
        padding: 10,
        justifyContent: 'center',
        borderRadius: 15
    },
    submitBtnTxt: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
        fontWeight: '700'
    }
})
