import { View, Text, TextInput,Image } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./HeaderStyle.js";
export default function Header() {
    let user=JSON.parse(localStorage.getItem('user'))
    console.log( user,'usssser')
    return (
        <View style={styles.header}>
            <Image source={user.photoURL}  style={styles.Image}/>
            <View style={styles.searchBox}>
                <View style={styles.searchBtn}>
                    <Icon name="search"></Icon>
                </View>
                <TextInput placeholder="ابحث عن اكلتك" style={styles.Input}/>
            </View>
            <Text style={styles.text}>مرحبا بك في الاكيله 🤤 </Text>
        </View>
    )
}


/*import './Header.css'
function Header(props) {


    return (

        <>
            <div className="row header py-5   align-items-center" >

                <div className="col-9 d-flex justify-content-between align-items-center">
                     <div className="image  d-flex align-items-center">
                           <img  className='d-lg-none' src="https://via.placeholder.com/50/09f/fff.png " alt="D" />
                           <i className="notificationIcon ms-3 me-2 fa-regular fa-bell fa-lg "></i>
                     </div>
                    <div className="search-box d-flex align-items-center">
                        <div className="search-btn">
                            <i className="fas fa-search "></i>
                        </div>
                        <input type="text" placeholder="ابحث عن اكلتك" />
                    </div>
                    
                   
                    
                </div>

                <div className="col-3 text-center myHeaderText">
                    <p >{props.hello}
                    </p>
                    <p>{props.helloCon}</p>
                </div>



          

            </div>




        </>
    )




}
export default Header*/