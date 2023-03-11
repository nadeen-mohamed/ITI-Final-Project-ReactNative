import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Details from "./HomeAfterLoginForUser/Details/Details";
import Home from "./HomeAfterLoginForUser/HomeUser/Home/Home";

import FoodCard from "./Components/CookerAfterLogin/Cheif's Eat/FoodCard";

const Stack = createNativeStackNavigator();
export default function StackNavCooker() {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator> 
        <Stack.Screen  name="FoodCard" component={FoodCard} />
          <Stack.Screen  name="Details" component={Details} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}