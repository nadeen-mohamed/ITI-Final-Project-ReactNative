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
import Home from './HomeAfterLoginForUser/HomeUser/Home/Home';
import Details from './HomeAfterLoginForUser/Details/Details';
export default function App() {
  const Tab=createBottomTabNavigator();
  return (
    <View style={styles.container}>
      
      
      <NavigationContainer  >
       
          <Tab.Navigator > 
      { /*   <Tab.Screen   name="صفحة البداية" component={Index}  
          options={{
            tabBarLabel: 'صفحة البداية',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="orange" size={40} />
            ),
          }}
          
        />*/}
          
          
          <Tab.Screen name="تسجيل الدخول" component={LoginComponent}  
          options={{
            tabBarLabel: 'تسجيل الدخول',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" color="orange" size={40} />
            ),
            
          }}
          
          
          />
          <Tab.Screen name="إنشاء حساب" component={SignUPComponent}  
          options={{
            tabBarLabel: 'إنشاء حساب',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="star" color="orange" size={40} />
            ),
            
          }}
          />
       
       {/*<Tab.Screen   name="الصفحة الرئيسية" component={Home}  
          options={{
            tabBarLabel: "الصفحة الرئيسية",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color="orange" size={40} />
            ),
          }}
          
        />*/}
        
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

    </View>

  );
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#faf9f1',

  },
});
