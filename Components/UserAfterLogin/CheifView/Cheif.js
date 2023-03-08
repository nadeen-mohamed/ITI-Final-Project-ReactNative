/**
 * Created by ggoma on 2016. 11. 25..
 */
import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import ImageCard from './ImageCard';

export default function Cheif({ navigation }) {
    
        return (
            <View style={styles.container}>
                <ScrollView>
                    <ImageCard source={require('../../../assets/team2.jpg') }
                    
                               width={300}
                               height={200}
                            //    titleColor={'black'}
                               descColor={'yellow'}
                               titlestyle={styles.desc}
                               title={
                                <Text  onPress={() => navigation.navigate("Aboutcheif")}>
ادم محروس
                                </Text>
                            
                            }
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
           
                           </Text>}
                              
                               / >
                    <ImageCard source={require('../../../assets/team4.jpg')}
                               width={300}
                               height={200}
                               titleColor={'black'}
                               descColor={'yellow'}
                               
                               title={
                                <Text  onPress={() => navigation.navigate("Aboutcheif")}>
عائشة
                                </Text>
                            
                            }
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
           
                           </Text>}/>

                    <ImageCard source={require('../../../assets/team6.jpg')}
                               width={300}
                               height={200}
                               titleColor={'black'}
                               descColor={'yellow'}
                               title={
                                <Text  onPress={() => navigation.navigate("Aboutcheif")}>
مريم
                                </Text>
                            
                            }
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                               <Icon
                                   name='star' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
           
                           </Text>}
                               
                               />
                
                
                </ScrollView>
            </View>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40
    },
    desc:{
        alignItems:'center', 
        textAlign:'center',
        color:'blue'
    }
});