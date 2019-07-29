import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import {Container,Content,H2,Header,Button, Text,H3, Form, Item,Icon, Input, Label,H4,Fab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';


export default class Login extends Component {
    render() {
      return (
        <Container>
        <Grid>
          <Row>
            <Col style={{ marginTop:25}}>
              <H3 style={styles.topText}>Login With</H3>
                <Fab
                  style={{ backgroundColor: '#9f3799'}}
                  position="topLeft"
                >
                <Ionicons name='logo-facebook' size={30}/>
                </Fab>
                <Fab
                  style={{ backgroundColor: '#9f3799'}}
                  position="topRight"
                >
                <Ionicons name='logo-google' size={30}/>
                </Fab>

                <H3 style={styles.topText}>Be traditional!</H3>
                <Form style={{ margin:10}}>
                  <Item floatingLabel>
                    <Label>Username</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                </Form>
                <Button block
                style={{height:45, margin:10}}
                onPress={()=> this.props.navigation.navigate('Dashboard')}
                >
                <Text>Login</Text>
                </Button>
                <Button block success
                style={{height:45, margin:10}}
                onPress={()=> alert('clear')}
                >
                <Text>Clear</Text>
              </Button>
              <H3 style={styles.topText}>Not a User ?</H3>
              <Button dark
              onPress = {()=> this.props.navigation.navigate('Register')}
              style={{alignSelf:'center', marginTop:15}}
              ><Text> SignUp </Text></Button>
            </Col>
          </Row>
        </Grid>
      </Container>
      )
    }
  }

  const styles = StyleSheet.create({
    topText:{
      marginTop:35,
      // flex:1,
      // alignItems:'center',
      alignSelf:'center'
    },
    buttons:{
      backgroundColor: '#635DB7',
      height: '100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color:'#fff'
    }

  })