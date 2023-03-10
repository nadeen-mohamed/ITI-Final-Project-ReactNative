
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, I18nManager } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";

function SignUPComponent() {


    return (
        <ScrollView>
        <view style={Styles.container}>

        
      
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 10, color: "green", fontFamily: 'Open Sans' }}>انشاء حساب</Text>
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

                        <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={Styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="الاسم الثاني"
                                keyboardType="numeric"
                            />
                            <TextInput
                                style={Styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="الاسم الاول"
                                keyboardType="numeric"
                            />

                        </View>
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
                        <TextInput
                            style={Styles.input2}
                            onChangeText={handleChange('email')}
                            onBlur={handleBlur('email')}
                            value={values.email}
                            placeholder="رقم التليفون"
                            keyboardType="email-address"
                        />


                        <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={Styles.input}
                                onChangeText={handleChange('email')}
                                onBlur={handleBlur('email')}
                                value={values.email}
                                placeholder="العنوان"
                                keyboardType="numeric"
                            />
                            <Picker

                                style={Styles.peacker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="بني سويف" value="بني سويف" />
                                <Picker.Item label="المنبا" value="المنياs" />
                            </Picker>


                        </View>
                        <Text style={{ margin: 10 }}>نوع الحساب</Text>
                        <Picker

                            style={Styles.peacker}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                        >
                            <Picker.Item label=" طباخ" value=" طباخ" />
                            <Picker.Item label="مستخدم" value="مستخدم" />
                        </Picker>
                        <Button color="green" onPress={handleSubmit} title="انشاء" />
                    </View>

                )}
            </Formik>
   

        </view>
        </ScrollView>
    )
}

export default SignUPComponent;
const Styles = StyleSheet.create({
    container: {
        width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin:'auto',
  padding:'auto'

    },
    input: {
        height: 60,
        width: "100%",
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
        margin: 10,

        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
    },
    peacker: {
        height: 60,
        width: "97%",
        borderRadius: 40,
        margin: 12,

        borderWidth: 1,
        padding: 10,
        borderColor: 'green'
    },
    img: {
        height: 400,
        width: 300,
        alignSelf: 'center',
    },
    form: {
        borderWidth: 5,
        width: '100%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
  margin:'auto',
  padding:'auto',
        borderColor: "green"
    }

})