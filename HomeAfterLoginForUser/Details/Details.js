import React from 'react'
import { View, Text, Image, Pressable, ScrollView } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DetailsStyle.js'
import food from '../../assets/potatoKofta.jpg'
import { useState,useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc, updateDoc,arrayUnion} from 'firebase/firestore';
import { db } from '../../firebase';
// style={{ flexDirection: 'column'}}
export default function Details() {
    const  { id } = useParams(); 
    console.log(id) //اكله%20من%20عمو%20مصطفي33a09d9f-eb34-405e-a32b-3869948ef3a1
    const [food1, setCartfood1] = useState('')
   const [wordData, setWordData] = useState('')
   useEffect(() => {
    const getdata = async()=>{
       const docRef = doc(db, "foods", id);
   await  getDoc(docRef)
        .then((docRef) => {
        
            setCartfood1(docRef.data())//{fooname:vfds,}
            setWordData(docRef.data().foodImg[0])
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
     
    getdata()

 

 },[])

 console.log(food1)
 const handleClick = (index) => {
    console.log(index)
    const wordSlider = food1.foodImg[index];
    setWordData(wordSlider)
  }
  let arr=[];//rr.push => ["",""]
  const [fav, setFav] = useState([])
  const addToFavBtn = (favEle) => {
    let user=JSON.parse(localStorage.getItem('user'))
    console.log( user.uid,"id")

  const q = doc(db, "users", user.uid);
  updateDoc(q, {
    favoriteFood:arrayUnion((favEle)),// arr 
  })
    .then((q) => {
      console.log(
        "A New Document Field has been added to an existing document"
      );
    })
    .catch((error) => {
      console.log(error);
    });
}
console.log(fav,"favArr")
    return (
        <>
        <ScrollView>
          
            <View >
          

            {/* {food1.foodImg&&food1.foodImg.map((data, i) =>
               
                     {
                        <> */}
                        <View style={styles.imageCon}>
                        <Image source={food} style={styles.Image}/> 
                        </View>
                   
                        <View style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                        <View>
                            <Text style={styles.foodName}>{food1?.foodName} </Text>
                            <Text style={styles.foodDesc}> {food1?.foodDiscription} </Text>
                        </View>
                            <View style={styles.priceCon}>
                            <Text style={styles.price}>السعر</Text>
                             <Text style={styles.priceInfo}> {food1?.bigPrice}  </Text>
                            </View>
                            <View style={styles.btnCon}>
                              <Pressable style={[styles.foodCart, {marginRight:10}]}><Icon name="shopping-cart" size={20} style={styles.icon}></Icon></Pressable>
                              <Pressable style={styles.foodCart}><Icon name="star" size={20} style={styles.icon}></Icon></Pressable>
                            </View>
                        </View>
                        {/* </>
                     }
            )} */}
            </View>
            </ScrollView>
            </>
    )
}