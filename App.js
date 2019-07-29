import React,{Component} from 'react';
import { StyleSheet, Text, View,Button ,Image} from 'react-native';

import { Container, Content, Icon, Header, Body } from 'native-base'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import Icon from '@expo/vector-icons/Ionicons';


//import all screens from src
import SplashScreen from './src/screens/SplashScreen'
import Welcome from './src/screens/Welcome'
import Login from './src/screens/Login'
import Register from './src/screens/Register'
import Dashboard from './src/screens/Dashboard'
import Profile from './src/screens/Profile'
import CreditPoint from './src/screens/CreditPoint'
import Logout from './src/screens/Logout'
import AddCustomerDetails from './src/screens/AddCustomerDetails'
import pendingCustomers from './src/screens/pendingCustomers'
import completedCustomers from './src/screens/completedCustomers'
import singleCustomer from './src/screens/singleCustomer'



// import all admin screens
import AdminLogin from './src/screens/adminscreens/AdminLogin'
import AdminRegister from './src/screens/adminscreens/AdminRegister'
import AdminDashboard from './src/screens/adminscreens/AdminDashboard'




import {
  createSwitchNavigator,
  createDrawerNavigator,
  createAppContainer,
  createStackNavigator,
  DrawerItems
} from 'react-navigation'


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,  timePassed: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });
    setTimeout( () => {
      this.setTimePassed();
  },1000);
  }
  setTimePassed() {
    this.setState({timePassed: true});
}
  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    else if(!this.state.timePassed){
      return <SplashScreen/>
    }
    return (
      <AppContainer/>
    );
  }
}
const CustomDrawerContentComponent = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body >
        <Image

          style={styles.drawerImage}
          source={require('./assets/person.png')} />
          <Text style={{alignSelf:'center', paddingTop:10,justifyContent:'center', color:'white', fontSize:25}}>Hello! User</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>
);

const CustomDrawerContentComponentAdmin = (props) => (
  <Container>
    <Header style={styles.drawerHeader}>
      <Body >
        <Image

          style={styles.drawerImage}
          source={require('./assets/person.png')} />
          <Text style={{alignSelf:'center', paddingTop:10,justifyContent:'center', color:'white', fontSize:25}}>Hello! Admin</Text>
      </Body>
    </Header>
    <Content>
      <DrawerItems {...props} />
    </Content>

  </Container>
);

const DashboardDetail = props =>(
  <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
    <Text>DashboardDetail</Text>
  </View>
)
// const ProfileDetail = props =>(
//   <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
//     <Text>ProfileDetail</Text>
//   </View>
// )

const DashboardStack = createStackNavigator({
  Dashboard:{ screen: Dashboard,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Dashboard',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  DashboardDetail:{ screen: DashboardDetail}
})

const AdminDashboardStack = createStackNavigator({
  AdminDashboard:{ screen: AdminDashboard,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'AdminDashboard',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  }
})

const ProfileStack = createStackNavigator({
  Profile:{ screen: Profile,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Profile',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
})
const AddCustomerDetailsStack = createStackNavigator({
  AddCustomerDetails:{ screen: AddCustomerDetails,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Customer Details',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
})
const pendingCustomersStack = createStackNavigator({
  pendingCustomers:{ screen: pendingCustomers,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Pending Customer',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  singleCustomer:{ screen: singleCustomer,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Customer Info',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  }
})

const completedCustomersStack = createStackNavigator({
  completedCustomers:{ screen: completedCustomers,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Completed Customer',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  singleCustomer:{ screen: singleCustomer,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Customer Info',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  }
})

const CreditPointStack = createStackNavigator({
  CreditPoint:{ screen: CreditPoint,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'CreditPoint',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
})

const LogoutStack = createStackNavigator({
  Logout:{ screen: Logout,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Logout',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
})

const AppDashboardDrawerNavigator = createDrawerNavigator(
  {
    Dashboard:{ screen: DashboardStack},
    Profile:{ screen: ProfileStack},
    AddCustomerDetails:{ screen: AddCustomerDetailsStack},
    pendingCustomers:{ screen: pendingCustomersStack},
    completedCustomers:{ screen: completedCustomersStack},
    CreditPoint: { screen: CreditPointStack},
    Logout: { screen: LogoutStack},
  },{
    initialRouteName: 'Dashboard',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponent,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)

const AppAdminDashboardDrawerNavigator = createDrawerNavigator(
  {
    AdminDashboard:{ screen: AdminDashboardStack},
  },{
    initialRouteName: 'AdminDashboard',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponentAdmin,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
)

const AppStackNavigator = createStackNavigator({
  Welcome:{ screen: Welcome,
      navigationOptions: {
        header: null,
      }
  },
  Login: { screen: Login,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Agent',
      }
    }
  },
  AdminLogin: { screen: AdminLogin,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Admin',
      }
    }
  },
  Register: { screen: Register,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Agent',
      }
    }
  },
  AdminRegister: { screen: AdminRegister,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Admin',
      }
    }
  },
  Dashboard: { screen: AppDashboardDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
  AdminDashboard: { screen: AppAdminDashboardDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  }
})

const AppContainer = createAppContainer(AppStackNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader: {
    height: 200,
    backgroundColor: 'blue',
  },
  drawerImage: {
    height: 120,
    width: 120,
    borderRadius: 75,
    alignSelf:'center',
    justifyContent:'center'

  }
});
