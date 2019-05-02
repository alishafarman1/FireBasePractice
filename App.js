/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView, StatusBar, TextInput, Button} from 'react-native';
import Firebase from './MainFolder/FireBase';
import fireBase from 'firebase'; 

Firebase();
export default class App extends Component{
state={
  email:"",
  password:"",
  islogedin:false
};
login=()=>{
fireBase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
.then(this.successLogin)
.catch(this.failedLogin)
};
successLogin=(successfull)=>{
alert("successfull")
this.setState({islogedin:true})
}

failedLogin=(error)=>{
alert(error)
}
emailChange=(text)=>{
  this.setState({
    email:text
  })
}
ChangePassword=(
  text)=>{
  this.setState({
    password:text
  })
}
signout=()=>{
  this.setState({
    islogedin:false
  })
}


  render() {
    return !this.state.islogedin ? (
      <ScrollView style={{backgroundColor:"pink", flex:1}}>
     <StatusBar backgroundColor="purple"/>
      <View style={{backgroundColor:"gray", marginTop:30 }}>
    <Text style={{color:"purple", fontSize:40, fontWeight:"bold", textAlign:"center"}}> Login </Text>
    
        <TextInput placeholder="Email" placeholderTextColor="black" style={{fontSize:30, backgroundColor:"white"}} onChangeText={this.emailChange}/>
     <TextInput placeholder="Password" placeholderTextColor="black" secureTextEntry={true} style={{backgroundColor:"white",fontSize:30,marginTop:10}}onChangeText={this.ChangePassword}/>
   <Button title="Login" onPress={this.login}/>
      </View> 
      </ScrollView>
    ) : (
      <View>
        <Button title="Sign Out" onPress={this.signout}/>
      </View>
    )
  } 
}

