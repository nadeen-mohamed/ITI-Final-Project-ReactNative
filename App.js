import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewComponent } from 'react-native';
import Index from "./Components/Index"

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginComponent from './Components/Login&SignUp/LoginComponent';
import SignUPComponent from './Components/Login&SignUp/SignUpComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FooterSection from './Components/FooterSection'
import CustomerRating from './Components/CustomerRating';
import DownloadApp from './Components/DownloadApp';
import { ScrollView } from 'react-native-gesture-handler';


import HeaderComponent from './Components/HomePageCooker/Header';
import CookHome from './Components/HomePageCooker/CookHome';


import FoodCard from './Components/CookerAfterLogin/Cheif\'s Eat/FoodCard';
import DeleteEat from './Components/CookerAfterLogin/DeletePOPup/DeleteEat';
import CookHomeComponent from './Components/HomePageCooker/CookHome';
// import AddFoodForm from './Components/CookerAfterLogin/AddFoodForm/AddFoodForm'
// import AddFoodForm from './Components/CookerAfterLogin/AddFoodForm/AddFoodForm';
// import EditeEat from './Components/CookerAfterLogin/AddFoodForm/EditeEat';

export default function App() {
  const Tab=createBottomTabNavigator();
  return (
    <View style={styles.container}>
      
      
      <NavigationContainer  >
       
          <Tab.Navigator > 
          <Tab.Screen   name="Index" component={Index}  
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
            ),
          }}
          
          />
          
          
          <Tab.Screen name="LoginComponent" component={LoginComponent}  
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" color={'rgb(155, 193, 155)'} size={40} />
            ),
            
          }}
          
          
          />
          <Tab.Screen name="SignUPComponent" component={SignUPComponent}  
          options={{
            tabBarLabel: 'SignUP',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="sign-text" color={'rgb(155, 193, 155)'} size={40} />
            ),
            
          }}
          
          
          />
            <Tab.Screen name="FoodCard" component={CookHomeComponent}  
          options={{
            tabBarLabel: 'FoodCard',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="food" color={'rgb(155, 193, 155)'} size={40} />
            ),
            
          }}
          
          
          />
          
           {/* <Tab.Screen name="EditeEat" component={EditeEat}  
          options={{
            tabBarLabel: 'AddFoodForm',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="star" color={'rgb(155, 193, 155)'} size={40} />
            ),
            
          }}
          
          />

         <Tab.Screen name="CheifHome" component={CookHome}  
          options={{
            tabBarLabel: 'Aboutcheif',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="star" color="orange" size={40} />
            ),
            
          }}
          
          /> */}
       
        </Tab.Navigator>  
     
      </NavigationContainer>
   

      {/* <SignUPComponent></SignUPComponent>
 <LoginComponent></LoginComponent> */}
      {/* <CustomerRating/>
  <DownloadApp/>
     <FooterSection/> */}

    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#faf9f1',

  },
});




// import React, { useState } from "react";
// import { View, Button, StyleSheet, Alert } from "react-native";

// export default function App() {
//   const [showBox, setShowBox] = useState(true);

//   const off = () => {
//     return Alert.alert(
//       "Are your sure?",
//       "Are you sure you want to remove this beautiful box?",
//       [
//         // The "Yes" button
//         {
//           text: "Yes",
//           onPress: () => {
//             setShowBox(false);
//           },
//         },
//         // The "No" button
//         // Does nothing but dismiss the dialog when tapped
//         {
//           text: "No",
//         },
//       ]
//     );
//   };

//   return (
//     <View style={styles.screen}>
//       {showBox && <View style={styles.box}></View>}
//       <Button title="Delete" onPress={() => off()} />
//     </View>
//   );
// }

// // Kindacode.com
// // Just some styles
// const styles = StyleSheet.create({
//   screen: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//     backgroundColor:'black'
//   },
//   box: {
//     width: 300,
//     height: 300,
//     backgroundColor:'white',
//     marginBottom: 30,
//   },
//   text: {
//     backgroundColor:'red',
//     fontSize: 30,
//   },
// });



