import { StyleSheet, Text, View, ViewComponent } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import MyFav from './HomeAfterLoginForUser/HomeUser/Addto fav/MyFav';

import StackNavigate from './StackNavigate';
import StackNavCooker from './StackNavCooker';
import Orders from './Components/CookerAfterLogin/Orders/Orders';
import CookHomeComponent from './Components/HomePageCooker/CookHome';

export default function NavbarForCooker () {
  const Tab = createBottomTabNavigator();
  return (
    <View style={styles.container}>


     

        <Tab.Navigator >
        
       
        <Tab.Screen name="FoodCard" component={StackNavCooker}
            options={{
              tabBarLabel: 'FoodCard',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="food" color={'rgb(155, 193, 155)'} size={30} />
              ),
              headerShown: false
            }}
          />
           <Tab.Screen name="طلباتي" component={Orders}
            options={{
              tabBarLabel: "طلباتي",
              tabBarIcon: () => (
                <MaterialCommunityIcons name="home" color={'rgb(155, 193, 155)'} size={30} />
              ),
            }}

          />
          <Tab.Screen name="CheifHome" component={CookHomeComponent}
            options={{
              tabBarLabel: 'Aboutcheif',
              tabBarIcon: () => (
                <MaterialCommunityIcons name="star" color={'rgb(155, 193, 155)'} size={30} />
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




