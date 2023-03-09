

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
export default function EditFoodForm() {
    return (
        <Formik
            initialValues={{ desc: "", name: "", type: "", price: "" }}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(3, 'جب الا يقل اسم الاكلة  عن 3 احرف')
                    .max(50, 'لقد تجاوزت الحد الاقصي ')
                    .required('برجاء ادخال اسم الأكلة'),
                desc: Yup.string()
                    .min(20, ' يجب الا يقل وصف الأكله عن 20 حرف ')
                    .max(100, 'لقد تجاوزت الحد الاقصي ')

                    .required('برجاء ادخال وصف الأكلة'),
                type: Yup.string()
                    .max(15, 'Must be 15 characters or less')
                    .required('برجاء ادخال نوع الأكلة'),
                price: Yup.string()

                    .required('برجاء ادخال سعر الأكلة'),
            })}
            onSubmit={(values) => {
                navigation.navigate("Films")
            }}
        // onsubmit 
        >
            {props => (
                <View style={styles.wrapper}>
                    <StatusBar barStyle={'light-content'} />

                    <View style={styles.formContainer}>
                        <Text style={styles.title}>تعديل أكله </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("name")} style={styles.inputStyle} placeholder="اسم الأكلة"></TextInput>
                            {props.touched.name && props.errors.name ? (<Text style={styles.errorTxt}>{props.errors.name} </Text>) : null}
                        </View>
                        <View style={styles.inputWrapper}>
                            <Picker style={styles.inputStyle}


                                onValueChange={props.handleChange("type")}
                            >
                                <Picker.Item label="تصنيف الأكلة  " value="تصنيف الأكلة " />
                                <Picker.Item label="بيتزا " value="بيتزا " />
                                <Picker.Item label="فراخ" value="فراخ" />
                                <Picker.Item label="لحمة" value="لحمة" />
                                <Picker.Item label="جبن" value="جبن" />
                            </Picker>
                            {props.touched.type && props.errors.type ? (<Text style={styles.errorTxt}>{props.errors.type} </Text>) : null}


                            <View style={{ borderColor: 'green', borderStyle: 'dashed', marginTop: 10, padding: 10, borderRadius: 10, borderWidth: 1 }}>

                                <Icon name='cloud-upload' size={50} color={'rgb(155, 193, 155)'} style={{ textAlign: 'center' }} ></Icon>

                            </View>
                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("desc")} style={styles.inputStyle} placeholder="تفاصيل  الأكلة"></TextInput>
                            {props.touched.desc && props.errors.desc ? (<Text style={styles.errorTxt}>{props.errors.desc} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("price")} style={styles.inputStyle} placeholder="  ادخل سعر الأكلة"></TextInput>
                            {props.touched.price && props.errors.price ? (<Text style={styles.errorTxt}>{props.errors.price} </Text>) : null}

                        </View>

                        < TouchableOpacity onPress={props.handleSubmit} style={styles.submitBtn}>
                            <Text style={styles.submitBtnTxt}>حــــفـــظ</Text>
                        </ TouchableOpacity>
                    </View>



                </View>
            )}
        </Formik>
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
