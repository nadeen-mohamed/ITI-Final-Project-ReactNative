const React = require("react-native");
const { StyleSheet } = React;
const style = StyleSheet.create({
    boxDetails: {
        marginTop:20,
        textAlign: "right",
    },
      btn:{
        backgroundColor: '#069C54',
        display: 'block',
        width: 40,
        height: 40,
        position: 'absolute',
        left: '7%',
        top: '72%',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: {width: -2, height: 3},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
      },
      box:{
        marginTop:90,
        paddingLeft:70,
        paddingRight:70,
        backgroundColor: '#fff',
        width: '100%',
        minHeight: 200,
        padding: 15,
        position: 'relative',
        borderRadius: 20,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'spaceBetween',
        shadowOffset: {width: -2, height: 4},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3,  
    },
    Image:{
        width: 145, 
        height: 145,
        borderRadius:100,
        marginTop: -80,
    },
});

export default style;