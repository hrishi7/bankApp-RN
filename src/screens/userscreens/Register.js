import React, { Component } from 'react'
import { StyleSheet, View,StatusBar,TouchableOpacity,ToastAndroid } from 'react-native';
import {Container,Content,H2,Header,Button, Text,H3, Form, Item,Icon, Input, Label,H4,Fab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';
import * as Expo from "expo"

import axios from 'axios'
import {baseUrl} from '../../../scretKey';


export default class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      password:"",
      mobile:""
    }
  }
  checkValidation = () =>{
    if(this.state.name == '' && this.state.email == ''
    && this.state.mobile && this.state.password == '' )
    {
        return false;
    }
    return true;
}
  handleDefaultSignUp = () =>{
    if(this.checkValidation()){
      let dt = new Date();
      let newAgent = {
        name:this.state.name,
        email:this.state.email,
        password:this.state.password,
        mobile:this.state.mobile,
        signInType:'default',
        joiningDate: dt.getDate() + "-" + (dt.getMonth() <10? ("0"+ dt.getMonth()):dt.getMonth()) + "-"+ dt.getFullYear(),
        isAdmin:false
      }
      // console.log(newAgent);
      //navigate to login screen
      axios.post(`${baseUrl}/api/common/auth/signUp`,newAgent)
      .then(res =>{
        ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
        if(res.data.msg == 'signUp successfull!'){
          this.handleClear();
          this.props.navigation.navigate('Login');
        }
      })
    }else{
      ToastAndroid.show('All fields mandetory to fill', ToastAndroid.SHORT);
    }
  }

  handleClear = () => {
    this.setState({
      name:"",
      email:"",
      password:"",
      mobile:""
    })
  }
    render() {
      return (
        <Container style={styles.container}>
        <StatusBar hidden />
        <View style={{flexDirection:'column'}}>
          <Text style={styles.appTitle}>Register </Text>
            {/* <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15, marginBottom:35}}>
              <TouchableOpacity
                    onPress={()=> this.handleGoogleSignUp()}
              >
                    <Ionicons style={styles.adminButton} name='logo-google' size={30}/>
              </TouchableOpacity>
            </View> */}
            <Text style={styles.smallTitle}>Be Traditional </Text>
          <Form style={styles.formView}>
                  <Item floatingLabel>
                     <Label>Name</Label>
                     <Input
                     value={this.state.name}
                     onChangeText = {(name)=> this.setState({name})}
                      />
                   </Item>
                   <Item floatingLabel>
                     <Label>Email</Label>
                     <Input
                     keyboardType="email-address"
                     value={this.state.email}
                     onChangeText = {(email)=> this.setState({email})}
                      />
                   </Item>
                   <Item floatingLabel>
                     <Label>Password</Label>
                     <Input
                     secureTextEntry
                     value={this.state.password}
                     onChangeText = {(password)=> this.setState({password})}
                     />
                   </Item>
                   <Item floatingLabel>
                     <Label>Mobile</Label>
                     <Input
                     keyboardType='number-pad'
                     value={this.state.mobile}
                     onChangeText = {(mobile)=> this.setState({mobile})}
                      />
                   </Item>
                 </Form>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15, marginBottom:35}}>
            <TouchableOpacity
                  onPress={()=> this.handleDefaultSignUp()}
                >
                  <Text style={styles.loginButton}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  onPress={()=> this.handleClear()}
            >
                  <Text style={styles.clearButton}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'Roboto', fontSize:15}}>Already a User?</Text>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('Login')}
            >
              <Text style={styles.signUpButton}>Login</Text>
            </TouchableOpacity>

            </View>
        </View>
    </Container>
      )
    }
  }

  const styles = StyleSheet.create({

    appTitle:{
      paddingTop:40,
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:30,
      alignSelf:'center'
    },
    smallTitle:{
      fontFamily:'Roboto',
      fontWeight:'200',
      fontSize:25,
      alignSelf:'center'
    },
    formView:{
      marginRight:20,
      marginLeft:20,
      paddingBottom:15,
    },
    agentButton:{
      marginRight:10,
      backgroundColor:'#FF9800',height:50, textAlign:'center', textAlignVertical:'center',
      width:50,
      borderRadius:75,
    },
    adminButton:{
      marginLeft:10,
      backgroundColor:'#FF9800',height:50, textAlign:'center', textAlignVertical:'center',
      width:50,
      borderRadius:75,
    },
    loginButton:{
      marginRight:10,
      backgroundColor:'#FF9800',height:50, textAlign:'center', textAlignVertical:'center',
      width:70,
      borderRadius:95,
    },
    clearButton:{
      marginLeft:10,
      backgroundColor:'#FF9800',height:50, textAlign:'center', textAlignVertical:'center',
      width:70,
      borderRadius:95,
    },
    signUpButton:{
      marginLeft:10,
      backgroundColor:'black',height:50, textAlign:'center', textAlignVertical:'center',
      width:70,
      color:'white',
      borderRadius:95,
    }

  })