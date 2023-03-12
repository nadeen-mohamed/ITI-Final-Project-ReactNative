import React from 'react'
import { View, Text, Image, Pressable, ScrollView } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DetailsCookerStyle'
import { useState,useEffect } from 'react';

import { doc, getDoc, updateDoc,arrayUnion} from 'firebase/firestore';
import { db } from '../../../firebase';

export default function DetailsCooker({navigation , route}) {
    // const  { id } = useParams(); 
    // console.log(id) //اكله%20من%20عمو%20مصطفي33a09d9f-eb34-405e-a32b-3869948ef3a1

    console.log(route.params.id , 'idddddddddddddddd')
    const id = route.params.id;

    const [food1, setCartfood1] = useState('')
   const [wordData, setWordData] = useState('')
   const [wordData1, setWordData1] = useState('')
   const [wordData2, setWordData2] = useState('')
   useEffect(() => {
    const getdata = async()=>{
       const docRef = doc(db, "foods", id);
   await  getDoc(docRef)
        .then((docRef) => {
        
            setCartfood1(docRef.data())//{fooname:vfds,}
            setWordData(docRef.data().foodImg[0])
            setWordData1(docRef.data().foodImg[1])
            setWordData2(docRef.data().foodImg[2])
         
        })
        .catch((error) => {
          console.log(error);
        });
    }
     
    getdata()

 

 },[])

 console.log(food1,'foood1')
//  const handleClick = (index) => {
//     console.log(index)
//     const wordSlider = food1.foodImg[index];
//     setWordData(wordSlider)
//   }
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
                        <Image source={wordData} style={styles.Image}/> 
                        </View>
                        <View style={{display:'flex',flexDirection:'row', alignItems:'center' , marginTop:'20px' , justifyContent:'center'}}>
                        <Image source={wordData1} style={{width:'90px',height:'90px', borderRadius: '25px', marginBottom:'15px', marginLeft:'15px'}}/>
                        <Image source={wordData2} style={{width:'90px',height:'90px', borderRadius: '25px', marginBottom: '15px',marginLeft:'15px'}}/>  


                        </View>
                   
                        <View style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                        <View>
                            <Text style={styles.foodName}>{food1?.foodName} </Text>
                            <Text style={styles.foodDesc}> {food1?.foodDiscription} </Text>
                        </View>
                            <View style={styles.priceCon}>
                            <Text style={styles.price}>السعر</Text>
                             <Text style={styles.priceInfo}> {food1?.bigPrice} جنيه مصري  </Text>
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