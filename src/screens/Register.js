import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native';
import {Container,Content,H2,Header,Button, Text,H3, Form, Item,Icon, Input, Label,H4,Fab} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';
import { Ionicons } from '@expo/vector-icons';


export default class Register extends Component {
    render() {
      return (
        <Container>
        <Grid>
          <Row>
            <Col style={{ marginTop:25}}>
              <H3 style={styles.topText}>Register With</H3>
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
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Confirm Password</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Mobile</Label>
                    <Input keyboardType='number-pad' />
                  </Item>
                </Form>
                <Button block
                style={{height:40, margin:8}}
                onPress={()=> this.props.navigation.navigate('Login')}
                >
                <Text>Register</Text>
                </Button>
                <Button block success
                style={{height:40, margin:8}}
                onPress={()=> alert('clear')}
                >
                <Text>Clear</Text>
              </Button>
              <H3 style={styles.topText}>Already a User ?</H3>
              <Button dark
              onPress = {()=> this.props.navigation.navigate('Login')}
              style={{alignSelf:'center', marginTop:15}}
              ><Text> Login </Text></Button>
            </Col>
          </Row>
        </Grid>
      </Container>
      )
    }
  }

  const styles = StyleSheet.create({
    topText:{
      marginTop:15,
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