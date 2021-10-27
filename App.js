import React,{useEffect, useState }from 'react';
import { StyleSheet, Text, View, Button,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/Home';
import LicensesScreen from './screens/Licenses';
import Search from 'react-native-vector-icons/FontAwesome'
import Icon from 'react-native-vector-icons/Fontisto'
import Icons from 'react-native-vector-icons/Ionicons'
import { TeamScreenNavigator , SearchScreenNavigator } from './CustomNavigation';

const Tab = createBottomTabNavigator();
export default function App() {

  const [isVisible, setIsVisible] = useState(true);

  const Hide_Splash_Screen=()=>{  
    setIsVisible(false)
  } 

  useEffect(() => {
    setTimeout(function(){  
      Hide_Splash_Screen();  
    }, 1000);  
  });

  if(isVisible)
  {
    return (
      <View style={styles.SplashScreen_RootView}>  
        <View style={styles.SplashScreen_ChildView}>  
              <Image source={{uri: 'https://assets.uigarage.net/content/uploads/2019/02/Screen-Shot-2019-02-25-at-12.38.36-pm.png'}} style={{width:'100%', height: '100%', resizeMode: 'contain'}} />  
        </View>  
    </View> 
    )
  }
  return (
    <NavigationContainer>
      <Tab.Navigator barStyle={{ backgroundColor: 'red' }}>
       <Tab.Screen name="Movies" component = {TeamScreenNavigator} options={{
            headerStyle: {
              backgroundColor: '#242424',
          },
            headerTintColor: '#d90909',
            headerTitle: "NETFLIX", tabBarIcon: () => (
            <Icon name="film" color={'red'} size={20} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarActiveBackgroundColor: '#000',
          tabBarInactiveBackgroundColor: '#000',
        }}/>
        <Tab.Screen name="Search" component={SearchScreenNavigator} options={{
            headerStyle: {
              backgroundColor: '#242424',
            },
              headerTintColor: '#d90909',
          headerTitle: "NETFLIX",
          tabBarActiveTintColor: 'red',
          tabBarIcon: () => (
            <Search name="search" color={'red'} size={20} />
          ),
          tabBarActiveTintColor: 'red',
          tabBarActiveBackgroundColor: '#000',
          tabBarInactiveBackgroundColor: '#000',
        }} />
        
        <Tab.Screen name="Exit" component = {LicensesScreen} options={{ tabBarIcon: () => (
            <Icons name="exit" color={'red'} size={25} />
          ),
        }}/>
     </Tab.Navigator>
   </NavigationContainer>
  );
}
const styles = StyleSheet.create(  
  {  
      MainContainer:  
      {  
          flex: 1,  
          justifyContent: 'center',  
          alignItems: 'center',  
          paddingTop: ( Platform.OS === 'ios' ) ? 20 : 0  
      },  
     
      SplashScreen_RootView:  
      {  
          justifyContent: 'center',  
          flex:1,
          position: 'absolute',  
          width: '100%',  
          height: '100%',  
        },  
     
      SplashScreen_ChildView:  
      {  
          justifyContent: 'center',  
          alignItems: 'center',  
          backgroundColor: 'black',  
          flex:1,  
      },  
  });