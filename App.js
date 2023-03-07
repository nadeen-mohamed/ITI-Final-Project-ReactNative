import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewComponent } from 'react-native';
import Index from './Components/Index';
import LoginComponent from './Components/Login&SignUp/LoginComponent';
import SignUPComponent from './Components/Login&SignUp/SignUpComponent';

export default function App() {
  return (
<View  style={styles.container}>
    
 {/* <Index></Index> */}
 <SignUPComponent></SignUPComponent>
{/*  <LoginComponent></LoginComponent> */}
 </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#faf9f1',

  },
});
