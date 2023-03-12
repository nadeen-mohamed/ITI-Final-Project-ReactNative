import { StyleSheet, Text, View, ViewComponent } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MyFav from './HomeAfterLoginForUser/HomeUser/Addto fav/MyFav';

import StackNavigate from './StackNavigate';

export default function NavbarForUser () {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>


   
        <Tab.Navigator >
        
       
       <Tab.Screen   name="الصفحة الرئيسية" component={StackNavigate}  
          options={{
            tabBarLabel: "الصفحة الرئيسية",
            tabBarIcon: () => (
              <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={40} />
            ),
            headerShown: false
          }}
          />
          
       
          <Tab.Screen name=" MyFav" component={MyFav}
            options={{
              tabBarLabel: " المفضله",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color="orange" size={40} />
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




