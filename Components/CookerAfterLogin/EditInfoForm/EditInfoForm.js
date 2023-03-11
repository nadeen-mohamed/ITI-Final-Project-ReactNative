

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
import DocumentPicker from "react-native-document-picker";



export default function EditInfoForm() {

    

     
        async function docPicker() {
       
         try {
           const res = await DocumentPicker.pickMultiple({
     
              type: [DocumentPicker.types.allFiles],
           });
         
           this.uploadAPICall(res);//here you can call your API and send the data to that API
         } catch (err) {
           if (DocumentPicker.isCancel(err)) {
             console.log("error -----", err);
           } else {
             throw err;
           }
         }
       }
     
    return (
        <Formik
            initialValues={{ desc: "", name: "", type: "", price: "" }}
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
            onSubmit={(values) => {
                navigation.navigate("Films")
            }}
         
        >
            {props => (
                <View style={styles.wrapper}>
                    <StatusBar barStyle={'light-content'} />

                    <View style={styles.formContainer}>
                        <Text style={styles.title}>تعديل الملف الشخصي </Text>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("name")} style={styles.inputStyle} placeholder="الاسم الاول "></TextInput>
                            {props.touched.name && props.errors.name ? (<Text style={styles.errorTxt}>{props.errors.name} </Text>) : null}
                        </View>
                     
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("desc")} style={styles.inputStyle} placeholder="  الاسم الثاني"></TextInput>
                            {props.touched.desc && props.errors.desc ? (<Text style={styles.errorTxt}>{props.errors.desc} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("Apoint")} style={styles.inputStyle} placeholder="مواعيد العمل"></TextInput>
                            {props.touched.Apoint && props.errors.Apoint ? (<Text style={styles.errorTxt}>{props.errors.Apoint} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                            <TextInput onChangeText={props.handleChange("info")} style={styles.inputStyle} placeholder="تفاصيل اكتر"></TextInput>
                            {props.touched.info && props.errors.info ? (<Text style={styles.errorTxt}>{props.errors.info} </Text>) : null}

                        </View>
                        <View style={styles.inputWrapper}>
                           
                           {props.touched.type && props.errors.type ? (<Text style={styles.errorTxt}>{props.errors.type} </Text>) : null}

                           

                           {/* upload image */}



                           <View
                  style={{
                      width: "100%",
                      
                      justifyContent: "center",
                    
                    }}
                  >
                    <TouchableOpacity
                      /* onPress={() =>docPicker()} */
                      
                    >
                     <Icon name='cloud-upload' size={50} color={'rgb(155, 193, 155)'} style={{ textAlign: 'center' }} ></Icon>

                    
                    </TouchableOpacity>
                  </View>
                           {/* <View style={{ borderColor: 'green', borderStyle: 'dashed', marginTop: 10, padding: 10, borderRadius: 10, borderWidth: 1 }}>

                               <Icon name='cloud-upload' size={50} color={'rgb(155, 193, 155)'} style={{ textAlign: 'center' }} ></Icon>

                           </View> */}
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
