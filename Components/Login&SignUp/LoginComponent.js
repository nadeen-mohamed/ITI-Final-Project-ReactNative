
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";

function LoginComponent(){


    return(
        <>
        <Text style={{ textAlign: 'center', fontSize: 30, margin: 10, color: "green", fontFamily: 'Open Sans' }}>تسجيل الدخول</Text>
        <Formik style={Styles.form}
            initialValues={{ email: '' }}
            onSubmit={values => console.log(values)}
        >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
                <View style={{
                    flex: -1, flexDirection: 'column', justifyContent: 'center', margin: 30,
                    borderWidth: 2,
                    borderRadius: 10,
                    borderColor: 'green',

                }}>

                   
                    <TextInput
                        style={Styles.input2}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="البريد الالكتروني"
                        keyboardType="email-address"
                    />
                    <TextInput
                        style={Styles.input2}
                        onChangeText={handleChange('email')}
                        onBlur={handleBlur('email')}
                        value={values.email}
                        placeholder="كلمة السر "
                        keyboardType="email-address"
                    />
                  


                 
                  
                    <Button color="green" onPress={handleSubmit} title="تسجيل" />
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
        margin: 10,
        padding: 10,

    },
    input: {
        height: 60,
        width: "97%",
        borderRadius: 40,
        margin: 12,

        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
    },
    input2: {
        height: 60,
        width: "97%",
        borderRadius: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
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
        borderColor: "green"
    
       
            }})