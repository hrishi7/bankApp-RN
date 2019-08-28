import React, { Component } from 'react'
import { StyleSheet, Text, View ,ScrollView,AsyncStorage} from 'react-native';
import {Container, Content,Thumbnail,Form,Item,Label,Input,Button,H4} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import jwt_decode from "jwt-decode";

import axios from 'axios';
// import { baseUrl } from '../../scretKey';

export default class Profile extends Component {
  constructor(props){
    super(props);
    this.state ={
      joiningDate:"12-Jan-2019",
      lebels:"Lebel 1",
      email:"",
      name:"",
      mobile:null,
      profileImage:"https://i.ibb.co/cytsxWb/default-Men-Dp.png",
      signInType:"default"
    }
  }

  componentDidMount = async()=>{
    // try {
    //   let result = await AsyncStorage.getItem('USER');
    //   result = JSON.parse(result);
    //   const decodedUser = jwt_decode(result.token);
    //   // console.log(decodedUser);
    //   if (decodedUser !== null) {
    //     // We have data!!
    //     //collect all data
    //     let data = {
    //       isAdmin: decodedUser.isAdmin,
    //       email: decodedUser.email
    //     }
    //     axios.post(`${baseUrl}/api/common/auth/getUserData`,data )
    //     .then(res=>{
    //       let jointDt = res.data.joiningDate.split("T")[0].split("-").reverse().join("-")
    //       this.setState({
    //         email: res.data.email,
    //         name: res.data.name,
    //         mobile:res.data.mobile? res.data.mobile:null,
    //         joiningDate:jointDt?jointDt:"",
    //         lebels: res.data.lebels? res.data.lebels:"",
    //         profileImage: decodedUser.profileImage?decodedUser.profileImage: this.state.profileImage ,
    //         signInType:result.signInType
    //       })
    //     })

    //   }

    // } catch (error) {
    //   console.log(error);
    //   alert('problem while getting data')
    // }

  }

  handleUpdate = async() =>{
    console.log(this.state)
  }

  handleDeleteAccount = async() =>{
    confirm('Are you sure?');
    alert('account is deleted now!')
  }
  handleLogout = async() =>{
    await AsyncStorage.removeItem('USER');
    this.props.navigation.navigate('Login');
  }
    render() {
      return (
        <KeyboardAwareScrollView
        enableOnAndroid={true}
        // extraHeight={130}
        extraScrollHeight={90}
        >
        <Container>
        <Grid>
          <Row size={15} style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center',marginBottom: 0}}>
            <Thumbnail style={{width:90, height:90, borderRadius:60}} source={{uri:this.state.profileImage}} />
          </Row>
          <Row size={85} style={{backgroundColor:'#fff',marginBottom: 0}}>
            <Content>
            <Text style={{alignSelf:'center'}}>Joined On: {this.state.joiningDate}</Text>
            <Text style={{alignSelf:'center'}}>Lebel: {this.state.lebels}</Text>
              <Form>
                  <Item floatingLabel style={{marginHorizontal:15}}>
                    <Label>Email</Label>
                    <Input
                      textContentType="emailAddress"
                      value={this.state.email}
                      onChangeText = {(e)=>{ this.setState({ email:e})}}
                     />
                  </Item>
                  <Item floatingLabel  style={{marginHorizontal:15}}>
                    <Label>Name</Label>
                    <Input
                    textContentType="username"
                    value={this.state.name}
                    onChangeText = {(e)=>{ this.setState({ name:e})}}
                     />
                  </Item>
                  <Item floatingLabel  style={{marginHorizontal:15}}>
                    <Label>Mobile</Label>
                    <Input
                    textContentType="telephoneNumber"
                    value={this.state.mobile}
                    onChangeText = {(e)=>{ this.setState({ mobile:e})}}
                    keyboardType="number-pad"
                    />
                  </Item>
              </Form>
              <Button block
                  style={{height:70, margin:15,borderTopStartRadius:45,backgroundColor:'black', borderTopEndRadius:45}}
                  onPress={()=> this.handleUpdate()}
                  >
                  <Text style={{textAlign:'center', textAlignVertical:'center', color:'white', fontSize:25, fontFamily:'Roboto'}}>Update</Text>
              </Button>
              <Button block
                  style={{height:65, margin:15,borderTopStartRadius:40,backgroundColor:'black', borderTopEndRadius:45}}
                  onPress={()=> this.handleLogout()}
                  >
                  <Text style={{textAlign:'center', textAlignVertical:'center', color:'white', fontSize:22, fontFamily:'Roboto'}}>Logout</Text>
              </Button>
              <Button block
                  style={{height:65, margin:15,borderTopStartRadius:40,backgroundColor:'black', borderTopEndRadius:45}}
                  onPress={()=> this.handleDeleteAccount()}
                  >
                  <Text style={{textAlign:'center', textAlignVertical:'center', color:'white', fontSize:22, fontFamily:'Roboto'}}>Delete Account?</Text>
              </Button>
              </Content>
          </Row>

        </Grid>

        </Container>
        </KeyboardAwareScrollView>
      )
    }
  }

  const styles = StyleSheet.create({
    profileImage:{
      flex:1,
      // alignItems:'center', //vertical center
      justifyContent:'center', //horizontal center
      marginBottom: 20,
      // padding:10
    },
    formUser:{
      // marginTop:10
    },
    content: {
      marginBottom: 20,
  },
  lastRow: {
      marginBottom: 0,
  }
  })