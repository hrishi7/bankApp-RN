import React, { Component } from 'react'
import {  View } from 'react-native'
import { Button, Container, Content,List, ListItem, Text,Left, Right,Icon,Body } from 'native-base';
import {Row, Grid} from 'react-native-easy-grid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Searchbar } from 'react-native-paper';
import {Ionicons} from '@expo/vector-icons'

export default class Notification extends Component {
  constructor(props){
    super(props);
    this.state={
      firstQuery: '',
    }
  }
  render() {
    return (
      <KeyboardAwareScrollView
      extraScrollHeight={90}
      >
        <Container>
          <Content>
            <Grid>
              <Row size={20}>
                <Searchbar
                style={{width:'100%'}}
                  placeholder="Search by Id or Name"
                  onChangeText={query => { this.setState({ firstQuery: query }); }}
                  value={this.state.firstQuery}
                />
              </Row>
              <Row size={80} >
                <List style={{width:'100%'}}>
                    <ListItem icon
                    onPress={()=>this.props.navigation.navigate('singleCustomer',{id:12})}
                    >
                      <Body>
                        <Text>Arun Sharma</Text>
                      </Body>
                      <Right>
                        <Ionicons name="ios-arrow-forward" size={30} />
                      </Right>
                  </ListItem>
                  <ListItem icon
                    onPress={()=>this.props.navigation.navigate('singleCustomer')}
                    >
                      <Body>
                        <Text>Arun Sharma</Text>
                      </Body>
                      <Right>
                        <Ionicons name="ios-arrow-forward" size={30} />
                      </Right>
                  </ListItem>
                  <ListItem icon
                    onPress={()=>this.props.navigation.navigate('singleCustomer')}
                    >
                      <Body>
                        <Text>Arun Sharma</Text>
                      </Body>
                      <Right>
                        <Ionicons name="ios-arrow-forward" size={30} />
                      </Right>
                  </ListItem>
              </List>
              </Row>
            </Grid>
          </Content>
        </Container>
      </KeyboardAwareScrollView>
      // <View>
      //   <Button onPress={()=> this.props.navigation.navigate('singleCustomer')}/>
      // </View>
    )
  }
}