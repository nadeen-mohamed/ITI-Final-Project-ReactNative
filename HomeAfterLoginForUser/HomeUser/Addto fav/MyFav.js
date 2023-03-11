import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import { doc, onSnapshot, updateDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';

import { db } from '../../../firebase';
import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyFav = () => {

  
  let user=JSON.parse(localStorage.getItem('user'))
  const [favFoodInfo, setFavFoodInfo] = useState([])

  useEffect(() => {
    const q = doc(db, "users", user.uid);
    onSnapshot(q, (snapshot) => {
     console.log(snapshot.data(), "fav food info")
     setFavFoodInfo( snapshot.data().favoriteFood )
      })

  },[])
 
  console.log(favFoodInfo)

  const removeFav = (item) =>{
    let removeArr = favFoodInfo?.filter(ele=> ele != item)

    const q = doc(db, "users", user.uid);
    updateDoc(q, {
      favoriteFood:(removeArr),
    })
      .then((q) => {
        console.log(
          "An item has been removed from an existing Field"
        );
      })
      .catch((error) => {
        console.log(error);
      });
  }





  return (
    
    <>
    {
        favFoodInfo?.map((item) => {
          return (
   
      <TouchableOpacity

        activeOpacity={0.9}
        style={{
          width: '90%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: '0px',
        }}

      >
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor: 'white',
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{ marginBottom: 50 }}>
            <View
              style={{
                width: 50,
                height: 50,
                backgroundColor: 'orange',
                borderTopRightRadius: 20,
                borderBottomLeftRadius: 20,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',

                }}>
                <Entypo
                  name="trash"
                  style={{ fontSize: 18, color: 'black' }}
                  onPress={()=>removeFav(item)}
                />
                {/* <Text
                style={{
                  fontSize: 20,
                  color:'black',
                  opacity: 0.8,
                  marginLeft: 5,
                }}>
              إزاله الأكلة من المفضلة
              </Text> */}
              </View>
            </View>

            <Text
              style={{
                fontSize: 22,
                color: "black",
                fontWeight: 'bold',
                paddingTop: 10,
                textAlign: 'center'
              }}>
              {item.foodName}
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                opacity: 0.5,
                textAlign: 'center',
                marginTop: '15',
                flexWrap: 'wrap'

              }}>
              {item.foodDiscription}
            </Text>
          </View>
          <View style={{ width: 140, height: 140, marginRight: -40, borderRadius: '50%' }}>
            <Image
              source={item.foodImg[0]}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'cover',
                borderRadius: '50%'
              }}
            />
          </View>
          <View
            style={{
              position: 'absolute',
              bottom: 0,
              flexDirection: 'row',
              alignItems: 'center',
            }}>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginLeft: 20,
                marginBottom: 10
              }}>
              <AntDesign
                name="star"
                style={{ fontSize: 30, color: 'orange', paddingRight: 5 }}
              />
              <AntDesign
                name="star"
                style={{ fontSize: 30, color: 'orange', paddingRight: 5 }}
              />
              <AntDesign
                name="star"
                style={{ fontSize: 30, color: 'orange', paddingRight: 5 }}
              />
              <AntDesign
                name="star"
                style={{ fontSize: 30, color: 'orange', paddingRight: 5 }}
              />
              <AntDesign
                name="star"
                style={{ fontSize: 30, color: 'orange', paddingRight: 5 }}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
        )
      })
    }

     
    </>
  );
};




export default MyFav;




