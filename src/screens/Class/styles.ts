import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({
    container:{

    },

    bar:{
        paddingBottom: 15,
        height: 45,
        backgroundColor:'#7F3DFF'
    },
    cardContent:{

    },
    turmasContainer:{
        borderColor:'#7F3DFF',
        borderWidth:1,
        padding:10
    },
   
    turmasTitle: {
        justifyContent:'center',
        /*padding: 15*/
    },

    cardturma:{

    },

    titleCard:{
        //color: '#7F3AAA',
        fontSize: 18,
        padding:8

    },

    descCard:{
        fontSize: 12,
        color: "#333",
        padding: 0,
        marginHorizontal: 6,
        marginVertical: 4
    },

    bodyCard:{
        color:'#333',
    },
     
    /*card:{
        height:80,
        borderRadius: 6,
        elevation:5,
        backgroundColor: '#FFF',
        //shadowOffset: {width: 1, height:1},
        //shadowColor: '#7F3DFF',
        shadowOpacity: 1,
        shadowRadius: 6,
        marginHorizontal: 6,
        marginVertical: 6,
        //alignItems: 'center',
        borderColor: '#7F3DFF',
        justifyContent:'center',
        borderWidth:0.5,
    
    },*/

    card:{
        height:85,
        borderRadius: 6,
        elevation:5,
        backgroundColor: '#FFF',/*#EEE5FF*/
        shadowOffset: {width: 2, height:2},
        shadowOpacity: 0.2,
        shadowRadius: 6,
        marginHorizontal: 6,
        marginVertical: 6,
        justifyContent:'center',
        borderColor: '#EEE5FF',
        borderWidth: 1
    
    },
}); 