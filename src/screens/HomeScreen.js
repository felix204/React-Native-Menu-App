import {Component} from 'react';
import {  Text, View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

import IceCream from '../component/categorys/IceCream';
import Fruit from '../component/categorys/Fruit';
import Eat from '../component/categorys/Eat';
import Dessert from '../component/categorys/Dessert';
import ColdBeverage from '../component/categorys/ColdBeverage';
import Coffee from '../component/categorys/Coffee';




export default class HomeScreen extends Component {

  static navigationOptions = {
    title: 'HOME'
};

    render() {

      
      
        return (
          <ScrollView>
            <View style={styles.container}>

              <View style={styles.slideOne}>

                <IceCream />
                <Fruit />
              </View>


              <View style={styles.slideTwo}>
                <Eat />
                <Dessert />
              </View>


              <View style={styles.slideThree}>
                <ColdBeverage />
                <Coffee />
              </View>

            </View>
          </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
    },
    slideOne: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 5,
      paddingVertical: 5,
      marginHorizontal: 5,
    },
    slideTwo: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10,
      marginVertical: 10,
    },
    slideThree: {
      flexDirection: "row",
      justifyContent: "center",
      paddingHorizontal: 10,
      paddingVertical: 10,
      marginHorizontal: 10,
      borderRadius: 10
    },
    HomePage: {
      top: 1,
      fontFamily: "fantasy",
      fontSize: 16,
      color: "#00bcd4",
      justifyContent: 'flex-start'
    }
  }); 