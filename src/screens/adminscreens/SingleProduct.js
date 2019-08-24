import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Button } from 'native-base';

export default class SingleProduct extends Component {
  constructor(props){
    super(props);
    this.state ={}
  }
  componentDidMount(){

    const { navigation } = this.props;
    const id = navigation.getParam('id', 'NO-ID');
    alert(JSON.stringify(id))
  }
  render() {
    return (
      <View>
        <Text>Single Product</Text>
      </View>
    )
  }
}