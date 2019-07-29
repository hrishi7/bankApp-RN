import React, { Component } from 'react'
import { StyleSheet, Text, View ,ScrollView,TextInput} from 'react-native';
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



export default class AddCustomerDetails extends Component {

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
                                <TextInput />
                            </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Mobile</Label>
                                <TextInput />
                            </Item>

                                <Textarea style={{margin:9}} rowSpan={3} placeholder="Address" />

                                <Item picker style={{margin:8}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ width: '100%',margin:8 }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        // selectedValue={this.state.selected2}
                                        // onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Select Id Type" value="key0" />
                                        <Picker.Item label="Voter Id" value="key1" />
                                        <Picker.Item label="PAN" value="key2" />
                                        <Picker.Item label="Aadhar" value="key3" />
                                        <Picker.Item label="Driving Licence" value="key4" />
                                        <Picker.Item label="Passport" value="key5" />
                                    </Picker>
                                </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Id No</Label>
                                <TextInput />
                            </Item>
                                <Item picker style={{margin:8}}>
                                    <Picker
                                        mode="dropdown"
                                        iosIcon={<Icon name="arrow-down" />}
                                        style={{ margin:8 }}
                                        placeholder="Select your SIM"
                                        placeholderStyle={{ color: "#bfc6ea" }}
                                        placeholderIconColor="#007aff"
                                        // selectedValue={this.state.selected2}
                                        // onValueChange={this.onValueChange2.bind(this)}
                                    >
                                        <Picker.Item label="Select Loan Type" value="key0" />
                                        <Picker.Item label="Education Loan" value="key1" />
                                        <Picker.Item label="House Loan" value="key2" />
                                        <Picker.Item label="Car Loan" value="key3" />
                                        <Picker.Item label="Policy 1" value="key4" />
                                        <Picker.Item label="Policy 2" value="key5" />
                                    </Picker>
                                </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Loan Amount</Label>
                                <TextInput />
                            </Item>
                            <Item floatingLabel  style={{margin:8}}>
                                <Label>Agent Email</Label>
                                <TextInput />
                            </Item>
                        </Form>
                        <Button block
                            style={{height:60, margin:8, marginBottom:20}}
                            onPress={()=> alert('Updated')}
                            >
                            <Text>Save</Text>
                        </Button>
                        <Button block
                            style={{height:60, margin:8, marginBottom:20}}
                            onPress={()=> alert('Cleared')}
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