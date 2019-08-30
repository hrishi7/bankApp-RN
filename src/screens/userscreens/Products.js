import React, { Component } from 'react'
import {  View,ActivityIndicator,AsyncStorage } from 'react-native'
import { Button, Container, Content,List, ListItem, Text,Left, Right,Icon,Body } from 'native-base';
import {Row, Grid} from 'react-native-easy-grid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Searchbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'
import { NavigationEvents } from "react-navigation";


import { baseUrl} from '../../../scretKey';
import axios from 'axios';

export default class Products extends Component {
  constructor(props){
    super(props);
    this.state={
      firstQuery: '',
      products:[]
    }
  }
  componentDidMount = async() =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;

    let res = await axios.get(`${baseUrl}/api/common/productRead/getAll`);
    this.setState({ products: res.data})
  }

  handleGetData = async(searchText) =>{
    let user = await AsyncStorage.getItem('USER');
    user = JSON.parse(user);
    axios.defaults.headers.common["Authorization"] = user.token;

    let res = await axios.get(`${baseUrl}/api/common/productRead/getAll/${searchText}`);
    this.setState({ products: res.data})
  }
  render() {
    return (
      <KeyboardAwareScrollView
      extraScrollHeight={90}
      >
        <Container>
          <Content>
            <Grid>
            <NavigationEvents onDidFocus={() => this.handleGetData("")} />
              <Row size={20}>
                <Searchbar
                style={{width:'100%'}}
                  placeholder="Type Product title.."
                  onChangeText={query => { this.handleGetData(query)}}
                  // value={this.state.firstQuery}
                />
              </Row>
              <Row size={80} >
                <List style={{width:'100%'}}>
                {
                  this.state.products.length > 0 ?

              (
                this.state.products.map((each, index)=>(

                            <ListItem icon
                            key={index}
                            onPress={()=>this.props.navigation.navigate('Product',{'data':each})}
                              >
                                <Body>
                                  <Text>{each.productTitle}</Text>
                                </Body>
                                <Right>
                                  <Ionicons name="ios-arrow-forward" size={30} />
                                </Right>
                            </ListItem>
                ))
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