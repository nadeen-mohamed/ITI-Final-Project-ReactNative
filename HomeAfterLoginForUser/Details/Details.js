import React from 'react'
import { View, Text, Image, Pressable, ScrollView } from 'react-native-web';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './DetailsStyle.js'
import food from '../../assets/potatoKofta.jpg'
// style={{ flexDirection: 'column'}}
export default function Details() {

    return (
        <ScrollView>
            <View >
                <View style={styles.imageCon}>
                <Image source={food} style={styles.Image}/> 
                </View>
           
                <View style={{ marginRight: 'auto', marginLeft: 'auto' }}>
                <View>
                    <Text style={styles.foodName}>اسم الأكله</Text>
                    <Text style={styles.foodDesc}>وصف الأكله</Text>
                </View>
                    <View style={styles.priceCon}>
                    <Text style={styles.price}>السعر</Text>
                     <Text style={styles.priceInfo}>١٠٠ جنيه مصري</Text>
                    </View>
                    <View style={styles.btnCon}>
                      <Pressable style={[styles.foodCart, {marginRight:10}]}><Icon name="shopping-cart" size={20} style={styles.icon}></Icon></Pressable>
                      <Pressable style={styles.foodCart}><Icon name="star" size={20} style={styles.icon}></Icon></Pressable>
                    </View>
                </View>
            </View>
            </ScrollView>
    )
}