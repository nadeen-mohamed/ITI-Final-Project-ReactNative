import styles from './OrdersStyle.js';
import chickenMeal from '../../../assets/chicken meal.jpg';
import makronyKofta from '../../../assets/makrony&kofta.jpg';
import cake from '../../../assets/cake.png';
import potatoKofta from '../../../assets/potatoKofta2.jpg';
import gulash from '../../../assets/gulash.jpg';
import mahshiAnab from '../../../assets/mahshiAnab.jpg';
import pashamel from '../../../assets/pashamel.jpg';
import pea from '../../../assets/pea.jpg';
import { useState } from 'react';
import Order from './order';
import Icon from 'react-native-vector-icons/FontAwesome';
//import { Redirect } from 'react-router-dom';
import { View, Text, ScrollView } from 'react-native-web';
export default function Orders() {

  const orders = [
    {
      name: 'علي محمد', meal: chickenMeal, time: '١بعد الظهر ٢/٢٥', details: [
        { food: 'مكرونه بشاميل', note: 'بدون إضافات', count: 1, size: 'وسط', mealImg: pashamel },
        { food: 'بسلة باللحمة', note: 'بدون إضافات ', count: 1, size: 'وسط', mealImg: pea }
      ]
    },
    {
      name: 'دعاء عوض', meal: makronyKofta, time: '٣ عصراً ٢/٢٧ ', details: [
        { food: 'مكرونه بالكفتة', note: 'إضافة ماشروم', count: 1, size: 'وسط', mealImg: makronyKofta },
        { food: 'كفتة بطاطس', note: 'إضافة جبنه رومي', count: 1, size: 'صغير', mealImg: potatoKofta }
      ]
    },
    {
      name: 'محمود توفيق', meal: potatoKofta, time: '٣ عصراً غداً', details: [
        { food: 'محشي ورق عنب', note: 'إضافة ليمون خفيف', count: 1, size: 'وسط', mealImg: mahshiAnab },
        { food: 'فراخ وأرز بسمتي', note: 'بدون إضافات', count: 1, size: 'عائلي', mealImg: chickenMeal }
      ]
    },
    {
      name: 'هدي مجدي', time: '٦ مساءاً ٢٩ /٢', details: [
        { food: 'كيكة الفراولة', note: 'سكر مظبوط', count: 1, size: 'عائلي', mealImg: cake },
        { food: 'جلاش حلو', note: 'بدون فسدق', count: 1, size: 'وسط', mealImg: gulash }
      ]
    }
  ]

  let activeOrder = [null,null,null,null]
  const [activeOrderState, setActiveOrderState] = useState(activeOrder)
 const changeActive = (status) => {
    activeOrder = [null,null,null,null]
    activeOrder[status]= styles.orderActive
    setActiveOrderState(activeOrder)
  }

  return (
    <ScrollView>
    <View style={styles.ordersCon1}>
      <View style={{flexDirection:'row'}}>
        <View style={styles.ordersCon2}>
          <Text style={{fontSize:22,fontWeight:'bold'}}>طلباتي <Icon name="clipboard" color='#87a087' size={22}></Icon></Text>
        </View>
      </View>

      <View style={{margin:18}}>
        {
          orders.map((order, idx) => {
            return (
              <View key = {idx}>
              <Order data={order} index={idx} var={activeOrderState} action={changeActive} />
              </View>
            )
          })
        }
      </View>
    </View>
    </ScrollView>
  )
}