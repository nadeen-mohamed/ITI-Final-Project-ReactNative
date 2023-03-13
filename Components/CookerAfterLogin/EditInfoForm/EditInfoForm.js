

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
import { db , myserverTimestamp} from "../../../firebase"
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";

export default function EditInfoForm(props) {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user,'rrrrrrrrrrrrrrr')

    const [data, setData] = useState({
        name: props.cookerpersonal.fullName,
        type: props.cookerpersonal.typeofworkcooker && props.cookerpersonal.typeofworkcooker,
        details: props.cookerpersonal.detailscooker ? props.cookerpersonal.detailscooker : "تفاصيل عني",
        address: props.cookerpersonal.address,
        tele: props.cookerpersonal.phone,

        Apoint: props.cookerpersonal.pmcooker ? props.cookerpersonal.pmcooker : "3",

    });

  const  handleSubmitee=()=>{
    console.log('nnnnnnnnnnnnnnn')

    }



    return (
        <>
        

            <Formik
                initialValues={{ name: "", details: "", Apoint: "",  tele: "", address: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(2, 'يجب الا يقل الاسم عن 2 حروف')
                        .max(20, 'لقد تجاوزت الحد الاقصي ')
                        .required(' يجب ادخال الاسم  '),
                   tele: Yup.string()
                        .min(11, 'يجب الا يقل رقم التليفون عن 11 رقم')
                        .max(11, 'لقد تجاوزت الحد الاقصي ')

                        .required('يجب ادخال التفاصيل '),
                    address: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('ادخل عنوانك '),
                    Apoint: Yup.string()

                        .required('برجاء ادخال  مواعيد العمل'),
                   details: Yup.string()
                        .min(20, 'يجب الا يقل الاسم عن 50 احرف')

                        .required('برجاء ادخال تفاصيل اكتر'),
                })}
                onSubmit={(values) => {
                    console.log(values, 'berfore')
                    try {

                        updateDoc(doc(db, "cookers",props.cookerpersonal.userid ), {

                            fullName: values.name,
                            // typeofworkcooker: values.type,
                            detailscooker: values.details,
                            address: values.address,
                            phone: values.tele,
                           
                            pmcooker: values.Apoint
                            
                        });
                        console.log(values +'bhbhbhbh')
                      


                    } catch(error) {
                        console.log(error,'errrrrrrrrrrrrrrrrrrrrr');
                    }
                    console.log(values, 'a')

                }}

            >
                {({  errors, touched,handleChange, handleBlur, handleSubmit, values }) => (
                    <View style={styles.wrapper}>
                        <StatusBar barStyle={'light-content'} />

                        <View style={styles.formContainer}>
                            <Text style={styles.title}>تعديل الملف الشخصي </Text>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={handleChange("name")} style={styles.inputStyle} placeholder=" ادخل اسمك " defaultValue={data.name}></TextInput>
                                {touched.name && errors.name ? (<Text style={styles.errorTxt}>{errors.name} </Text>) : null}
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={handleChange("tele")} style={styles.inputStyle} placeholder=" رقم التليفون" defaultValue={data.tele}></TextInput>
                                {touched.tele && errors.tele ? (<Text style={styles.errorTxt}>{errors.tele} </Text>) : null}

                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={handleChange("address")} style={styles.inputStyle} placeholder=" العنوان " defaultValue={data.address}></TextInput>
                                {touched.address && errors.address ? (<Text style={styles.errorTxt}>{errors.address} </Text>) : null}

                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={handleChange("Apoint")} style={styles.inputStyle} placeholder="مواعيد العمل" defaultValue={data.Apoint}></TextInput>
                                {touched.Apoint && errors.Apoint ? (<Text style={styles.errorTxt}>{errors.Apoint} </Text>) : null}

                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={handleChange("details")} style={styles.inputStyle} placeholder="اسم الأكلة" defaultValue={data.details}></TextInput>
                                {touched.details && errors.details ? (<Text style={styles.errorTxt}>{errors.details} </Text>) : null}
                            </View>

                            {/* < TouchableOpacity onPress={handleSubmit} style={styles.submitBtn}>
                                <Text style={styles.submitBtnTxt}>حــــفـــظ</Text>
                            </ TouchableOpacity> */}
                             <Button color="green" onPress={handleSubmit} title="حفظ" />
                        </View>



                    </View>
                    </>
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
