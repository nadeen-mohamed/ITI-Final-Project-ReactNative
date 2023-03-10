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


import Home from './HomeAfterLoginForUser/HomeUser/Home/Home';
import FoodCard from './Components/CookerAfterLogin/Cheif\'s Eat/FoodCard';
import DeleteEat from './Components/CookerAfterLogin/DeletePOPup/DeleteEat';
import CookHomeComponent from './Components/HomePageCooker/CookHome';
// import AddFoodForm from './Components/CookerAfterLogin/AddFoodForm/AddFoodForm'
// import AddFoodForm from './Components/CookerAfterLogin/AddFoodForm/AddFoodForm';
// import EditeEat from './Components/CookerAfterLogin/AddFoodForm/EditeEat';

import MyFav from './HomeAfterLoginForUser/HomeUser/Addto fav/MyFav';
import Details from './HomeAfterLoginForUser/Details/Details';
export default function App() {
  const Tab=createBottomTabNavigator();
  return (
    <View style={styles.container}>
      
      
      <NavigationContainer  >
       
          <Tab.Navigator > 
    <Tab.Screen   name="صفحة البداية" component={Index}  
          options={{
            tabBarLabel: 'صفحة البداية',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
            ),
          }}
          
        /> 
          
          
          <Tab.Screen name="تسجيل الدخول" component={LoginComponent}  
          options={{
            tabBarLabel: 'تسجيل الدخول',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" color={'rgb(155, 193, 155)'} size={40} />
            ),
            
          }}
          
          />
          <Tab.Screen name="إنشاء حساب" component={SignUPComponent}  
          options={{
            tabBarLabel: 'إنشاء حساب',
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
       
       <Tab.Screen   name="الصفحة الرئيسية" component={Home}  
          options={{
            tabBarLabel: "الصفحة الرئيسية",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
            ),
          }}
          
          />
          
           {/* <Tab.Screen name="EditeEat" component={EditeEat}  
          
           <Tab.Screen name="MyFav" component={MyFav}  
          options={{
            tabBarLabel: 'MyFav',
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
          
          />
       
        
        
        <Tab.Screen   name="تفاصيل الأكله" component={Details}  
          options={{
            tabBarLabel: "تفاصيل الأكله",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="orange" size={40} />
            ),
          }}
          
        />

        </Tab.Navigator>  
     
      </NavigationContainer>
   

      {/* <SignUPComponent></SignUPComponent>
 <LoginComponent></LoginComponent> */}
      {/* <CustomerRating/>
  <DownloadApp/>
     <FooterSection/> */}
       </Tab.Navigator > 
</NavigationContainer>
    </View>

  );
  }

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#faf9f1',

  },
});




