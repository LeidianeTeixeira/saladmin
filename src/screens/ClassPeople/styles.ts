import { StyleSheet } from "react-native";
export const styles = StyleSheet.create({

bar:{
    //paddingBottom: 15,
    //height: 45,
    backgroundColor:'#7F3DFF',
    marginTop:5
    
},

card:{
    backgroundColor:'#EEE5FF'
},
menu: {
    flexDirection: 'row',
    fontSize: 5,
    borderBottomWidth: 0.1,
    marginVertical:10,
    marginHorizontal: -2,
},

menuPessoas:{
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

peopleTitle: {
    justifyContent:'center',
    borderBottomWidth:1,
    //fontSize:14,
    borderColor: '#7F3DFF'
    /*padding: 15*/
},

titleCard:{
    //color: '#7F3AAA',
    fontSize: 18,
    padding:8,

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
    marginTop: '25%',
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
    fontSize: 18
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

})