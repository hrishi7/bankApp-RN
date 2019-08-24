import React, { Component } from 'react'
import { StyleSheet, Text, View, } from 'react-native';
import {Container, Content,Button,Thumbnail} from 'native-base'
import {Row, Grid} from 'react-native-easy-grid'

export default class CreditPoint extends Component {
    render() {
      return (
        <Container style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center',marginTop: 80}}>
          <Content>
            <Grid >
            <Row size={10} >
              {/* <Thumbnail style={{width:'100%', height:200}} source={require('../../assets/creditPoint.jpg')} /> */}
            </Row>
            <Row size={50}>
              <Content>
                <Text style={{alignSelf:'center'}}>Joined On: 12-Jan-2019</Text>
                <Text style={{alignSelf:'center'}}>Reward Point:40</Text>
                <Text style={{alignSelf:'center'}}>Converted Cash Amount: Rs. 1250</Text>
              </Content>
            </Row>
            <Row size={40}>
              <Content>
              <Button block
                style={{height:45, margin:10}}
                onPress={()=> alert('encashed')}
                >
                <Text>EnCash to Real Money</Text>
                </Button>
                <Button block success
                style={{height:45, margin:10}}
                onPress={()=> alert('Previous encashes')}
                >
                <Text>History payments</Text>
              </Button>
              </Content>
            </Row>
            </Grid>
          </Content>
        </Container>
        // <View>
        //   <Text> CreditPoint </Text>
        // </View>
      )
    }
  }
