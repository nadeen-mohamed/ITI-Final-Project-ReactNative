const React = require("react-native");
const { StyleSheet } = React;
const styles = StyleSheet.create({
    priceCon: {
        writingDirection: "rtl",
        width: "70%",
        margin: "auto",
        alignItems: 'center'
    },
    price: {
        color: "#069c54",
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    priceInfo:{ 
        marginTop: 3,
        marginBottom:6, 
        fontSize:18, 
        width:140, 
        marginRight:"auto",
        marginLeft:'auto' 
    },
    foodCart: {
        width: 40,
        height: 40,
        backgroundColor: "#069c54",
        borderRadius: "50%",
    },
    Image: {
        width: 240,
        height: 200,
        borderRadius: 25,
        marginBottom: 30,
        textAlign:'center',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'

    },
    imageCon: {
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#D3D3D3',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: 30,
        width: 190,
        height: 190,
    },
    icon: {
        color: '#fff',
        marginTop: 10,
        marginLeft: 11
    },
    foodName: {
        color: "#069c54",
        fontSize: 26,
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: 30,
        fontWeight: 'bold',
    },
    foodDesc:{ 
        fontSize:17, 
        marginRight:'auto', 
        marginLeft:'auto', 
        marginBottom:20,
        marginTop:5
    },
    btnCon:{
        flexDirection:'row', 
        marginTop:10, 
        marginLeft:'auto', 
        marginRight:'auto'
    }
})
export default styles;