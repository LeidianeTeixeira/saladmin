import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

bar:{
   // paddingBottom: 1,
    //height: 45,
    backgroundColor:'#7F3DFF',
    marginTop:5
},

menu: {
    flexDirection: 'row',
    fontSize: 5,
    borderBottomWidth: 0.1,
    marginVertical:10,
    marginHorizontal: -2,
},

menuAtv:{
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

card:{
    height:80,
    borderRadius: 6,
    elevation:5,
    backgroundColor: '#FFF',/*#EEE5FF*/
    shadowOffset: {width: 2, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,
    justifyContent:'center',

},

cardInit:{
    height:80,
    borderRadius: 6,
    elevation:5,
    backgroundColor: '#EEE5FF'/*'#E3E5E5'*/,
    shadowOffset: {width: 2, height:2},
    shadowOpacity: 0.2,
    shadowRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,
    justifyContent:'center',

},

titleCard:{
    //color: '#7F3AAA',
    fontSize: 18,
    padding:8,

},

descCard:{
    fontSize: 12,
    color: "#333",
    padding: 2,
    marginHorizontal: 6
},

cardDescTex:{
    fontSize: 14,
    //color: "#333",
    padding: 2,
    marginHorizontal: 6
},

titleList:{
    fontSize: 14,
    padding:5,
    marginHorizontal:6
},

bodyCard:{
    color:'#333',
},

relatorioButton:{
    justifyContent: 'center',
    marginTop: '20%',
    width: '80%',
    //height: 56,
    backgroundColor:'#8F57FF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal:35
},

relatorioText:{
    color: '#FCFCFC',
    paddingLeft: 8,
    fontSize:18
},

})