// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { Formik } from "formik";



// import * as Yup from "yup";
// import {
//     StyleSheet,
//     Text,
//     View,
//     Image,
//     TextInput,
//     Button,
//     TouchableOpacity,
// } from "react-native";

// export default function AddFoodForm() {

//     return (
//         <View style={styles.container}>
//             <Text style={styles.title}>🤤اضف اكله جديده</Text>
//             <StatusBar style="auto" />

//             <Formik
//                 initialValues={{ email: "", name: "" }}
//                 validationSchema={Yup.object({
//                     name: Yup.string()
//                         .max(15, 'Must be 15 characters or less')
//                         .required('يرجي ادخال اسم الاكله'),
//                     email: Yup.string().required('يرجي ادخال نوع الاكله'),
//                 })}
//                 onSubmit={(values) => {
//                     navigation.navigate("Films")
//                 }}
//             // onsubmit 
//             >
//                 {props => (

//                     <View>
//                         <TextInput onChangeText={props.handleChange("email")} placeholder="enter email" style={styles.inputView} />

//                         {props.touched.email && props.errors.email ? (<Text style={styles.error}>{props.errors.email} </Text>) : null}

//                         <TextInput onChangeText={props.handleChange("name")} placeholder="enter name" style={styles.inputView} />

//                         {props.touched.name && props.errors.name ? (<Text style={styles.error}>{props.errors.name} </Text>) : null}


//                         <TouchableOpacity onPress={props.handleSubmit} style={styles.loginBtn}>
//                             <Text style={styles.loginText} >حــــفـــظ </Text>
//                         </TouchableOpacity>

//                     </View>


//                 )}


//             </Formik>
//         </View>
//     );
// }
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         borderWidth: 5,
//         padding: 10,
//         borderColor: "green",
//         alignItems: "center",
//         justifyContent: "center",
//     },

//     inputView: {
//         backgroundColor: "white",
//         color: 'orange',
//         borderRadius: 30,
//         width: "100%",
//         height: 45,
//         marginBottom: 20,
//         alignItems: "center",
//         height: 50,
//         flex: 1,
//         padding: 10,
//         marginLeft: 20,
//     },
//      input: {
//         height: 40,
//         width: 250,
//         borderRadius: 40,
//         margin: 12,

//         borderWidth: 1,
//         padding: 10,
//         borderColor: 'green'
//     },
//     input2: {
//         height: 40,
//         width: 390,
//         borderRadius: 40,
//         margin: 12,
//         borderWidth: 1,
//         padding: 10,
//         borderColor: 'green'
//     },
//     peacker: {
//         height: 40,
//         width: 390,
//         borderRadius: 40,
//         margin: 12,
//         borderWidth: 1,

//         borderColor: 'green'
//     },
//     error: {
//         color: 'red',
//         fontSize: 20,
//         alignItems: 'center',
//         marginLeft: 70,
//     },
//     forgot_button: {
//         height: 30,
//         marginBottom: 30,
//     },
//     loginBtn: {
//         width: "80%",
//         borderRadius: 25,
//         height: 50,
//         alignItems: "center",
//         justifyContent: "center",
//         marginTop: 25,
//         marginLeft: 20,
//         color: 'white',
//         backgroundColor: "green",
//         width: "90%",
//     },
//     title:{
//         fontSize:30,
//         fontWeight:'bold',
//         marginBottom:20
//     }
// });

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
export default function AddFoodForm() {
    return (
        <Formik
        initialValues={{desc: "", name: "", type:"", price:""}}
        validationSchema= {Yup.object({
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
          onSubmit ={(values) => {
            navigation.navigate("Films")
          }}
        // onsubmit 
        >
             { props => (
        <View style={styles.wrapper}>
            <StatusBar barStyle={'light-content'} />

            <View style={styles.formContainer}>
                <Text style={styles.title}>اضف اكله جديده🤤</Text>
                <View style={styles.inputWrapper}>
                    <TextInput  onChangeText={props.handleChange("name")} style={styles.inputStyle} placeholder="اسم الأكلة"></TextInput>
                    { props.touched.name && props.errors.name ? (<Text style={styles.errorTxt}>{ props.errors.name} </Text> ) : null}
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
                    { props.touched.type && props.errors.type ? (<Text style={styles.errorTxt}>{ props.errors.type} </Text> ) : null}
              

                    <View style={{borderColor:'green', borderStyle:'dashed',  marginTop: 10, padding: 10, borderRadius: 10,borderWidth: 1}}>

                        <Icon name='cloud-upload' size={50} color={'rgb(155, 193, 155)'} style={{ textAlign:'center' }} ></Icon>

                    </View>
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput  onChangeText={props.handleChange("desc")}  style={styles.inputStyle} placeholder="تفاصيل  الأكلة"></TextInput>
                    { props.touched.desc && props.errors.desc ? (<Text style={styles.errorTxt}>{ props.errors.desc} </Text> ) : null}
             
                </View>
                <View style={styles.inputWrapper}>
                    <TextInput  onChangeText={props.handleChange("price")}  style={styles.inputStyle} placeholder="  ادخل سعر الأكلة"></TextInput>
                    { props.touched.price && props.errors.price ? (<Text style={styles.errorTxt}>{ props.errors.price} </Text> ) : null}
             
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
