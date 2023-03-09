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
import AddFormPopUp from '../AddFoodForm/AddFormPopUp';
import DeleteEat from '../DeletePOPup/DeleteEat';
import Card from './Card';

export default function FoodCard({ navigation }) {
    
        return (
            <View style={styles.container}>
                <ScrollView>
                    <Card source={require('../../../assets/potatoKofta.jpg') }
                    
                               width={300}
                               height={200}
                            //    titleColor={'black'}
                               descColor={'yellow'}
                               titlestyle={styles.desc}
                              
                          
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                              <DeleteEat/>
                              
                              <AddFormPopUp/>
                                <Icon
                                   name='info' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                              
           
                           </Text>}
                              
                               / >
                    <Card source={require('../../../assets/gulash.jpg')}
                               width={300}
                               height={200}
                               titleColor={'black'}
                               descColor={'yellow'}
                               
                             
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                               <Icon
                                   name='trash' size={20} color={'orange'} style={{ margin: '6px' }} onPress={() => navigation.navigate("Index")} ></Icon>
                               <Icon
                                   name='edit' size={20} color={'orange'} style={{ margin: '6px' }} onPress={() => navigation.navigate("Index")}  ></Icon>
                               <Icon
                                   name='info' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                           </Text>}/>

                    <Card source={require('../../../assets/photo_2023-02-14_19-47-58.jpg')}
                               width={300}
                               height={200}
                               titleColor={'black'}
                               descColor={'yellow'}
                              
                               backColor={'rgba(0, 0, 0, .04)'}
                               description={ <Text style={styles.icon}>
                               <Icon
                                   name='trash' size={20} color={'orange'} style={{ margin: '6px' }} onPress={() => navigation.navigate("Index")} ></Icon>
                               <Icon
                                   name='edit' size={20} color={'orange'} style={{ margin: '6px' }} onPress={() => navigation.navigate("Index")}  ></Icon>
                               <Icon
                                   name='info' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
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