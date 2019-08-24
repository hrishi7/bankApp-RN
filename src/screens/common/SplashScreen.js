import React, { Component } from 'react'
import { StyleSheet, Text, View,Button,StatusBar,Image } from 'react-native';



export default class SplashScreen extends Component{


    render(){
      return(
        <View style={styles.container}>
          <StatusBar hidden />
          {/* <Image source={require('../../../assets/icon.png')} style={{ width:100, height:100, borderRadius:85}}/> */}
          <Text style={styles.appTitle}>Syndicate AffiliationApp</Text>
          </View>
      )
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    appTitle:{
      paddingTop:20,
      fontFamily:'Roboto',
      fontWeight:'bold',
      fontSize:30
    }
  });
