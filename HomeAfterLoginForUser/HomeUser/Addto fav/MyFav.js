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

import Material from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';

const MyFav = () => {



 
   

    return (
      <TouchableOpacity
      
        activeOpacity={0.9}
        style={{
          width: '100%',
          height: 180,
          justifyContent: 'center',
          alignItems: 'center',
        }}
       
        >
        <View
          style={{
            width: '90%',
            height: 160,
            backgroundColor:'white',
            borderRadius: 20,
            elevation: 4,
            position: 'relative',
            padding: 15,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View style={{marginBottom: 50}}>
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
                style={{fontSize: 18, color: 'black'}}
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
                textAlign:'center'
              }}>
            بيتزا
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: 'black',
                opacity: 0.5,
                textAlign:'center',
                marginTop:'15'
                
              }}>
        بيتزا محشيه كل انواع الجبن ومحشيه الاطراف
            </Text>
          </View>
          <View style={{width: 150, height: 150, marginRight: -45, borderRadius:'400px'}}>
            <Image
            source={require('../../../assets/photo_2023-02-14_19-47-11.jpg')}
              style={{
                width: '100%',
                height: '100%',
                resizeMode: 'contain',
                borderRadius:'400px'
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
                marginBottom:10
              }}>
              <AntDesign
                name="star"
                style={{fontSize: 30, color: 'orange', paddingRight: 5}}
              />
               <AntDesign
                name="star"
                style={{fontSize: 30, color: 'orange', paddingRight: 5}}
              /> 
               <AntDesign
                name="star"
                style={{fontSize: 30, color: 'orange', paddingRight: 5}}
              />
               <AntDesign
                name="star"
                style={{fontSize: 30, color: 'orange', paddingRight: 5}}
              />
               <AntDesign
                name="star"
                style={{fontSize: 30, color: 'orange', paddingRight: 5}}
              />
                         </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

 


export default MyFav;




  