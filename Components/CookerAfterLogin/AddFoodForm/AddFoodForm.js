import React from 'react'
import {StyleSheet,StatusBar,Text,View,Image,TextInput,Button,TouchableOpacity, Pressable} from "react-native";
import * as Yup from "yup";
import { Formik } from "formik";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Picker } from "react-native-web";
import { uploadBytes } from "firebase/storage";
import { v4 } from "uuid";
import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { arrayUnion, doc, setDoc, updateDoc } from "firebase/firestore";
import { db, myserverTimestamp, storage } from "../../../firebase";
import OrderMeal from '../../../assets/order.jpg';
import * as ImagePicker from 'expo-image-picker';

export default function AddFoodForm() {
    const [image,setImage]=useState([])
    const [uploading, setUploading] = useState(false)
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
          allowsMultipleSelection: true,
          selectionLimit:3
        });
       
        console.log(result.uri)
        
        if(result.assets.length <= 3){
            console.log(result.assets);
           // setImage((previousImages) => previousImages.concat(result.assets[0].uri))
           result.assets.map(item =>{
            return(
                setImage((previousImages) => previousImages.concat(item.uri))   
            )
           })
        }
        else{
            alert('choose one image')
            console.log(result.assets);
        }

       /* await  setDoc(doc(db, "foods", x), {
            foodImg: result.assets[0].uri,
          });*/
        
        //   setImage(result.assets[0].uri)
      }

   /*   const uploadImage = async () => {
        const blob = await new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            resolve(xhr.response);
          };
          xhr.onerror = function() {
            reject(new TypeError('Network request failed'));
          };
          xhr.responseType = 'blob';
          xhr.open('GET', image, true);
          xhr.send(null);
        })
        //const ref = firebase.storage().ref().child(`Pictures/Image1`)
        const ref = ref(storage, `Pictures`);
        const snapshot = ref.put(blob)
        snapshot.on(firebase.storage.TaskEvent.STATE_CHANGED,
          ()=>{
            setUploading(true)
          },
          (error) => {
            setUploading(false)
            console.log(error)
            blob.close()
            return 
          },
          () => {
            snapshot.snapshot.ref.getDownloadURL().then((url) => {
              setUploading(false)
              console.log("Download URL: ", url)
              setImage(url)
              blob.close()
              return url
            })
          }
          )
      }*/
       
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
            //navigation.navigate("Films")
            let user=JSON.parse(localStorage.getItem('user'))
            try {
            let x = `${values.name}${v4()}`;
            setDoc (doc(db, "foods", x), {
                  foodName: values.name,
                  foodCateogry: values.type,
                  bigPrice: values.price,
                  smallPrice: 40,
                  middlePrice: 70,
                  foodDiscription:values.desc,
                  timestamP: myserverTimestamp,
                  userName: user.displayName,
                  userid: user.uid,
                  foodImg: image
                })
        

                  console.log(image,'imaaage')
               

              /*  myimages.map((ele) => {
                  const imageRef = ref(storage, `foodimages/${ele.name + v4()}`);
                  uploadBytes(imageRef, ele).then((snapshot) => {
                    getDownloadURL(snapshot.ref).then(async (url) => {
                      await updateDoc(doc(db, "foods", x), {
                        foodImg: arrayUnion(url),
                      });
                    });
                  });
                });*/
        
             /*   for(let i=0;i<8;i++){
                  // console.log(e.target[i].value='');
                  if(e.target[i].name!=('btnremove')){
        
                   e.target[i].value=""
                   
                  }
                }*/
                /*  setData({
                    foodName: "",
                    foodTextarea: "",
                    cateogry: "",
                    bigPrice: 0,
                    middlePrice: 0,
                    smallPrice: 0,
                    images: [],
                  })*/
                  /*setSelectedImages([])
                  textarea.current.value=""
               //  console.log(     textarea.current.textContent, textarea, textarea.current,textarea.textContent)*/

             
              }
               catch (err){
                console.log("errrrrrrrrrrrrrrrrrrrrr",err);
              }

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
                <Pressable onPress={pickImage} disabled={image.length>=3 ? true : false}>
                    <Icon name='cloud-upload' size={50} color={image.length>=3? 'rgb(255, 0, 0)':'rgb(155, 193, 155)'} style={{ textAlign:'center'}}></Icon>
                    {image.length>=3 &&<Text style={{color:'red'}}>الحد الأقصي للصور ٣ </Text>}
                    </Pressable>
                <Image source={OrderMeal} style={{width:100}} />
               {/* <Image source={{uri:image}} />*/}
                {/*!uploading ? <Button title='Upload Image' onPress={uploadImage} />: <ActivityIndicator size={'small'} color='black' />*/}
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
