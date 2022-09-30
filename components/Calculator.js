import React from 'react';
import { View, Text, StyleSheet, StatusBar,ToastAndroid,Animated} from 'react-native';

import Screen from './Screen';
import Button from './Button';
import History from './History';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expression: '',
      result: '',
      actualExpression: '',
      history:[],
      isHistoryVisible:false,
           // slideIn: new Animated.Value(0)

    };
  }

  // componentDidMount(){
  //   this.slideIn()
  // }

  // slideIn=()=>{
  //   Animated.timing(this.state.slideIn,{
  //     toValue:1,
  //     duration:500,
  //   }).start(()=>{

  //   })
  // }
   

  // slideOut =()=>{
  //   Animated.timing(this.state.slideIn,{
  //     toValue:0,
  //     duration:500,
  //   }).start(()=>{
  //     this.closeHistory()
  //   })
  // }

     addHistory=()=>{
       const {
         expression,result,history
       }=this.state;
              ToastAndroid.show(`History Saved, ${expression}=${result}` ,ToastAndroid.SHORT)

       const expressionHistory= {
         expression,result,
       }
       this.setState({history: [...history,expressionHistory]})
     }

  getPressedButtonValue = (buttonPressed) => {
    const { expression, actualExpression } = this.state;
    let newExpression = `${expression}${buttonPressed}`;
    this.setState({
      expression: newExpression,
    });

    let actualCharacter = buttonPressed;

    if (buttonPressed === '÷') {
      actualCharacter = '/';
    } else if (buttonPressed === '×') {
      actualCharacter = '*';
    }

    let newActualExpression = `${actualExpression}${actualCharacter}`;

    this.setState({
      actualExpression: newActualExpression,
    });
    try {
      this.setState({
        result: eval(newActualExpression).toString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  allClear = () => {
    this.setState({
      expression: '',
      result: '',
      actualExpression: '',
    });
  };
   clear = () => {
    this.setState({
    history:[],
    });
  };

  equals = () => {
    this.setState({
      expression: '',
      actualExpression: '',
    });
  };

  openHistory = () => {
    this.setState({
      isHistoryVisible:true
    })
  }

   closeHistory = () => {
    this.setState({
      isHistoryVisible:false
    })
  }

  del = () => {
    const { expression, actualExpression } = this.state;

    const slicedExpression = expression.slice(0, expression.length - 1);
    const slicedActualExpression = actualExpression.slice(
      0,
      expression.length - 1
    );
    this.setState({
      expression: slicedExpression,
      actualExpression: slicedActualExpression,
    });
    if (slicedActualExpression === '') {
      this.setState({
        result: '',
      });
    }
    try {
      this.setState({
        result: eval(slicedActualExpression).toString(),
      });
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    const { expression, result,isHistoryVisible,history,clear,closeHistory } = this.state;

    return (
      <View style={style.container}>
       { isHistoryVisible?
          <View style={style.historyWrapper}>
          <History closeHistory={this.closeHistory} history={history} clear={this.clear} />
      </View>:null}
        <Screen expression={expression} result={result} />
        <Button
          getPressedButtonValue={this.getPressedButtonValue}
          allClear={this.allClear}
          equals={this.equals}
          del={this.del}
          openHistory={this.openHistory}
          addHistory = {this.addHistory}
          slideIn={this.slideIn}
          closeHistory={this.slideOut}
        />
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyWrapper:{
     flex:1,
    position:'absolute',
    backgroundColor:'#00000061',
    zIndex:3,
    top:10,
    width:"100%",
    height:'100%'
  }
});
