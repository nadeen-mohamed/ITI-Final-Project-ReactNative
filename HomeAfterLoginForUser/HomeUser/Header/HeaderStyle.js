const React = require("react-native");
const { StyleSheet } = React;
const styles = StyleSheet.create({
    searchBox: {
        backgroundColor: '#C5C5C5',
        width: 150,
        height:45,
        borderRadius: 15,
        marginLeft: '6%',
        alignItems: 'center',
        flexDirection:'row',
    },
    Input: {
        border:'none',
        backgroundColor: 'transparent',
        marginRight: 14,
        marginLeft:5,
        width:110,
        height:25,
        textAlign:'right',
        padding: 2,
    },
    header:{
        flexDirection:'row',
        marginTop:30,
        marginBottom:15,
        marginLeft:30,
        marginRight:30,
    },
    searchBtn:{
     color: '#000',
     fontSize:14,
     marginLeft:14,
    },
    text:{
        textAlign: 'right'
    },
    Image:{
        width: 65, 
        height: 65,
        borderRadius:100,
        marginTop:-10,
    }
})
export default styles;