import React, { Component } from 'react'
import { StyleSheet, View,Image } from 'react-native';

import {Container,Content,H2,Header,Button, Text,H3} from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class Welcome extends Component {
    render() {
      return (
        <Container>
        <Grid>
          <Row>
            <Col style={styles.WelcomeText}>
              <H2>Welcome To SyndiApp</H2>
              <Image source={require('../../assets/applogo.jpg')} style={{height: 120, width: 120, paddingTop:20}}/>
            </Col>
          </Row>
          <Row>
            <Col style={styles.buttons}>
              <H3>Choose who you are ?</H3>
            <Button block
            style={{height:60, margin:15}}
            onPress={()=> this.props.navigation.navigate('Login')}
            >
            <Text>Agent/User</Text>
            </Button>
            <Button block success
            style={{height:60, margin:15}}
            onPress={()=> this.props.navigation.navigate('AdminLogin')}
            >
              <Text>Admin</Text>
            </Button>
            </Col>
          </Row>
        </Grid>
      </Container>
      )
    }
  }

  const styles = StyleSheet.create({
    WelcomeText:{
      backgroundColor: '#635DB7',
      height: '100%',
      flex:1,
      alignItems:'center',
      justifyContent:'center',
      color:'#fff'
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
