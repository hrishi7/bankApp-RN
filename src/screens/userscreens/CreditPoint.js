import React, { Component } from 'react'
import { StyleSheet, Text, View,ActivityIndicator,AsyncStorage ,TouchableOpacity} from 'react-native';
import {Container, Content,Button,Thumbnail} from 'native-base'
import {Row, Grid} from 'react-native-easy-grid'

import { NavigationEvents } from "react-navigation";


import {baseUrl} from '../../../scretKey';
import axios from 'axios';

export default class CreditPoint extends Component {
  constructor(props){
    super(props);
    this.state={
      point:null,
      isLoaded:false,
    }
  }

  componentDidMount = async() =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;
    this.setState({  isLoaded:false})
    let res = await axios.get(`${baseUrl}/api/user/creditPoint/getCreditPointAndRupees`);
    this.setState({ point: res.data, isLoaded:true})
  }

  handleGetData = async() =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;
    this.setState({  isLoaded:false})
    let res = await axios.get(`${baseUrl}/api/user/creditPoint/getCreditPointAndRupees`);
    this.setState({ point: res.data, isLoaded:true})
  }
    render() {
      return (
        <View>
           <NavigationEvents onDidFocus={() => this.handleGetData()} />
           {this.state.point && this.state.isLoaded?
              (
                <View>
                <Text style={{alignSelf:'center'}}>Joined On: {this.state.point.joiningDate}</Text>
                <Text style={{alignSelf:'center'}}>Reward Point: {this.state.point.currentCreditPoint}</Text>
                <Text style={{alignSelf:'center'}}>Converted Cash Amount: INR. {this.state.point.rupees}</Text>
                <Text style={{alignSelf:'center'}}>Level: {this.state.point.label}</Text>
                <TouchableOpacity
                style={{height:45, margin:10}}
                onPress={()=> alert('encashed')}
                >
                <Text>EnCash to Real Money</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{height:45, margin:10}}
                onPress={()=> this.props.navigation.navigate('CashHistory')}
                >
                <Text>Withdraw History</Text>
                </TouchableOpacity>
            </View>

              ):<ActivityIndicator size="small" color="#00ff00" />
          }
        </View>

        // <Container style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center',marginTop: 80}}>
        //   <Content>
        //     <Grid >

        //     <Row size={10} >
        //       {/* <Thumbnail style={{width:'100%', height:200}} source={require('../../assets/creditPoint.jpg')} /> */}
        //     </Row>
        //     <Row size={50}>
        //       {this.state.point && this.state.isLoaded?
        //       (
        //         <Content>
        //           <Text>hi</Text>
        //         <Text style={{alignSelf:'center'}}>Joined On: {this.state.point.joiningDate}</Text>
        //         <Text style={{alignSelf:'center'}}>Reward Point: {this.state.point.currentCreditPoint}</Text>
        //         <Text style={{alignSelf:'center'}}>Converted Cash Amount: INR. {this.state.point.rupees}</Text>
        //         <Text style={{alignSelf:'center'}}>Level: {this.state.point.label}</Text>
        //       </Content>

        //       ):<ActivityIndicator size="small" color="#00ff00" />


        //       }

        //     </Row>
        //     <Row size={40}>
        //       <Content>
        //       <Button block
        //         style={{height:45, margin:10}}
        //         onPress={()=> alert('encashed')}
        //         >
        //         <Text>EnCash to Real Money</Text>
        //         </Button>
        //         <Button block success
        //         style={{height:45, margin:10}}
        //         onPress={()=> this.props.navigation.navigate('CashHistory')}
        //         >
        //         <Text>History payments</Text>
        //       </Button>
        //       </Content>
        //     </Row>
        //     </Grid>
        //   </Content>
        // </Container>

     )
    }
  }
