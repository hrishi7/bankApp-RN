import React, { Component } from 'react'
import { StyleSheet, Text, View ,ScrollView} from 'react-native';
import {Container, Content,Thumbnail,Form,Item,Label,Input,Button,H4} from 'native-base'
import { Col, Row, Grid } from 'react-native-easy-grid';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'



export default class Profile extends Component {
    render() {
      return (
        <KeyboardAwareScrollView
        enableOnAndroid={true}
        // extraHeight={130}
        extraScrollHeight={90}
        >
        <Container>
        <Grid>
          <Row size={15} style={{backgroundColor:'#fff', justifyContent:'center', alignItems:'center',marginBottom: 0}}>
            <Thumbnail style={{width:90, height:90, borderRadius:60}} source={require('../../assets/profileDp.jpg')} />
          </Row>
          <Row size={85} style={{backgroundColor:'#fff',marginBottom: 0}}>
            <Content>
            <Text style={{alignSelf:'center'}}>Joined On: 12-Jan-2019</Text>
            <Text style={{alignSelf:'center'}}>Lebel: Lebel 1</Text>
              <Form>
                  <Item floatingLabel style={{margin:15}}>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel  style={{margin:15}}>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel  style={{margin:15}}>
                    <Label>Name</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel  style={{margin:15}}>
                    <Label>Mobile</Label>
                    <Input />
                  </Item>
              </Form>
              <Button block
                  style={{height:60, margin:15}}
                  onPress={()=> alert('Updated')}
                  >
                  <Text>Update</Text>
              </Button>
              </Content>
          </Row>
          {/* <Row size={10} style={{backgroundColor:'#fff',marginTop: 0}}>
              <Button block
                  style={{height:40, width:'100%', margin:8}}
                  onPress={()=> alert('Updated')}
                  >
                  <Text>Update</Text>
              </Button>
          </Row> */}



        </Grid>

{/*
          <Grid>
            <Row>
              <Col>
              </Col>
            </Row>
            <Row style={styles.profileImage}>
              <Thumbnail style={{width:90, height:90}} source={require('../../assets/profileDp.jpg')} />
            </Row>
            <Row style={styles.formUser}>
              <Col>
              <Form>
                  <Item floatingLabel>
                    <Label>Email</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Password</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Confirm Password</Label>
                    <Input />
                  </Item>
                  <Item floatingLabel last>
                    <Label>Mobile</Label>
                    <Input keyboardType='number-pad' />
                  </Item>
              </Form>
              <Button block
                  style={{height:40, margin:8}}
                  onPress={()=> alert('Updated')}
                  >
                  <Text>Update</Text>
              </Button>
              </Col>
            </Row>
          </Grid>
         */}
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