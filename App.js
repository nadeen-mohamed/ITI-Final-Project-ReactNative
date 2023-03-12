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
import StackNavigate from './StackNavigate';
import Orders from './Components/CookerAfterLogin/Orders/Orders'
import StackNavCooker from './StackNavCooker';
import NavbarForUser from './NavbarForUser';
import NavbarForCooker from './NavbarForCooker';
export default function App() {
  let user= JSON.parse(localStorage.getItem("user"))
  // let y= res.user.displayName
 
  //  let x=res.user&&res.user.displayName.split('@')[1]
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>


      <NavigationContainer  >

        <Tab.Navigator >
        
          <Tab.Screen name="صفحة البداية" component={Index}
            options={{
              tabBarLabel: 'صفحة البداية',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
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

          <Tab.Screen name="تسجيل الدخول" component={LoginComponent}
            options={{
              tabBarLabel: 'تسجيل الدخول',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="login" color={'rgb(155, 193, 155)'} size={40} />
              ),

            }}

          />
            <Tab.Screen name="NavbarForUser" component={NavbarForUser}
            options={{
              tabBarLabel: 'صفحة المستخدم',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="" color={'rgb(155, 193, 155)'} size={40} />
              ),
              tabBarStyle: { display: "none" },
              headerShown: false,
              tabBarButton: () => null,
              tabBarVisible: false,

            }}

          />
            <Tab.Screen name="NavbarForCook" component={NavbarForCooker}
            options={{
              tabBarLabel: 'صفحة الطباخ',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
              ),
              tabBarStyle: { display: "none" },
              headerShown: false,
              Visible: false,
              tabBarButton: () => null,
              tabBarVisible: false,
            }}

          />

          
         

         

      
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




