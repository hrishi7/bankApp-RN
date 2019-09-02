import React, { Component } from 'react'
import {  View ,ActivityIndicator,AsyncStorage,ToastAndroid} from 'react-native'
import { Button, Container, Content,List, ListItem, Text,Left, Right,Icon,Body } from 'native-base';
import {Row, Grid} from 'react-native-easy-grid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { NavigationEvents } from "react-navigation";


import {baseUrl} from '../../../scretKey';
import axios from 'axios';


export default class CashHistory extends Component {
  constructor(props){
    super(props);
    this.state={
      withdrawMoney:[],
      showLoading:0
    }
  }

  componentDidMount = async() =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;

    let res = await axios.get(`${baseUrl}/api/user/creditPoint/getPaymentHistory/getAll`);
    if(res.status !== 200){
      ToastAndroid.show('Server Error! Try after Sometime', ToastAndroid.SHORT);
    }
    this.setState({ withdrawMoney: res.data, showLoading:1})
  }

  handleGetData = async() =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;
    let res = await axios.get(`${baseUrl}/api/user/creditPoint/getPaymentHistory/getAll`);
    if(res.status !== 200){
      ToastAndroid.show('Server Error! Try after Sometime', ToastAndroid.SHORT);
    }
    this.setState({ withdrawMoney: res.data, showLoading:1})
  }

  render() {
    return (
      <KeyboardAwareScrollView
      extraScrollHeight={90}
      >
        <Container>
          <Content>
            <Grid>
            <NavigationEvents onDidFocus={() => this.handleGetData()} />

              <Row>
                <List style={{width:'100%'}}>
                {
                  this.state.withdrawMoney.length > 0 || this.state.showLoading ?

              (
                this.state.withdrawMoney.length >0 ?
                this.state.withdrawMoney.map((each, index)=>(

                  <ListItem icon
                  key={index}
                    >
                      <Body>
                        <Text>{each.withdrawAmount}</Text>
                      </Body>
                      <Right>
                      <Text>{each.withdrawDate}</Text>
                      </Right>
                  </ListItem>
      ))

                :
                <Text>No Data Available!</Text>
              ):
                <ActivityIndicator size="small" color="#00ff00" />
              }
              </List>
              </Row>
            </Grid>
          </Content>
        </Container>
      </KeyboardAwareScrollView>
    )
  }
}