import { View, Image, Text } from 'react-native';
import OrderMeal from '../../../assets/order.jpg';
import styles from './OrdersStyle.js';
export default function Order(props) {
    return (
        <View style={{ flexDirection: 'row' }}>
            <View style={[styles.cardStyle,props.var[props.index]]} onClick={() => props.action(props.index)}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={OrderMeal} style={styles.orderImg} />
                    <View style={styles.txtIn}>
                        <Text style={{ fontWeight: 'bold', fontSize: 14 }}>طلب من {props.data.name}</Text>
                        <Text style={{ color: '#6b6e71', marginTop: 5 }}>إضغط لمعرفة تفاصيل الطلب</Text>
                    </View >
                </View>

                <View style={{ marginTop: 25 }}>
                    {
                        props.data.details.map((item, id) => {
                            return (
                                <View style={styles.boxStyle} key={id}>
                                    <View style={styles.con}>
                                        <Image source={item.mealImg} style={styles.mealImg} />
                                        <View style={styles.orderItem}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>{item.food}</Text>
                                            <Text style={{ color: '#6b6e71' }}>{item.note}</Text>
                                        </View >

                                        <View style={[styles.orderItem, { flexDirection: 'row' }]}>
                                            <Text style={{ fontSize: 14, fontWeight: 'bold' }}>العدد: </Text> <Text>{item.count}</Text>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    <View style={styles.time}>
                        <Text style={{ fontSize: 14, fontWeight: 'bold' }}>التسليم: {props.data.time}</Text>
                    </View >
                </View>
            </View>
        </View>

    )
}