import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./HomeAfterLoginForUser/HomeUser/Home/Home";

import FoodCard from "./Components/CookerAfterLogin/Cheif's Eat/FoodCard";
import DetailsCooker from "./Components/CookerAfterLogin/DetailsCooker/DetailsCooker";

const Stack = createNativeStackNavigator();
export default function StackNavCooker() {

  return (
    <NavigationContainer independent={true}>
        <Stack.Navigator> 
        <Stack.Screen  name="FoodCard" component={FoodCard} />
          <Stack.Screen  name="Details" component={DetailsCooker} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}