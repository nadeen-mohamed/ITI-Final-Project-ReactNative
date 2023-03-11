
import { useEffect, useState } from 'react';


import { collection,  onSnapshot,   query ,orderBy, limit} from 'firebase/firestore';
import { db } from '../../../firebase';
import { useSelector } from 'react-redux';
import { View,StyleSheet} from 'react-native';
import Box from './box';
export default function FoodCard(){
    const [allfood, setallFood] = useState([])
   const [editedFood, setEDitedFood] = useState([])
  //  const myFilterValue=useSelector((state)=>state)

   useEffect(() => {
   

        const q = query(collection(db, "foods"), orderBy("timestamP", "desc"));
        onSnapshot(q, (snapshot) => {
          const data = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id,
          }));
          setallFood(data);
          setEDitedFood(data);
            
          })
    
    
        }, [])



        // useEffect(()=>{
   
        //   setEDitedFood(allfood&&myFilterValue?.currentFilter!="all"?allfood.filter(ele=>ele.foodCateogry==myFilterValue.currentFilter):allfood)
       

        // },[myFilterValue])
    
// let arr =['','','','','','']
// myFilterValue&&setFood(food.filter(ele=>ele.cteogry==myFilterValue.currentFilter))



  /* {console.log(food)} */
   
    // console.log(myFilterValue)
    
/*editedFood?.map(ele=><View><Box  element={ele}/></View>)*/
return(
    <View>
       {editedFood?.map(ele=><View ><Box  element={ele}/></View>)}
    </View>
)

}
/*const styles = StyleSheet.create({
  FoodCardForUser:{
    
  }
})*/