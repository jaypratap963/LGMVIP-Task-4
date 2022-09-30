import React from 'react';
import {View,Text,StyleSheet} from 'react-native';

export default class Screen extends React.Component{
  render(){
    const{
      expression,result
    } = this.props;

return(
  <View style={style.container}>
  <Text style={style.expression}>{expression}</Text>
  <Text style={style.result}>{result}</Text>
  </View>
)}
}

const style = StyleSheet.create({
  container:{
    flex:3,
     borderColor:'black',
    borderWidth:1,
    backgroundColor:'#202020'
  },
  expression:{
    fontSize:45,
    textAlign:'right',
    padding:25,
    color:'white',
    position:'absolute',
    bottom:25,
    right:0
  },
    result:{
    fontSize:32,
    textAlign:'right',
    padding:10,
    paddingRight:25,
    color:'white',
      position:'absolute',
    bottom:0,
    right:0
  }
})