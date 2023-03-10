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
import FavPage from './Components/UserAfterLogin/FavPage/FavPage';
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
              <MaterialCommunityIcons name="home" color="orange" size={40} />
            ),
          }}
          
          />
          
          
          <Tab.Screen name="LoginComponent" component={LoginComponent}  
          options={{
            tabBarLabel: 'Login',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="login" color="orange" size={40} />
            ),
            
          }}
          
          
          />
          <Tab.Screen name="SignUPComponent" component={SignUPComponent}  
          options={{
            tabBarLabel: 'SignUP',
            tabBarIcon: () => (
              <MaterialCommunityIcons name="star" color="orange" size={40} />
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
