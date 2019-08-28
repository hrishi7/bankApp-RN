import React, { Component } from 'react'
import { StyleSheet, Text, View ,ScrollView,TextInput,ToastAndroid} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import {Container,
    Content,
    Thumbnail,
    Form,
    Item,
    Label,
    Icon ,
    Input,Button,Textarea,Picker} from 'native-base'
import { Row, Grid } from 'react-native-easy-grid';

import {androidClientId, baseUrl} from '../../../scretKey';

import axios from 'axios';

export default class AddCustomerDetails extends Component {
    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            address:"",
            mobile:"",
            idProofType:"",
            idProofNumber:"",
            loanTitle:"",
            loanAmount:"",
        }
    }

    checkValidation = () =>{
        if(this.state.name == '' &&
        this.state.email == '' && this.state.mobile
        && this.state.address == '' && this.state.idProofType ==''
        && this.state.idProofNumber=='' &&this.state.loanTitle == ''
        && this.state.loanAmount == ''
        ){
            return false;
        }
        return true;
    }
    handleSaveCustomer = async() => {

        if(this.checkValidation()){
            let newCustomer = {
            };
            let dt = new Date();
            newCustomer.name = this.state.name;
            newCustomer.email = this.state.email;
            newCustomer.address = this.state.address;
            newCustomer.mobile = this.state.mobile;
            newCustomer.idProofType = this.state.idProofType;
            newCustomer.idProofNumber = this.state.idProofNumber;
            newCustomer.loanTitle = this.state.loanTitle;
            newCustomer.loanAmount = this.state.loanAmount;
            newCustomer.applyDate = dt.getDate() + "-" + (dt.getMonth() <10? ("0"+ dt.getMonth()):dt.getMonth()) + "-"+ dt.getFullYear();;

            let res = await axios.post(`${baseUrl}/api/user/customer/customerRegister`,newCustomer);
            ToastAndroid.show(res.data.msg, ToastAndroid.SHORT);
            this.handleClear();
            this.props.navigation.navigate('PendingCustomers');
        }else{
            ToastAndroid.show('All fields mandetory to fill', ToastAndroid.SHORT);
        }
    }
    handleClear = () =>{
        this.setState({
            name:"",
            email:"",
            address:"",
            mobile:"",
            idProofType:"Id0",
            idProofNumber:"",
            loanTitle:"loan0",
            loanAmount:"",
        })
    }

    render() {
      return (
        <KeyboardAwareScrollView
        enableOnAndroid={true}
        // extraHeight={130}
        extraScrollHeight={90}
        >
            <Container style={{height: '100%'}}>
                <Grid>
                <Row size={5} style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center',marginBottom: 0}}>
                    <Text style={{alignSelf:'center'}}>Add a new Customer</Text>
                </Row>
                <Row size={95} style={{backgroundColor:'#fff',marginBottom: 0, justifyContent:'space-around'}}>
                    <Content>
                        <Form>
                            <Item floatingLabel style={{margin:8}}>
                                <Label>Name</Label>
                                <Input
                                value={this.state.name}
                                onChangeText={(name)=>this.setState({name})}
                                 />
                            </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Mobile</Label>
                                <Input
                                keyboardType="number-pad"
                                value={this.state.mobile}
                                onChangeText={(mobile)=>this.setState({mobile})}
                                 />
                            </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Email</Label>
                                <Input
                                keyboardType="email-address"
                                value={this.state.email}
                                onChangeText={(email)=>this.setState({email})}
                                 />
                            </Item>

                                <Textarea style={{margin:9}}
                                rowSpan={3} placeholder="Address"
                                value={this.state.address}
                                onChangeText={(address)=>this.setState({address})}
                                 />

                                <Item picker style={{margin:8}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: '100%',margin:8 }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.idProofType}
                                        onValueChange={(idProofType)=>this.setState({idProofType})}
                                    >
                                        <Picker.Item label="Select Id Type" value="Id0" />
                                        <Picker.Item label="Voter Id" value="Voter Id" />
                                        <Picker.Item label="PAN" value="PAN" />
                                        <Picker.Item label="Aadhar" value="Aadhar" />
                                        <Picker.Item label="Driving Licence" value="Driving Licence" />
                                        <Picker.Item label="Passport" value="Passport" />
                                    </Picker>
                                </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Id No</Label>
                                <Input
                                value={this.state.idProofNumber}
                                onChangeText={(idProofNumber)=>this.setState({idProofNumber})}
                                 />
                            </Item>
                                <Item picker style={{margin:8}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ margin:8 }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        selectedValue={this.state.loanTitle}
                                        onValueChange={(loanTitle)=>this.setState({loanTitle})}
                                    >
                                        <Picker.Item label="Select Loan Type" value="loan0" />
                                        <Picker.Item label="Education Loan" value="Education Loan" />
                                        <Picker.Item label="House Loan" value="House Loan" />
                                        <Picker.Item label="Car Loan" value="Car Loan" />
                                        <Picker.Item label="Policy 1" value="Policy 1" />
                                        <Picker.Item label="Policy 2" value="Policy 2" />
                                    </Picker>
                                </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Loan Amount</Label>
                                <Input
                                keyboardType="number-pad"
                                value={this.state.loanAmount}
                                onChangeText={(loanAmount)=>this.setState({loanAmount})}
                                 />
                            </Item>
                        </Form>
                        <Button block
                            style={{height:60, margin:8, marginBottom:20}}
                            onPress={()=> this.handleSaveCustomer()}
                            >
                            <Text>Save</Text>
                        </Button>
                        <Button block
                            style={{height:60, margin:8, marginBottom:20}}
                            onPress={()=> this.handleClear()}
                            >
                            <Text>Clear</Text>
                        </Button>
                    </Content>
                </Row>
                </Grid>
            </Container>
        </KeyboardAwareScrollView>
      )
    }
  }


  const styles = StyleSheet.create({
    profileImage:{
      flex:1,
      // alignItems:'center', //vertical center
      justifyContent:'center', //horizontal center
      marginBottom: 20,
      // padding:10
    },
    formUser:{
      // marginTop:10
    },
    content: {
      marginBottom: 20,
  },
  lastRow: {
      marginBottom: 0,
  }
  })