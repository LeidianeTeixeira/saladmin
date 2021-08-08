import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    bar:{
        //paddingBottom: 15,
        //height: 45,
        backgroundColor:'#7F3DFF',
        marginTop: 5
    },

    titleCard:{
        //color: '#7F3AAA',
        fontSize: 18,
        marginHorizontal:6,
        marginVertical: 4,

    },
    bodyCard:{
        color:'#333',
    },

    navigation:{
        backgroundColor:'#7F3DFF',
        marginTop:50,
        color: '#fff',
    },

    menu: {
        flexDirection: 'row',
        fontSize: 5,
        borderBottomWidth: 0.1,
        marginVertical:10,
        marginHorizontal: -2,
    },

    menuHome:{
        fontSize: 5,
        borderBottomWidth: 0.1,
        marginVertical:10,
        marginHorizontal: -2,
        borderRadius:15,
        backgroundColor: '#D3BDFF',
        color:'#FCAC12',
        marginLeft:4,
        paddingLeft:-10
    },

    decricao:{
        marginVertical:10,
        marginHorizontal: 6,
        //borderWidth:0.5,
        //borderRadius:10,
    },

    descTitle:{
        padding:10,
        fontSize:18
    },

    descText:{
        padding:10,
        fontSize:14
    },

    card:{
        height:80,
        borderRadius: 6,
        elevation:5,
        backgroundColor:'#EEE5FF', /*'#EEE5FF',*/
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginHorizontal: 6,
        marginVertical: 6,
        justifyContent:'center',
       
    
    },

    cardDesc:{
        height:120,
        borderRadius: 6,
        elevation:5,
        backgroundColor:'#FFF', /*'#EEE5FF',*/
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginHorizontal: 6,
        marginVertical: 6,
        justifyContent:'center',
       
    
    },
    
    descCard:{
        fontSize: 14,
        color: "#333",
        padding: 2,
        marginHorizontal: 6,
    },

    cardDescTex:{
        fontSize: 14,
        //color: "#333",
        padding: 2,
        marginHorizontal: 6
    },


    

})