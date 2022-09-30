import React from 'react';
import { View, Text, StyleSheet, Pressable,ScrollView } from 'react-native';

const buttonRipple = {
  color: '#C0C0C0',
  borderless: true,
  radius: 38,
};

export default class History extends React.Component {
  
  render() {
    const { closeHistory, history, clear } = this.props;

    return (
      <View style={style.container}>
      <View style={style.upper}>
          <View style={style.header}>
            <Text style={{ fontSize: 30, textAlign: 'left',padding:22,fontFamily:'lucida grande' }}>History</Text>
            <Pressable
              style={style.clear}
              onPress={clear}
              android_ripple={buttonRipple}>
              <Text style={{fontSize:20,color:'black',fontWeight:'bold'}}>Clear</Text>
            </Pressable>
          </View>
          <View style={style.content}>
          <ScrollView>
            {history.map((item) => (
              <Text style={{fontSize:25,color:'white',fontStyle:'italic',padding:10,borderBottomWidth:1,borderBottomColor:'white'}}>
                {item.expression}={item.result}
              </Text>
            ))}
            </ScrollView>
          </View>
          <Pressable style={style.footer} onPress={closeHistory} android_ripple={buttonRipple}>
            <Text style={style.close}>Close</Text>
          </Pressable>
        </View>
        <View style={style.lower}></View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  upper: {
    flex: 9,
    backgroundColor: '#101010',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  header: {
    flex: 1,
    backgroundColor:'white'
    // borderColor: 'white',
    // borderWidth: 1,
  },
  content: {
    flex: 8,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  footer: {
    flex: 1,
    backgroundColor:'orange',
    borderBottomLeftRadius:10,
    borderBottomRightRadius:10
    // borderColor: 'white',
    // borderWidth: 1,
  },
  close: {
    height: '100%',
    textAlign: 'center',
    textAlignVertical: 'center',
    fontSize: 30,
    fontStyle:'italic',
    //borderTopColor:'white',
    //borderTopWidth:2
  },
  clear: {
   // borderColor:'orange',
    backgroundColor:'orange',
    borderTopLeftRadius:30,
   // borderWidth:1,
   padding:24,
    position: 'absolute',
    right: 0,
    //borderTopColor:'black',
   // borderTopWidth:'2'
  },
  lower: {
    flex: 1,
  },
});
