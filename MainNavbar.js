import { StyleSheet, Text, View, ViewComponent } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MyFav from './HomeAfterLoginForUser/HomeUser/Addto fav/MyFav';

import StackNavigate from './StackNavigate';
import Index from './Components/Index';
import App from './App';
import SignUPComponent from './Components/Login&SignUp/SignUpComponent';
import LoginComponent from './Components/Login&SignUp/LoginComponent';

export default function MainNavbar() {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>



      <Tab.Navigator >

      <Tab.Screen name=" الأكيلة" component={Index}
         
         options={{
           tabBarLabel: 'صفحة البداية',
           tabBarIcon: () => (
             <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={30} />
           ),
           
         }}

       />

       <Tab.Screen name="إنشاء حساب" component={SignUPComponent}
         options={{
           tabBarLabel: 'إنشاء حساب',
           tabBarIcon: () => (
             <MaterialCommunityIcons name="sign-text" color={'rgb(155, 193, 155)'} size={30} />
           ),

         }}


       />

       <Tab.Screen name="تسجيل الدخول" component={LoginComponent}
         options={{
           tabBarLabel: 'تسجيل الدخول',
           tabBarIcon: () => (
             <MaterialCommunityIcons name="login" color={'rgb(155, 193, 155)'} size={30} />
           ),

         }}

       />


      


      </Tab.Navigator >

    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#faf9f1',

  },
});




