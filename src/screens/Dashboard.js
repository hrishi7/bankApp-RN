import React, { Component } from 'react'
import { StyleSheet, Text, View,Button,Image } from 'react-native';


export default class Dashboard extends Component {
  static navigationOptions = {
    drawerLabel: 'Dashboard',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('../../assets/icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };
    render() {
      return (
        <View>
          <Text> Dashboard </Text>
        </View>
      )
    }
  }

  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
  });