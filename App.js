import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import { Component } from 'react/cjs/react.production.min';



export default class App extends Component {

constructor(props) {
  super(props)
  this.state= {altura:0, gen:'', result: '', resultTexto:'Seu peso ideal é: '};
  this.calcular=this.calcular.bind(this) // importante
}
  calcular() {
   if(this.state.gen == 'Masculino') {
      this.setState({
        result: this.state.resultTexto+((72.7*this.state.altura)-58)
      });} 
      
      else if(this.state.gen == 'Feminino') {
        this.setState({
          result: this.state.resultTexto+((62.1*this.state.altura)-44.7)
      })}
  };

render() {
  return (

    
    <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.title}>Cálculo de peso ideal:</Text>


        <View style={styles.inputbox}>
            <TextInput style={styles.inputform} placeholder='Digite sua altura...' keyboardType='numbers-and-punctuation' onChangeText={(altura) => {this.setState({altura})}}/>

                </View><View style={styles.inputbox}>
            <TextInput style={styles.inputform} placeholder='Digite seu gênero' onChangeText={(gen) => {this.setState({gen})}}/>
            </View>


            
            <TouchableOpacity style={styles.button} onPress={this.calcular}>
                <Text style={styles.whitetext}>
                Calcular
                </Text>
              </TouchableOpacity>
              <Text style={styles.textresult}>{this.state.result}</Text>
            

          </View>
      <StatusBar style="auto" />
    </View>
  );
 }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },

  content: {
    paddingTop: 100,
    display: 'flex',
    alignItems: 'center',
  },

  title: {
    display: 'flex',
    fontSize: 20,
    fontWeight: '700',
    height: 50,
    color: '#0AA1DD',

  },

  inputbox: {
    display: 'flex',
    alignItems: 'center',
    width: 260,
    height: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#808080',
    margin: 3,

},

inputform: {
  width: 260,
  height: 50,
  paddingLeft: 15,

},

button: {
  marginTop: 10,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: 40,
  width: 120,
  backgroundColor: '#0AA1DD',
  borderRadius: 10,
},

whitetext: {
  color: 'white',
  fontWeight: 'bold',
},

textresult: {
  paddingTop: 25,
},

});
























 //type Props = {};
//export default class App extends Component<Props> {
  // constructor(props){
  //   super(props)
  // }

  // calcular() {
  //   let calc = (this.state.altura*this.state.altura)*22
  //   this.state.result = calc
  //   this.setState(this.state)
  // }