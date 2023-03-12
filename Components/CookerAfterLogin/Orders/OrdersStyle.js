const React = require("react-native");
const { StyleSheet } = React;
const styles = StyleSheet.create({
    cardStyle: {
        backgroundColor: 'white',
        height: 150,
        width:330,
        shadowOffset: {width: -2, height: 3},  
        shadowColor: '#171717',  
        shadowOpacity: 0.2,  
        shadowRadius: 3, 
        overflow: 'hidden',
        alignSelf:'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:25,
        marginBottom:25,
        borderRadius:25,
        paddingBottom:20,
        paddingTop:20,
        transition: 'all, 1s'
    },
    orderActive: {
        height: 480,
    },
    orderImg: {
        width: 110,
        height: 110,
        marginRight:15,
        borderRadius: '50%',
    },
    txtIn: {
        flexDirection:'column',
        textAlignVertical: 'middle',
        textAlign: 'center',
        marginTop:25,
        marginRight:12
    },
    boxStyle: {
        borderWidth: 2,
        borderColor: '#bbbbbb',
        backgroundColor: 'white',
        alignSelf:'center',
        marginLeft:'auto',
        marginRight:'auto',
        width:290,
        borderRadius:25,
        marginBottom:25,
        padding:10
    },
    con:{
        flexDirection:'row',
        justifyContent:'evenly'
    },
    orderItem: {
       flexDirection:"column",
        marginTop: 15,
        marginRight:13
    },
    mealImg: {
        width: 80,
        height: 80,
        borderRadius: '50%',
        border: '#bbbbbb, solid, 2',
    },
    time:{
        display:'flex', 
        justifyContent:'evenly',
        marginLeft:'auto',
        marginRight:'auto',
    },
    ordersCon1:{
     justifyContent:'center',
    marginTop:30,
    marginBottom:30,
    borderRadius:20,
    writingDirection:'rtl',
    },
    ordersCon2:{
        alignSelf:'center',
        marginLeft:'auto',
        marginRight:'auto',
        marginTop:2,
        marginBottom:3,
    }
})
export default styles;