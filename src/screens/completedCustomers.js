import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base';

export default class completedCustomers extends Component {
  render() {
    return (
      <View>
        <Button onPress={()=> this.props.navigation.navigate('singleCustomer')}/>
      </View>
    )
  }
}