
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager,TouchableOpacity} from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";
import * as Yup from "yup";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth , db, myserverTimestamp  } from '../../firebase'


function LoginComponent({navigation}){


    return(
        <>
        <Formik style={Styles.form}
            initialValues={{ email: '',password:'' }}
            validationSchema={Yup.object({
                email: Yup.string()
                 .matches(/^[a-z0-9._]+@gmail\?|.com|.org|.net|.edu|.eg$/,'برجاء ادخال البريد الالكتروني صحيحا')
                 .required('برجاء ادخال البريد الالكتروني '),
                password: Yup.string()
                    .min(8, "يجب أن تدخل كلمة المرور")
                    .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/, 'كلمة المرور يجب أن تحتوي علي الأقل ٨ أحرف إنجليزية، حرف كبير علي الأقل، حرف صغير علي الأقل، رقم واحد علي الأقل، علامة ترقيم واحدة علي الأقل')
                    .required('برجاء ادخال كلمه المرور '),

            })}
            onSubmit={ async values => {
                   console.log(values)
               
                    const res= await signInWithEmailAndPassword(auth, values.email, values.password);
                    let y= res.user.displayName
                    // await console.log(res.user.uid,y);
                     let x=res.user&&res.user.displayName.split('@')[1]
                     localStorage.setItem("user",JSON.stringify(res.user))
                  //   sessionStorage.setItem(`authorized${x}`,true)
                  
                    console.log(res.user)
                    console.log(x ,'typpppppe')
              
              
              
                    onAuthStateChanged(auth, (user) => {
                    
                      if (user.displayName.split('@')[1]=="user") {
                        console.log(user,'usssssssssssssssssss');
              
                        dispatch(authStatuesForUser(true))
                        sessionStorage.setItem('authUser',true)
                        sessionStorage.removeItem('authCooker')
                              
                      } 
              
              
              
                      else if(user.displayName.split('@')[1]=="cook"){
                        dispatch(authStatuesForCooker(true))
                        sessionStorage.setItem('authCooker',true)
                        sessionStorage.removeItem('authUser')
                      }
                      else {
                        console.log("else",user);
                      }
                    }
                    )
                    
                   await res.user&&(x=='user' ? navigation.navigate("NavbarForUser"):navigation.navigate("NavbarForCook"))
              
                 
            }}
        >
            {({  errors, touched,handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{
                    flex: -1, flexDirection: 'column', justifyContent: 'center', margin: 30,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'green',
                    fontFamily: 'Open Sans'

                }}>

                   <Text style={{ textAlign: 'center', fontSize: 30, margin: 10,  color: 'rgb(155, 193, 155)', fontFamily: 'Open Sans' }}>تسجيل الدخول</Text>


                   
                    <TextInput
                        style={Styles.input2}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="البريد الالكتروني"
                        keyboardType="email-address"
                    />
                    {touched.email && errors.email ? (<Text style={Styles.errorTxt}>{errors.email} </Text>) : null}

                    <TextInput
                        style={Styles.input2}
                        secureTextEntry={true}
                        onChangeText={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}

                        placeholder="كلمة السر "
                        keyboardType="email-address"
                    />
                    {touched.password && errors.password ? (<Text style={Styles.errorTxt}>{errors.password} </Text>) : null}

                  


                 
                  
                    {/* <Button color="green" onPress={handleSubmit} title="تسجيل" style={Styles.submitBtnTxt} /> */}
                    < TouchableOpacity onPress={handleSubmit} style={Styles.submitBtn}>
                            <Text style={Styles.submitBtnTxt}>تسجيل</Text>
                        </ TouchableOpacity>
                </View>

            )}
        </Formik>
    </>
      

    )
}

export default LoginComponent;
const Styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        backgroundColor: '#000',
        borderWidth: 3,
        borderColor: 'green',
        // margin: 10,
        // padding: 10,
        fontFamily: 'Open Sans',
        alignItems:'center',
        justifyContent:'center',
        alignSelf:'center',
        margin:'auto'


    },
    input: {
        height: 60,
        width: "93%",
        borderRadius: 40,
        margin: 12,

        borderWidth: 1,
        padding: 10,
        borderColor: 'green',
        fontFamily: 'Open Sans'
    },
    input2: {
        height: 60,
        width: "93%",
        borderRadius: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'green',
        fontFamily: 'Open Sans',
        textAlign:'right'
    },
    peacker: {
        height: 40,
        width: 410,
        borderRadius: 40,
        margin: 12,
        borderWidth: 1,

        borderColor: 'green'
    },
    img: {
        height: 400,
        width: 300,
        alignSelf: 'center',
    },
    form: {
        borderWidth: 5,
        padding: 10,
        borderColor: "green",
        fontFamily: 'Open Sans'
    
       
            },
            submitBtn: {
                backgroundColor: "green",
                padding: 10,
                justifyContent: 'center',
                borderRadius: 25,
                width:200,
                textAlign:'center',
                alignItems:'center',
                margin:'auto',
                marginBottom :20,
                marginTop:20
            },
            submitBtnTxt: {
                color: 'white',
                textAlign: 'center',
                fontSize: 18,
                fontWeight: '700',
                fontFamily: 'Open Sans'
            },
            errorTxt: {
                color: 'red',
                fontSize: 12
            },
        })