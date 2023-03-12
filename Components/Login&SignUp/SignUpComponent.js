
import axios from "axios";
import React, { useEffect, useState } from "react";

import { ScrollView, Text, StyleSheet, Pressable } from "react-native";
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { Picker } from "react-native-web";
import { auth , db, myserverTimestamp  } from '../../firebase'
import {onAuthStateChanged ,createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { arrayUnion, doc, setDoc } from "@firebase/firestore";
import Icon from 'react-native-vector-icons/FontAwesome';
import * as Yup from "yup";
import { async } from "@firebase/util";

import * as ImagePicker from 'expo-image-picker';

function SignUPComponent({navigation}) {
    const [image,setImage]=useState([])
    // const [uploading, setUploading] = useState(false)
     const pickImage = async () => {
         let result = await ImagePicker.launchImageLibraryAsync({
           mediaTypes: ImagePicker.MediaTypeOptions.All,
           allowsEditing: true,
           aspect: [4, 3],
           quality: 1,
         });
         console.log(result.assets[0].uri)
         setImage(result.assets[0].uri) 
       }

    return (
        <ScrollView>
        <View style={Styles.container}>

        
      
            <Text style={{ textAlign: 'center', fontSize: 30, margin: 10, color: "green", fontFamily: 'Open Sans' }}>انشاء حساب</Text>
            <Formik style={Styles.form}
                initialValues={{ email: '', firstname:'' ,secondname:'' ,password:'',phone:'',address:'' ,setSelectedValue1 :'',setSelectedValue2:'', photo:''}}
                validationSchema={Yup.object({
                    firstname : Yup.string()
                        .min(2, 'يجب الا يقل الاسم عن 3 احرف')
                        .required('برجاء ادخال اسم الاول'),
                     secondname: Yup.string()
                        .min(2, 'يجب الا يقل الاسم عن 3 احرف')
                        .required('برجاء ادخال الاسم الثاني '),
                    email: Yup.string()
                     .matches(/^[a-z0-9._]+@gmail\?|.com|.org|.net|.edu|.eg$/,'برجاء ادخال البريد الالكتروني صحيحا')
                     .required('برجاء ادخال البريد الالكتروني '),
                    password: Yup.string()
                        .min(8, "يجب أن تدخل كلمة المرور")
                        .matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%?-_*&]).{8,}/, 'كلمة المرور يجب أن تحتوي علي الأقل ٨ أحرف إنجليزية، حرف كبير علي الأقل، حرف صغير علي الأقل، رقم واحد علي الأقل، علامة ترقيم واحدة علي الأقل')
                        .required('برجاء ادخال كلمه المرور '),
                    phone: Yup.string()
                        .matches( /^01[0125][0-9]{8}$/,"يجب أن تدخل رقم الموبايل")
                        .required('برجاء ادخال رقم التليفون صحيحا '),
                    address: Yup.string()
                    .matches(/^\S[a-zA-Z\u0600-\u06FF,-\s\d][\s\d\a-zA-Z\u0600-\u06FF,-]{1,50}$/i,"العنوان غير صحيح")
                    .required("يجب أن تدخل العنوان"),
                    setSelectedValue1:Yup.string()
                    .required('يجب أن تختر بلدتك'),
                    setSelectedValue2:Yup.string()
                    .required('يجب أن تختر نوع حسابك '),

                    
                })}
                onSubmit={async values =>{
                    console.log(values)
                   

                    const res = await createUserWithEmailAndPassword(
                                 auth,
                                values.email,
                               values.password
                             );
               

                    await updateProfile(res.user, {
                                displayName: `${values.firstname} ${values.secondname}@${values.setSelectedValue2}`,
                                //photoURL: arrayUnion(image),
                              });
                  
                            //   console.log("res.kindUser",data.kindUser)
                            await  setDoc(doc(db, `${values.setSelectedValue2 == "cook" ? "cookers":"users"}`, res.user.uid), {
                                userid: res.user.uid,
                                fullName: values.firstname + " " + values.secondname,
                                email:  values.email,
                                phone: values.phone,
                                address: values.address,
                                kindUser:values.setSelectedValue2,
                                country:values.setSelectedValue1,
                                photo: image,
                                registerTime: myserverTimestamp
                              })
                              console.log(res)
                              console.log(res.user);
                              let y= res.user.displayName
                               let x=res.user&&res.user.displayName.split('@')[1]
                               localStorage.setItem("user",JSON.stringify(res.user))

                               onAuthStateChanged(auth, (user) => {
                    
                                if (user.displayName.split('@')[1]=="user") {
                                  console.log(user);
                        
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
                           
                
                
                
                } }
            >
                {({   errors, touched, handleChange, handleBlur,handleSubmit,values }) => (
                    <View style={{
                        flex: -1, flexDirection: 'column', justifyContent: 'center', margin: 30,
                        borderWidth: 2,
                        borderRadius: 10,
                        borderColor: 'green',

                    }}>

                        <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={Styles.input}
                                onChangeText={handleChange('secondname')}
                                onBlur={handleBlur('secondname')}
                                value={values.secondname}
                               placeholder="الاسم الثاني"
                                keyboardType="numeric"
                            />
                            {touched.secondname && errors.secondname ? (<Text style={Styles.errorTxt}>{errors.secondname} </Text>) : null}

                            <TextInput
                                 style={Styles.input}
                                 onChangeText={handleChange('firstname')}
                                onBlur={handleBlur('firstname')}
                                value={values.firstname}
                                placeholder="الاسم الاول"
                                keyboardType="numeric"
                            />
                          {touched.firstname && errors.firstname ? (<Text style={Styles.errorTxt}>{errors.firstname} </Text>) : null} 


                        </View>
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
                            onChangeText={handleChange('password')}
                            onBlur={handleBlur('password')}
                            value={values.password}
                            placeholder="كلمة السر "
                            keyboardType="email-address"
                        />
                      {touched.password && errors.password ? (<Text style={Styles.errorTxt}>{errors.password} </Text>) : null}

                        <TextInput
                            style={Styles.input2}
                             onChangeText={handleChange('phone')}
                            onBlur={handleBlur('phone')}
                            value={values.phone}
                            placeholder="رقم التليفون"
                            keyboardType="email-address"
                        />
                     {touched.phone && errors.phone ? (<Text style={Styles.errorTxt}>{errors.phone} </Text>) : null}



                        <View style={{ flex: -1, flexDirection: 'row', justifyContent: 'center' }}>
                            <TextInput
                                style={Styles.input}
                                onChangeText={handleChange('address')}
                                onBlur={handleBlur('address')}
                                value={values.address}
                                placeholder="العنوان"
                                keyboardType="numeric"
                            />
                        {touched.address && errors.address ? (<Text style={Styles.errorTxt}>{errors.address} </Text>) : null}
                         
                            <Picker

                                style={Styles.peacker}
                                onValueChange={handleChange('setSelectedValue1')}

                            >
                                <Picker.Item label="بني سويف" value="بني سويف" />
                                <Picker.Item label="المنيا" value="المنيا" />
                                <Picker.Item label="الفيوم" value="الفيوم" />
                            </Picker>
                            {touched.setSelectedValue1 && errors.setSelectedValue1 ? (<Text style={Styles.errorTxt}>{errors.setSelectedValue1} </Text>) : null}



                        </View>
                        <Text style={{ margin: 10 }}>نوع الحساب</Text>
                        <Picker

                            style={Styles.peacker}
                            onValueChange={handleChange('setSelectedValue2')}
                        >
                            <Picker.Item label=" طباخ" value="cook" />
                            <Picker.Item label="مستخدم" value="user" />
                        </Picker>
                        {touched.setSelectedValue2 && errors.setSelectedValue2 ? (<Text style={Styles.errorTxt}>{errors.setSelectedValue2} </Text>) : null}
                       
                    <Pressable onPress={pickImage} disabled={image.length>=1 ? true : false}>
                    <Icon name='cloud-upload' size={30} color={'rgb(155, 193, 155)'} style={{ textAlign:'center'}}></Icon>
                    </Pressable>
                        <Button color="green" onPress={handleSubmit} title="انشاء" />
                    </View>

                )}
            </Formik>
   

        </View>
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
    },
    errorTxt: {
        color: 'red',
        fontSize: 12
    },

})

