import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function CustomerRating() {
    return (
        <View>
            <Text style={styles.title}>
                الاراء
            </Text>
            <Text style={styles.text}> ماذا يقول عملائنا <Text style={styles.text}> عن خدمتنا &#128525;</Text></Text>

            <Image
                source={require('../assets/shape.svg')}
                style={styles.img}
            />
            <View style={styles.testimonialsbox}>
            <Image
                    source={require('../assets/6.png')}
                    style={styles.imag}
                /> 
              
                <Text style={styles.icon}>
                    <Icon
                        name='star' size={30} color={'orange'} style={{ margin: '6px' }} ></Icon>
                    <Icon
                        name='star' size={30} color={'orange'} style={{ margin: '6px' }} ></Icon>
                    <Icon
                        name='star' size={30} color={'orange'} style={{ margin: '6px' }} ></Icon>
                    <Icon
                        name='star' size={30} color={'orange'} style={{ margin: '6px' }} ></Icon>
                    <Icon
                        name='star-o' size={30} color={'orange'} style={{ margin: '6px' }} ></Icon>

                </Text>
               
                <View >
                    <Text style={styles.testimonialstitle} >
                        جويريا حكيم
                    </Text>
                    <Text>الاكل نظيف  وهناك سرعه في التوصيل </Text>

                </View>
              
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 220,
        height: 50,
        alignSelf: 'center',

    },
    text: {
        color: "black",
        fontSize: '30px',

        padding: 10,
        alignSelf: 'center',
        display: 'block'
    },

    title: {

        alignSelf: 'center',
        color: '#ff8243',
        fontSize: '40px',

    },
    testimonialsbox: {
        marginTop: 50,
        width: '40%',
        paddingBottom: 30 ,
        paddingRight:30,
     borderRadius: 30,
        margin: '50 0 30',
        backgroundColor: 'white',
        boxShadow: 'rgba(227, 127, 12, 0.35) 0px 5px 15px',
        transition: '0.8s cubic-bezier(0.22, 0.78, 0.45, 1.02)',
        display: 'flex',
        justifyContent: "space-between",

        marginBottom: 25,

    },
    icon: {
        justifyContent: "space-between",
        alignSelf: 'center',
        paddingTop: -300,
        paddingLeft:200,
    },

    testimonialstitle: {
     
      textAlign:'center',
      paddingLeft:200,
        alignSelf: 'center'

    },

    testimonialsp: {
        
        margin: 0,
        alignSelf: 'center'

    },
    imag: {
        width: 200,
   
        borderRadius: 400,
        alignSelf: 'left',
    }
})
