

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

    const [data, setData] = useState({
        name: props.cookerpersonal.fullName,
        type: props.cookerpersonal.typeofworkcooker && props.cookerpersonal.typeofworkcooker,
        details: props.cookerpersonal.detailscooker ? props.cookerpersonal.detailscooker : "تفاصيل عني",
        address: props.cookerpersonal.address,
        tele: props.cookerpersonal.phone,

        Apoint: props.cookerpersonal.pmcooker ? props.cookerpersonal.pmcooker : "3",

    });



    return (
        <>
        

            <Formik
                initialValues={{ name: "", details: "", Apoint: "", type: "", tele: "", address: "" }}
                validationSchema={Yup.object({
                    name: Yup.string()
                        .min(3, 'يجب الا يقل الاسم عن 3 حروف')
                        .max(20, 'لقد تجاوزت الحد الاقصي ')
                        .required(' يجب ادخال الاسم  '),
                        details: Yup.string()
                        .min(3, 'يجب الا يقل الاسم عن 3 احرف')
                        .max(20, 'لقد تجاوزت الحد الاقصي ')

                        .required('يجب اخال اسم العائلة'),
                    type: Yup.string()
                        .max(15, 'Must be 15 characters or less')
                        .required('ادخل صورتك '),
                    Apoint: Yup.string()

                        .required('برجاء ادخال  مواعيد العمل'),
                        address: Yup.string()
                        .min(50, 'يجب الا يقل الاسم عن 50 احرف')

                        .required('برجاء ادخال تفاصيل اكتر'),
                })}
                onSubmit={(values) => {
                    try {

                        updateDoc(doc(db, "cookers", `${JSON.parse(localStorage.getItem("user")).uid}`), {
                            fullName: values.name,
                            typeofworkcooker: values.type,
                            detailscooker: values.details,
                            address: values.address,
                            phone: values.tele,
                            timestamP: myserverTimestamp,
                      userName: user.displayName,
                      userid: user.uid,
                            pmcooker: values.Apoint,
                            
                        });
                        console.log(values +'bhbhbhbh')
                      


                    } catch(error) {
                        console.log(error);
                    }

                }}

            >
                  {props => (
                    <>
                    <View style={styles.wrapper}>
                        <StatusBar barStyle={'light-content'} />

                        <View style={styles.formContainer}>
                            <Text style={styles.title}>تعديل الملف الشخصي </Text>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={props.handleChange("name")} style={styles.inputStyle} placeholder=" ادخل اسمك " defaultValue={data.name}></TextInput>
                                 {props.touched.name && props.errors.name ? (<Text style={styles.errorTxt}>{props.errors.name} </Text>) : null}
                            </View>
                          <View style={styles.inputWrapper}>
                                <TextInput onChangeText={props.handleChange("tele")} style={styles.inputStyle} placeholder=" رقم التليفون" defaultValue={data.tele}></TextInput>
                                {props.touched.tele && props.errors.tele ? (<Text style={styles.errorTxt}>{props.errors.tele} </Text>) : null}
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={props.handleChange("address")} style={styles.inputStyle} placeholder=" العنوان " defaultValue={data.address}></TextInput>
                                {props.touched.address && props.errors.address ? (<Text style={styles.errorTxt}>{props.errors.address} </Text>) : null}
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={props.handleChange("Apoint")} style={styles.inputStyle} placeholder="مواعيد العمل" defaultValue={data.Apoint}></TextInput>
                                {props.touched.Apoint && props.errors.Apoint ? (<Text style={styles.errorTxt}>{props.errors.Apoint} </Text>) : null}
                            </View>
                            <View style={styles.inputWrapper}>
                                <TextInput onChangeText={props.handleChange("details")} style={styles.inputStyle} placeholder="اسم الأكلة" defaultValue={data.details}></TextInput>
                                {props.touched.details && props.errors.details ? (<Text style={styles.errorTxt}>{props.errors.details} </Text>) : null}
                            </View> 

                            < TouchableOpacity onPress={props.handleSubmit} style={styles.submitBtn}>
                                <Text style={styles.submitBtnTxt}>حــــفـــظ</Text>
                            </ TouchableOpacity>
                             {/* <Button color="green" onPress={props.handleSubmit} title="حفظ" /> */}
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
