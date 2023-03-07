import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ViewComponent } from 'react-native';
import FooterSection from './Components/FooterSection'
import CustomerRating from './Components/CustomerRating';
import DownloadApp from './Components/DownloadApp';
export default function App() {
  return (
<View  style={styles.container}>
    
  <CustomerRating/>
  <DownloadApp/>
     <FooterSection/>
   
 </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    backgroundColor: '#faf9f1',

  },
});
