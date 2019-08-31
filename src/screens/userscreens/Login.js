import React, { Component } from 'react'
import { StyleSheet, View,StatusBar,TouchableOpacity,AsyncStorage,ToastAndroid,BackHandler } from 'react-native';
import {Container, Text,Form,Item,Label,Input} from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Expo from "expo"
import jwt_decode from "jwt-decode";

import axios from 'axios';


import {baseUrl} from '../../../scretKey';


export default class Login extends Component {
  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackButtonClick);
}
handleBackButtonClick = () =>{
  return true;
}
  constructor(props){
    super(props);
    this.state ={
      email:"",
      password:""
    }
  }
  handleDefaultLogin = async () =>{
    let loginUser = {
      signInType:'default',
      email:this.state.email,
      password:this.state.password
    }

    // console.log(loginUser);
    //call backend and then set toke to axios auth header
    // then create user obj and
    // save asyncStorage

    //login
    let res = await axios.post(`${baseUrl}/api/common/auth/login`,loginUser);
      if(res.data.success == true){
        ToastAndroid.show('Login succesfull!', ToastAndroid.SHORT);
        let user = {
          token: res.data.token,
          isAuthenticated:true,
          signInType:'default',
        }
        axios.defaults.headers.common["Authorization"] = user.token;
        AsyncStorage.setItem('USER', JSON.stringify(user));
        this.handleClear();
        this.props.navigation.navigate('Dashboard');
      }
      else {
        ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
        this.handleClear();
      }
  }

  handleClear = () => {
    this.setState({
      email:"",
      password:"",
    })
  }

  handleGoogleLogin = async() =>{
    try {
      const result = await Expo.Google.logInAsync({
        androidClientId:
          "182867259493-1n2dcoq4isd0reck2593t5mmkaq5vpmr.apps.googleusercontent.com",
        //iosClientId: YOUR_CLIENT_ID_HERE,  <-- if you use iOS
        scopes: ["profile", "email"]
      })


      if (result.type === "success") {
        // let user ={
        //   isAuthenticated:true,

        //   accessToken:result.accessToken
        // }
        let newUser = {
          signInType:'google',
          isAdmin:false,
          name: result.user.name,
          email:result.user.email,
          profileImage: result.user.photoUrl? result.user.photoUrl:"https://i.ibb.co/cytsxWb/default-Men-Dp.png",
        }
        //backend call
        let res = await axios.post(`${baseUrl}/api/common/auth/login`,newUser);
        if(res.data.success == true){
          ToastAndroid.show('Login succesfull!', ToastAndroid.SHORT);
          let user = {
            token: res.data.token,
            isAuthenticated:true,
            signInType:'google',
            accessToken:result.accessToken
          }
          axios.defaults.headers.common["Authorization"] = user.token;
          AsyncStorage.setItem('USER', JSON.stringify(user));
          this.props.navigation.navigate('Dashboard');
        }
        else {
          ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
          this.handleClear();
        }


        // await AsyncStorage.setItem('USER_INFO', JSON.stringify(user));
        // this.props.navigation.navigate('Profile')
        // this.setState({
        //   signedIn: true,
        //   name: result.user.name,
        //   photoUrl: result.user.photoUrl,
        //   accessTokenObj: result.accessToken
        // })
      } else {
        alert("cancelled")
      }
    } catch (e) {
      alert("error"+ e)
    }
  }
  componentDidMount = async () =>{
    let result = await AsyncStorage.getItem('USER');
    if(result){
      result = JSON.parse(result);
      const decodedUser = jwt_decode(result.token);
      if(decodedUser !== null){
        this.props.navigation.navigate('Profile');
      }
    }
  }

    render() {
      return (
        <Container>
          <StatusBar hidden />
          <View style={{flexDirection:'column'}}>
            <Text style={styles.appTitle}>Login Via </Text>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15, marginBottom:35}}>
              <TouchableOpacity
                    onPress={()=> this.handleGoogleLogin()}
              >
                    <Ionicons style={styles.adminButton} name='logo-google' size={30}/>
              </TouchableOpacity>
            </View>
            <Text style={styles.smallTitle}>Be Traditional </Text>
            <Form style={styles.formView}>
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
            </Form>
            <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15, marginBottom:35}}>
              <TouchableOpacity
                    onPress={()=> this.handleDefaultLogin()}
                  >
                    <Text style={styles.loginButton}>Login</Text>
              </TouchableOpacity>
              <TouchableOpacity
                    onPress={()=> this.handleClear()}
              >
                    <Text style={styles.clearButton}>Clear</Text>
              </TouchableOpacity>
            </View>
            <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontFamily:'Roboto', fontSize:15}}>Not a User Yet?</Text>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Register')}
              >
                <Text style={styles.signUpButton}>SignUp</Text>
              </TouchableOpacity>

              </View>
              <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center', marginTop:10}}>
              <Text style={{fontFamily:'Roboto', fontSize:15}}>Not a Agent? Choose Correct then</Text>
              <TouchableOpacity
              onPress={()=> this.props.navigation.navigate('Welcome')}
              >
                <Text style={styles.signUpButton}>Choose</Text>
              </TouchableOpacity>

              </View>
          </View>
      </Container>
      )
    }
  }

  const styles = StyleSheet.create({
    // Container:{
    //   flexGrow:1,
    //   backgroundColor:'#FAFAFA',
    //   justifyContent:'center',
    //   alignItems:'center'
    // },
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
      width:100,
      // borderRadius:95,
      borderBottomLeftRadius:2,
      borderBottomRightRadius:15,
      borderTopRightRadius:2,
      borderTopLeftRadius:15
    },
    clearButton:{
      marginLeft:10,
      backgroundColor:'#FF9800',height:50, textAlign:'center', textAlignVertical:'center',
      width:100,
      // borderRadius:95
      borderBottomLeftRadius:15,
      borderBottomRightRadius:2,
      borderTopRightRadius:15,
      borderTopLeftRadius:2
    },
    signUpButton:{
      marginLeft:10,
      backgroundColor:'black',height:50, textAlign:'center', textAlignVertical:'center',
      width:90,
      color:'white',
      borderBottomLeftRadius:25,
      borderBottomRightRadius:25,
    }

  })