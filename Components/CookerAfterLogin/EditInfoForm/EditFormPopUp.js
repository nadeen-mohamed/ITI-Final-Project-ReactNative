import React from 'react';
import EditInfoForm from './EditInfoForm';
import {
    View,
    StyleSheet,
    Button,
    Modal,
    Image,
    Text,
    TouchableOpacity,
    Animated,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
const ModalPoup = ({ visible, children }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View
                    style={[styles.modalContainer, { transform: [{ scale: scaleValue }] }]}>
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};

const EditFormPopUp = (props) => {
    
    const [visible, setVisible] = React.useState(false);
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            
            <ModalPoup visible={visible}>
            <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisible(false)}>
              <Image
                source={require('../../../assets/cancle.png')}
                style={{height: 15, width: 20}}
              />
            </TouchableOpacity>
          </View>
        </View>
                <View style={{ alignItems: 'center' }}>
<EditInfoForm cookerpersonal={props.editecookerpersonal}/>
                </View>
                

              

                {/* <TouchableOpacity style={styles.SureText} > */}
                    {/* <Text style={{ textAlign: 'center' }}>
                        حذف
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setVisible(false)} style={styles.cancleBtn}>
                    <Text style={{ textAlign: 'center' }}>
                        إلغاء
                    </Text>
                </TouchableOpacity> */}
            </ModalPoup>
            <Icon
                name='edit' size={30} color={'green'} style={{ margin: '6px' }} onPress={() => setVisible(true)}></Icon>

                             
           

        </View>
    );
};

const styles = StyleSheet.create({
    modalBackGround: {
        flex: 1,
  
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '100%',
      
     
        paddingHorizontal: 20,
        paddingVertical: 30,
        borderRadius: 20,
        elevation: 20,
    },
    // header: {
    //     width: '100%',
    //     height: 40,
    //     alignItems: 'flex-end',
    //     justifyContent: 'center',
    // },
    SureText: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginLeft: 20,
        color: 'white',
        backgroundColor: "green",
        width: "90%",
        marginVertical: 30, fontSize: 20, textAlign: 'center'
    },
    cancleBtn: {
        width: "50%",
        borderRadius: 25,
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 25,
        marginLeft: 20,
        color: 'white',
        backgroundColor: "red",
        width: "90%",
        marginVertical: 30, fontSize: 20, textAlign: 'center'
    },
});

export default EditFormPopUp;