import React, { Component } from 'react'
import { StyleSheet, View ,StatusBar,TouchableOpacity } from 'react-native';
import {Container,Content,H2,Header,Button, Text,H3, Form, Item,Icon, Input, Label,H4,Fab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';


export default class AdminRegister extends Component {
    render() {
      return (
        <Container style={styles.container}>
        <StatusBar hidden />
        <View style={{flexDirection:'column'}}>
          <Text style={styles.appTitle}>Admin Register </Text>

          <Form style={styles.formView}>
                   <Item floatingLabel>
                     <Label>Email</Label>
                     <Input />
                   </Item>
                   <Item floatingLabel>
                     <Label>Password</Label>
                     <Input />
                   </Item>
                   <Item floatingLabel>
                     <Label>Confirm Password</Label>
                     <Input />
                   </Item>
                   <Item floatingLabel>
                     <Label>Mobile</Label>
                     <Input keyboardType='number-pad' />
                   </Item>
                 </Form>
          <View style={{flexDirection:'row', justifyContent:'center', alignItems:'center', paddingTop:15, marginBottom:35}}>
            <TouchableOpacity
                  onPress={()=> this.props.navigation.navigate('AdminDashboard')}
                >
                  <Text style={styles.loginButton}>SignUp</Text>
            </TouchableOpacity>
            <TouchableOpacity
                  onPress={()=> alert('clear')}
            >
                  <Text style={styles.clearButton}>Clear</Text>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection:'row', alignItems:'center',justifyContent:'center'}}>
            <Text style={{fontFamily:'Roboto', fontSize:15}}>Already Admin?</Text>
            <TouchableOpacity
            onPress={()=> this.props.navigation.navigate('AdminLogin')}
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