import { StyleSheet } from "react-native";

export const styles = StyleSheet.create ({
    container: {
        backgroundColor:'#FFF',
        alignItems: 'center',
        height:'100%'
    },

    title: {
        
    },

    logo:{
        marginTop:64,
        //width: 32,
        //height: 32,
        //left: 186,
        //top: 163
    },

    logoText:{
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        /*position: 'static',*/
        width:"90%",
        height:64,
        left:17,
        //top: 80,
        fontSize:18,
        lineHeight:22,
         marginTop:12,
        alignSelf:'stretch',

    },

    input:{
        width: "95%",
        height:56,
        backgroundColor: '#FFF',
        marginBottom:20,
        borderRadius:10,
        paddingBottom:8,
        paddingRight:16,
        paddingLeft:16,
        paddingTop:8,
        justifyContent:'center',
        //borderWidth:1,
        borderColor: '#7F3DFF'
    },

    forgotContainer:{
        width:'90%',
        alignItems:'center',
        padding: 20,
        flexDirection: 'row',
        justifyContent:'center'
    },

    forgotText:{
        color:'#7F3DFF',
        paddingLeft:8,
    },

    loginButton:{
        marginTop: '5%',
        flexDirection: 'row',
        width: '85%',
        height: 56,
        backgroundColor: '#8F57FF',
        padding: 16,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    loginText:{
        color: '#FCFCFC',
        paddingLeft: 8,
        fontSize: 18
    }, 

    googleContainer:{
        flexDirection: 'row',
        alignItems: "flex-start",
        marginTop: '15%',
        width:'90%',
        padding: 20


    },

    googleText:{

    }

}); 