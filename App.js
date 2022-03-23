import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, Image, ScrollView} from 'react-native';

import 'react-native-gesture-handler';
import { createStackNavigator, createAppContainer } from 'react-navigation';



import HomeScreen from './src/screens/HomeScreen';
import IceCreamScreen from './src/screens/IceCreamScreen';
import FruitScreen from './src/screens/FruitScreen';
import EatScreen from './src/screens/EatScreen';
import DessertScreen from './src/screens/DessertScreen';
import CoffeeScreen from  './src/screens/CoffeeScreen';
import ColdBeverageScreen from  './src/screens/ColdBeverageScreen';
import panelOneScreen from './src/screens/adminScreens/panelOneScreen';
import panelAddObj from './src/screens/adminScreens/panelAddObj';


export default class LoginPage extends Component {
  render() {
    return (
        <AppContainer />
    );
  }
}

const AppNavigator = createStackNavigator({
  Panel: panelOneScreen,
  AddObj: panelAddObj,
  HomeSave: HomeScreen,
  ColdBeverage: ColdBeverageScreen,
  Coffee: CoffeeScreen,
  Eat: EatScreen,
  IceCreamSave: IceCreamScreen,
  Dessert: DessertScreen,
  FruitSave: FruitScreen,
  
  
  


}, {
  initalRouteName: "HomeSave",
  headerLayoutPreset: "center",
  defaultNavigationOptions: {
    headerBackTitle: 'Back',
    headerStyle: {
      backgroundColor: '#98e9ef'
    },
    headerTitleStyle: {
      fontWeight: 'bold'
    }
  }
});

const AppContainer = createAppContainer(AppNavigator);

