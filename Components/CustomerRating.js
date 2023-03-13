import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {  Card, Button } from 'react-native-elements';
export default function CustomerRating() {
   

    return (
        <>
          <View style={{marginTop:'70px'}}>
           <Text style={styles.title}>
               الاراء
           </Text>
           <Text style={styles.text}> ماذا يقول عملائنا <Text style={styles.text}> عن خدمتنا &#128525;</Text></Text>

           <Image
               source={require('../assets/shape.svg')}
               style={styles.img}
           />

           {/* <Text style={styles.text}>____________________________</Text> */}
           
           
           
           </View> 
       <View style={{display:'flex', flexDirection:'column', width:'100%'}}>
        
          <View style={styles.mainCardView}>
            <View style={{flexDirection: 'row',width:'50%'}}>
              <View style={styles.subCardView}>
                <Image
                source={require('../assets/6.png')}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 80,
                    width: 80,
                    borderRadius:200,
                    alignItems:'left'
                  }}
                />
              </View>
              <View style={{marginLeft: 12}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'nunitoBold',
                    textTransform: 'capitalize',
                    textAlign:'center'
                  }}>
                جويريا حكيم
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    margin:'3px',
               
                    color: 'gray',
                    fontWeight: 'bold',
                    fontFamily: 'nunitoBold',
                    textTransform: 'capitalize',
                  }}>
                الاكل نظيف  وهناك سرعه في التوصيل 
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    paddingLeft:50,
                    borderWidth: 0,
                  
                  }}>
                 
               <Text style={styles.icon}>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>

                </Text>
                 
                </View>
              </View>
            </View>
          
          </View>
          
          <View style={styles.mainCardView}>
            <View style={{flexDirection: 'row', alignItems: 'center',width:'50%'}}>
              <View style={styles.subCardView}>
                <Image
                source={require('../assets/4.png')}
                  resizeMode="contain"
                  style={{
                    borderRadius: 25,
                    height: 80,
                    width: 80,
                    borderRadius:200
                  }}
                />
              </View>
              <View style={{marginLeft: 12}}>
                <Text
                  style={{
                    fontSize: 15,
                    color: 'black',
                    fontWeight: 'bold',
                    fontFamily: 'nunitoBold',
                    textTransform: 'capitalize',
                    textAlign:'center'
               
                  }}>
             لمياء مسعد
                </Text>
                <Text
                  style={{
                    fontSize: 12,
                    margin:'3px',
                       color: 'gray',
                       fontWeight: 'bold',
                       fontFamily: 'nunitoBold',
                       textTransform: 'capitalize',
                  }}>
                     الاكل جيد جدا لكن التوصيل غير سريع
                </Text>
                <View
                  style={{
                    marginTop: 4,
                    paddingLeft:50,
                    borderWidth: 0,
                
                  
                  }}>
                 
               <Text style={styles.icon}>
               <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>
                    <Icon
                        name='star-o' size={18} color={'orange'} style={{ marginTop: '6px' , marginBottom:'6px' }} ></Icon>

                </Text>
                 
                </View>
              </View>
            </View>
          
          </View>
          </View>
          </>
      );
}


const styles = StyleSheet.create({
    
    mainCardView: {
      height: 100,
      alignItems: 'center',
      justifyContent: 'center',
 
      borderRadius: 15,
      shadowColor: 'shadow',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 8,
  
  marginLeft:15,
      paddingRight: 14,
      marginTop: 6,
      marginBottom: 6,

      marginRight: 16,
      backgroundColor:'white'
    },
    main2:{
        backgroundColor:'white',
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 15,
   
        marginTop: 6,
        marginBottom: 6,
  
       
    },
    subCardView: {
      height: 50,
      width: 50,
      borderRadius: 25,
   
      borderWidth: 1,
      borderStyle: 'solid',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img: {
                width: 180,
                height: 30,
                alignSelf: 'center',
        
            },
            text: {
                color: "black",
                fontSize: '18px',
        
                padding: 10,
                alignSelf: 'center',
                display: 'block'
            },
        
            title: {
        
                alignSelf: 'center',
                color: '#ff8243',
                fontSize: '25px',
        
            },
   
  });