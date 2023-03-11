import {StyleSheet, View, ScrollView ,Pressable } from "react-native";
import FoodCard from "../FoodCard/FoodCard";
import Header from "../Header/Header";



export default function Home({navigation}) {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header/>
       
        
        <FoodCard nv={navigation}/>

      </View>
      </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom:35
  },
   
});

