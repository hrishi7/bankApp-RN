import React, { Component } from 'react'
import { Text, View,TouchableOpacity,ToastAndroid, AsyncStorage } from 'react-native'
import { Button } from 'native-base';
import { NavigationEvents } from "react-navigation";

import { baseUrl} from '../../../scretKey';

import axios from 'axios';

export default class SingleCustomer extends Component {
  constructor(props){
    super(props);
    this.state ={
      customer:null
    }
  }
  componentDidMount(){
    const { navigation } = this.props;
    const data = navigation.getParam('item', 'NO-data');
    if(data !== null){
      this.setState({ customer: data});
    }
  }
  updateStatus = async(status) =>{
    if(status == 'PENDING_FOR_CIBIL_SCORE'){
      let user = await AsyncStorage.getItem('USER');
      user = JSON.parse(user);
      axios.defaults.headers.common["Authorization"] = user.token;

      let res = await axios.post(`${baseUrl}/api/admin/customer/pendingForCibilScore/${this.state.customer._id}`);
      ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
      this.handleGetData();
    }
    else if(status == 'CIBIL_SCORE_COMPLETE'){
      let user = await AsyncStorage.getItem('USER');
      user = JSON.parse(user);
      axios.defaults.headers.common["Authorization"] = user.token;

      let res = await axios.post(`${baseUrl}/api/admin/customer/completeCibileScore/${this.state.customer._id}`);
      ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
      this.handleGetData();
    }
    else if(status == 'LOAN_APPROVED'){
      let user = await AsyncStorage.getItem('USER');
      user = JSON.parse(user);
      axios.defaults.headers.common["Authorization"] = user.token;

      let res = await axios.post(`${baseUrl}/api/admin/customer/loanApprovedComplete/${this.state.customer._id}`);
      ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
      this.handleGetData();
    }
    else {
      ToastAndroid('Incorrect Option', ToastAndroid.SHORT)
    }
  }
  handleGetData = async() =>{
    let user = await AsyncStorage.getItem('USER');
      user = JSON.parse(user);
      axios.defaults.headers.common["Authorization"] = user.token;

      let res = await axios.get(`${baseUrl}/api/common/customerRead/getOne/${this.state.customer._id}`);
      this.setState({ customer: res.data});
  }
  render() {
    return (
      <View>
        <Text style={{textAlign:'center',
        fontSize:25, color:'#9e9d24',
        fontWeight:'900'}}>Customer</Text>
        {this.state.customer?
         <View style={{alignItems:'center'}}>
         <Text style={{textAlign:'center', color:'#424242'}}>Customer Name: {this.state.customer.name}</Text>
         <Text style={{textAlign:'center', color:'#424242'}}>Customer Email: {this.state.customer.email}</Text>
         <Text style={{textAlign:'center', color:'#424242'}}>Customer Id: {this.state.customer.idProof.idProofNumber}</Text>
         <Text style={{textAlign:'center', color:'#424242'}}>Customer Loan: {this.state.customer.loanTitle}</Text>
         <Text style={{textAlign:'center', color:'#424242'}}>Customer Status: {this.state.customer.currentStatus}</Text>
       {
         this.state.customer.currentStatus === 'CREATED'?
         <TouchableOpacity
         onPress = {()=> this.updateStatus('PENDING_FOR_CIBIL_SCORE')}
         >
           <Text>CIBILSCORE CHECK</Text>
         </TouchableOpacity>:<Text></Text>
       }
       {
         this.state.customer.currentStatus === 'PENDING_FOR_CIBIL_SCORE'?
         <TouchableOpacity
         onPress = {()=> this.updateStatus('CIBIL_SCORE_COMPLETE')}
         >
           <Text>CIBILSCORE COMPLETE</Text>
         </TouchableOpacity>:<Text></Text>
       }
       {
         this.state.customer.currentStatus === 'CIBIL_SCORE_COMPLETE'?
         <TouchableOpacity
         onPress = {()=> this.updateStatus('LOAN_APPROVED')}
         >
           <Text>LOAN APPROVE</Text>
         </TouchableOpacity>:<Text></Text>
       }
       {
         this.state.customer.currentStatus === 'LOAN_APPROVED'?
           <Text>LOAN APPROVED SUCCESFULLY</Text>:<Text></Text>
       }
       </View>
        :<Text></Text>
        }

      </View>
    )
  }
}