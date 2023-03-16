/**
 * Created by ggoma on 2016. 11. 25..
 */
import React from 'react';
import  { useEffect } from "react";
import { useState } from "react";
import { collection, doc, getDoc, getDocs, onSnapshot, onSnapshotsInSync, query } from 'firebase/firestore';
import { db } from '../../../firebase';

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
import EditFoodFormPopUp from '../EditeFoodForm/EditFoodFormPopUp';
export default function FoodCard({ navigation }) {
    const s=['d','f','j']
    let user = JSON.parse(localStorage.getItem("user"));
    const [userfood, setuserfood] = useState([]);
    const [show,setShow]=useState(true)
    useEffect(() => {
   

        const q = query(collection(db, "foods"));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setuserfood(data);
            
          })
    
     
        }, [])
        console.log(userfood,'fooooooooooooooood')
        return (
            <>
             
            <View style={{borderColor:'green', borderStyle:'dashed',  marginTop: 10, marginBottom: 10, padding: 10, borderRadius: 10,borderWidth: 1,backgroundColor:'white'}}>
<View style={{display:'flex'}}>

<AddFormPopUp/>
</View>


</View>
            <View style={styles.container}>
                <ScrollView>
                {console.log(userfood)}
               { userfood?.filter(ele=>ele.cookerId==user.uid)?.map((CheifItem, index) => {
                
                                return (
                    <Card source={CheifItem.foodImg[0]&&CheifItem.foodImg[0]}
                  
                               width={300}
                               height={200}
                   //    titleColor={'black'}
                               descColor={'yellow'}
                               titlestyle={styles.desc}
                               style={{ObjectFit:'cover',objectPosition:'center'}}
                    
                          title={<Text> 
                            <Text>
                            {CheifItem?.foodName}
                            </Text>
                            </Text>
                           }
                         
                               backColor={'rgba(0, 0, 0, .04)'}
                               icon={ <Text style={styles.icon}>
                              <DeleteEat targetitem={CheifItem}/>
                              
                              <EditFoodFormPopUp  targetEditeItem={CheifItem}  />
                                <Icon onPress={() => navigation.navigate('Details',{id:CheifItem.id})}
                                   name='info' size={20} color={'orange'} style={{ margin: '6px' }} ></Icon>
                              
           
                           </Text>
                         
                        }
                    
                               / >
               
                )})
                }
                </ScrollView>
            </View>
              
            </>
        );
    }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: 40,
        
    },
    desc:{
        alignItems:'center', 
        textAlign:'center',
        color:'blue'
    }
});