// import { useNavigation } from '@react-navigation/core'
// import React, { useEffect, useState } from 'react'
// import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
// import { auth } from '../../firebase'
// import { createUserWithEmailAndPassword } from "firebase/auth";



// const LoginScreen = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
 

//   const navigation = useNavigation()

// //   useEffect(() => {
// //     const unsubscribe = auth.onAuthStateChanged(user => {
// //       if (user) {
// //         navigation.replace("Home")
// //       }
// //     })

// //     return unsubscribe
// //   }, [])

//   const handleSignUp = () => {
//     console.log(email,password)
//     const res = createUserWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );


//       console.log(res.user);
//     // auth
//     //   .createUserWithEmailAndPassword(email, password)
//     //   .then(userCredentials => {
//     //     const user = userCredentials.user;
//     //     console.log('Registered with:', user.email);
//     //   })
//     //   .catch(error => alert(error.message))
//   }

//   const handleLogin = () => {
//     // auth
//     //   .signInWithEmailAndPassword(email, password)
//     //   .then(userCredentials => {
//     //     const user = userCredentials.user;
//     //     console.log('Logged in with:', user.email);
//     //   })
//     //   .catch(error => alert(error.message))
//   }

//   return (
//     <KeyboardAvoidingView
//       style={styles.container}
//       behavior="padding"
//     >
//       <View style={styles.inputContainer}>
//         <TextInput
//           placeholder="Email"
//           value={email}
//           onChangeText={text => setEmail(text)}
//           style={styles.input}
//         />
//         <TextInput
//           placeholder="Password"
//           value={password}
//           onChangeText={text => setPassword(text)}
//           style={styles.input}
//           secureTextEntry
//         />
//       </View>

//       <View style={styles.buttonContainer}>
//         <TouchableOpacity
//           onPress={handleLogin}
//           style={styles.button}
//         >
//           <Text style={styles.buttonText}>Login</Text>
//         </TouchableOpacity>
//         <TouchableOpacity
//           onPress={handleSignUp}
//           style={[styles.button, styles.buttonOutline]}
//         >
//           <Text style={styles.buttonOutlineText}>Register</Text>
//         </TouchableOpacity>
//       </View>
//     </KeyboardAvoidingView>
//   )
// }

// export default LoginScreen

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   inputContainer: {
//     width: '80%'
//   },
//   input: {
//     backgroundColor: 'white',
//     paddingHorizontal: 15,
//     paddingVertical: 10,
//     borderRadius: 10,
//     marginTop: 5,
//   },
//   buttonContainer: {
//     width: '60%',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 40,
//   },
//   button: {
//     backgroundColor: '#0782F9',
//     width: '100%',
//     padding: 15,
//     borderRadius: 10,
//     alignItems: 'center',
//   },
//   buttonOutline: {
//     backgroundColor: 'white',
//     marginTop: 5,
//     borderColor: '#0782F9',
//     borderWidth: 2,
//   },
//   buttonText: {
//     color: 'white',
//     fontWeight: '700',
//     fontSize: 16,
//   },
//   buttonOutlineText: {
//     color: '#0782F9',
//     fontWeight: '700',
//     fontSize: 16,
//   },
// })