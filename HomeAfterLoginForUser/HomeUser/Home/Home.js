import {StyleSheet, View, ScrollView } from "react-native-web";
import FoodCard from "../FoodCard/FoodCard";
import Header from "../Header/Header";

export default function Home() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Header/>
        <FoodCard/>
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

