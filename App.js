import React,{Component} from 'react';
import { StyleSheet, Text, View,Button ,Image} from 'react-native';

import { Container, Content, Icon, Header, Body } from 'native-base'

import { AppLoading } from 'expo';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
// import Icon from '@expo/vector-icons/Ionicons';


//import common screens from src
import SplashScreen from './src/screens/common/SplashScreen'
import Welcome from './src/screens/common/Welcome'

//user screens

import Login from './src/screens/userscreens/Login'
import Register from './src/screens/userscreens/Register'
import Dashboard from './src/screens/userscreens/Dashboard'
import Profile from './src/screens/userscreens/Profile'
import CreditPoint from './src/screens/userscreens/CreditPoint'
import AddCustomerDetails from './src/screens/userscreens/AddCustomerDetails'
import PendingCustomers from './src/screens/userscreens/PendingCustomers'
import CompletedCustomers from './src/screens/userscreens/CompletedCustomers'
import Customer from './src/screens/userscreens/Customer'
import Notification from './src/screens/userscreens/Notification'
import Products from './src/screens/userscreens/Products'
import CashHistory from './src/screens/userscreens/CashHistory'
import Product from './src/screens/userscreens/Product'


// import all admin screens
import AddProduct from './src/screens/adminscreens/AddProduct'
import AdminDashboard from './src/screens/adminscreens/AdminDashboard'
import AdminLogin from './src/screens/adminscreens/AdminLogin'
import AdminProfile from './src/screens/adminscreens/AdminProfile'
import AdminRegister from './src/screens/adminscreens/AdminRegister'
import AdminNotification from './src/screens/adminscreens/AdminNotification'
import AllAgent from './src/screens/adminscreens/AllAgent'
import AllBonus from './src/screens/adminscreens/AllBonus'
import AllCompletedCustomer from './src/screens/adminscreens/AllCompletedCustomer'
import AllPendingCustomer from './src/screens/adminscreens/AllPendingCustomer'
import AllProduct from './src/screens/adminscreens/AllProduct'
import AdminCreditPoint from './src/screens/adminscreens/AdminCreditPoint'
import EditBonus from './src/screens/adminscreens/EditBonus'
import EditCreditPoint from './src/screens/adminscreens/EditCreditPoint'
import SingleAgent from './src/screens/adminscreens/SingleAgent'
import SingleCustomer from './src/screens/adminscreens/SingleCustomer'
import SingleProduct from './src/screens/adminscreens/SingleProduct'


import {
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
  },200);
  }
  setTimePassed() {
    this.setState({timePassed: true});
}
  render(){
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    // else if(!this.state.timePassed){
    //   return <SplashScreen/>
    // }
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


//admin stacknavigators below and drawer navigator

const AdminDashboardStack = createStackNavigator({
  AdminDashboard:{ screen: AdminDashboard,
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
});
const AllProductStack = createStackNavigator({
  AllProduct:{ screen: AllProduct,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Loans & Policies',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  SingleProduct:SingleProduct
});
const AdminProfileStack = createStackNavigator({
  AdminProfile:{ screen: AdminProfile,
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
});
const AllAgentStack = createStackNavigator({
  AllAgent:{ screen: AllAgent,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Registered Agents',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  SingleAgent: SingleAgent
});
const AllBonusStack = createStackNavigator({
  AllBonus:{ screen: AllBonus,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Bonus List',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  EditBonus: EditBonus
});
const AllCompletedCustomerStack = createStackNavigator({
  AllCompletedCustomer:{ screen: AllCompletedCustomer,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Approved Customers',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  SingleCustomer: SingleCustomer
});
const AllPendingCustomerStack = createStackNavigator({
  AllPendingCustomer:{ screen: AllPendingCustomer,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Pending Customers',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  SingleCustomer: SingleCustomer
});

const AdminCreditPointStack = createStackNavigator({
  AdminCreditPoint:{ screen: AdminCreditPoint,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Credit Point',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  EditCreditPoint: EditCreditPoint
});


const AppAdminDashboardDrawerNavigator = createDrawerNavigator({
    AdminDashboard:{ screen: AdminDashboardStack},
    AllProduct:{ screen: AllProductStack},
    AddProduct:{ screen: AddProduct},
    AllPendingCustomer:{ screen: AllPendingCustomerStack},
    AllAgent:{ screen: AllAgentStack},
    AllBonus:{ screen: AllBonusStack},
    AdminCreditPoint:{ screen: AdminCreditPointStack},
    AllCompletedCustomer:{ screen: AllCompletedCustomerStack},
    AdminNotification:{ screen: AdminNotification},
    AdminProfile:{ screen: AdminProfileStack},
  },{
    // initialRouteName: 'AdminDashboard',
    drawerPosition: 'left',
    contentComponent: CustomDrawerContentComponentAdmin,
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
})




// User stacknavigator and drawernavigation
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
});
const AddCustomerDetailsStack = createStackNavigator({
  AddCustomerDetails:{ screen: AddCustomerDetails,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Adding Customer',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
});
const PendingCustomersStack = createStackNavigator({
  PendingCustomers:{ screen: PendingCustomers,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Pending Customers',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  Customer: Customer
});
const CompletedCustomersStack = createStackNavigator({
  CompletedCustomers:{ screen: CompletedCustomers,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Approved Customers',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  Customer:Customer
});
const CreditPointStack = createStackNavigator({
  CreditPoint:{ screen: CreditPoint,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Points',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  }
});
const ProductsStack = createStackNavigator({
  Products:{ screen: Products,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Loans and Policies',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
  Product: Product
});
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
});
const NotificationStack = createStackNavigator({
  Notification:{ screen: Notification,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Notification',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
});
const CashHistoryStack = createStackNavigator({
  CashHistory:{ screen: CashHistory,
    navigationOptions:({navigation})=>{
      return{
        headerTitle:'Past Withdraws',
        headerLeft:(
          <Ionicons style={{paddingLeft:10}}
           onPress={()=> navigation.openDrawer()}
          name="md-menu" size={30}/>
        )
      }
    }
  },
});

const AppDashboardDrawerNavigator = createDrawerNavigator({
    Dashboard:{ screen: DashboardStack},
    AddCustomerDetails:{ screen: AddCustomerDetailsStack},
    PendingCustomers:{ screen: PendingCustomersStack},
    CompletedCustomers:{ screen: CompletedCustomersStack},
    CreditPoint:{ screen: CreditPointStack},
    Products:{ screen: ProductsStack},
    Notification:{ screen: NotificationStack},
    CashHistory:{ screen: CashHistoryStack},
    Profile:{ screen: ProfileStack}
    }
  ,
  {
      drawerPosition: 'left',
      contentComponent: CustomDrawerContentComponent,
      drawerOpenRoute: 'DrawerOpen',
      drawerCloseRoute: 'DrawerClose',
      drawerToggleRoute: 'DrawerToggle',
  }
  )



//below main stack naigator
const AppStackNavigator = createStackNavigator({
  SplashScreen:{ screen: SplashScreen,
    navigationOptions: {
      header: null,
    }
},
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
