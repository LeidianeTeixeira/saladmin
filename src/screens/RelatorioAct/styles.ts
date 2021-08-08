import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

bar:{
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

menuNotas:{
    fontSize: 5,
    borderBottomWidth: 0.1,
    marginVertical:10,
    marginHorizontal: -2,
    borderRadius:15,
    backgroundColor: '#D3BDFF',
    color:'#FCAC12',
    marginRight:10,
    paddingRight:-10
},

input:{
    width: "95%",
    height:40,
    backgroundColor: '#FFF',
    marginBottom:20,
    marginHorizontal: 6,
    marginVertical:6,
    //borderWidth:1,
    //borderColor: '#7F3DFF'
}, 

inputData:{
    width: "45%",
    height:40,
    backgroundColor: '#FFF',
    marginHorizontal: 6,
    marginVertical:6,
    //borderWidth:1,
    //borderColor: '#7F3DFF'
},

datas:{
    flexDirection: 'row',
    padding:0
},

card:{
    flexDirection:'row',
    //height:80,
    borderRadius: 6,
    //elevation:5,
    backgroundColor: '#FFF',/*#EEE5FF*/
    //shadowOffset: {width: 2, height:2},
    //shadowOpacity: 0.2,
    //shadowRadius: 6,
    marginHorizontal: 6,
    marginVertical: 6,


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
    fontSize: 16,
    paddingTop:8,
    marginHorizontal:10,
    marginVertical: 8,


},

descCard:{
    fontSize: 12,
    color: "#333",
    padding: 2,
    marginHorizontal: 6,
    borderRightWidth:1,
},

headerTable:{
    fontSize: 18
},

relatorioButton:{
    justifyContent: 'center',
    //marginTop: '20%',
    width: '80%',
    //height: 56,
    backgroundColor:'#8F57FF',
    padding: 16,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal:35,
    marginVertical:4
},

relatorioText:{
    color: '#FCFCFC',
    paddingLeft: 8,
    fontSize: 18
},

gerarText:{
    color: '#FCFCFC',
    paddingLeft: 8,
},

gerarButton:{
    //marginTop: '20%',
    width: '40%',
    //height: 56,
    backgroundColor:'#00A86B',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginHorizontal: 200,
    marginVertical:12
}, 
container: {
    borderWidth:1,
    width:'95%',
    height:45,
    marginHorizontal:6,
    borderRadius: 10,
    //padding: 10,
    //flex: 1,
    //paddingTop: 40,
    //alignItems: "center"
    borderColor: '#7F3DFF',
    justifyContent: 'center'
},
caixa:{
    //width: 90,
    padding:10,
    marginHorizontal:6,
    height: 50, 
    width: "95%" 

}

})