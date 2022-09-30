import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const buttonRipple = {
  color: '#AEAEAE',
  borderless: true,
  radius: 45,
};


const buttonRippleRight = {
  color: 'darkorange',
  borderless: true,
  radius: 45,
};


export default class Buttons extends React.Component {

  render() {
    const { getPressedButtonValue,allClear,equals,del,openHistory,addHistory } = this.props;

    return (
      <View style={style.container}>
        <View style={style.leftSideButtons}>
          <Pressable style={style.leftSideButton} android_ripple={buttonRipple} onPress={allClear}>
            <Text style={[{color:'orange'}, style.textButtonAllClear]}>AC</Text>
          </Pressable>
          <Pressable style={style.leftSideButton} android_ripple={buttonRipple} onPress={del}>
            <Text style={style.textButton}>DEL</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('%');
            }}>
            <Text style={style.textButton}>%</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('7');
            }}>
            <Text style={style.textButton}>7</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('8');
            }}>
            <Text style={style.textButton}>8</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('9');
            }}>
            <Text style={style.textButton}>9</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('4');
            }}>
            <Text style={style.textButton}>4</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('5');
            }}>
            <Text style={style.textButton}>5</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('6');
            }}>
            <Text style={style.textButton}>6</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('1');
            }}>
            <Text style={style.textButton}>1</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('2');
            }}>
            <Text style={style.textButton}>2</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('3');
            }}>
            <Text style={style.textButton}>3</Text>
          </Pressable>
          <Pressable style={style.leftSideButton} android_ripple={buttonRipple} onPress={openHistory}>
            <Text style={style.textButton}>H</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('0');
            }}>
            <Text style={style.textButton}>0</Text>
          </Pressable>
          <Pressable
            style={style.leftSideButton}
            android_ripple={buttonRipple}
            onPress={() => {
              getPressedButtonValue('.');
            }}>
            <Text style={style.textButton}>.</Text>
          </Pressable>
        </View>
        <View style={style.rightSideButtons}>
          <Pressable
            style={style.rightSideButton}
            android_ripple={buttonRippleRight}
            onPress={() => {
              getPressedButtonValue('÷');
            }}>
            <Text style={style.textButtonRight}>÷</Text>
          </Pressable>
          <Pressable
            style={style.rightSideButton}
            android_ripple={buttonRippleRight}
            onPress={() => {
              getPressedButtonValue('×');
            }}>
            <Text style={style.textButtonRight}>×</Text>
          </Pressable>
          <Pressable
            style={style.rightSideButton}
            android_ripple={buttonRippleRight}
            onPress={() => {
              getPressedButtonValue('-');
            }}>
            <Text style={style.textButtonRight}>-</Text>
          </Pressable>
          <Pressable
            style={style.rightSideButton}
            android_ripple={buttonRippleRight}
            onPress={() => {
              getPressedButtonValue('+');
            }}>
            <Text style={style.textButtonRight}>+</Text>
          </Pressable>
          <Pressable
            style={style.rightSideButton}
            android_ripple={buttonRippleRight} onPress={equals,addHistory}>
            <Text style={style.equalButton}>=</Text>
          </Pressable>
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 7,
    borderColor: 'black',
    borderWidth: 1,
    backgroundColor:'#080808',
    flexDirection: 'row',
  },
  leftSideButtons: {
    // borderWidth:1,
    // borderColor:'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    flex: 7.5,
  },
  rightSideButtons: {
    //  borderWidth:1,
    // borderColor:'black',
    flex: 2.5,
  },
  leftSideButton: {
    width: '33.33%',
    height: '20%',
    // borderColor:'red',
    // borderWidth:1,
    justifyContent: 'center',
  },
  rightSideButton: {
    // borderColor:'red',
    // borderWidth:1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '20%',
  },
  textButton: {
    fontSize: 25,
    color:'white',
    textAlign: 'center',
  },
  textButtonAllClear:{
fontSize: 25,
    textAlign: 'center',
  },
  textButtonRight: {
    fontSize: 25,
    height: 70,
    width: 70,
    color:'white',
    // borderColor:'red',
    // borderWidth:1,
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: '#777777',
    borderRadius: 100,
    textAlignVertical: 'center',
    padding: 10,
  },
  equalButton: {
    fontSize: 25,
    height: 70,
    width: 70,
    color:'white',
    borderColor: 'darkorange',
    borderWidth: 1,
    textAlign: 'center',
    alignContent: 'center',
    backgroundColor: 'orange',
    borderRadius: 100,
    textAlignVertical: 'center',
    padding: 10,
  },
});
