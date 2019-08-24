import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class AddProduct extends Component {
  render() {
    return (
      <View>
        <Text> AddProduct Form </Text>
      </View>
    )
  }
}

StyleSheet.create({
    conatiner:{
        flexGrow:1,
        alignItems:'center',
        justifyContent:"center"
    }
})