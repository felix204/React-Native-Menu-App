import  {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const { width }= Dimensions.get('window');

export default class FruitScreen extends Component {
    static navigationOptions = {
        title: 'COFFEE'
	};
    render() {

        const createThreeButtonAlert = () =>
        Alert.alert(
          "Latte",
          "Siparişinizi onaylamak istiyor musunuz?",
          [
            {
                text: "+",
                onPress: () => console.log("Add Latte")
              },
            {
              text: "Hayır",
              onPress: () => console.log("İptal")
            },
            { text: "Evet", onPress: () => console.log("Evet Latte") }
          ],
          { cancelable: false }
        );


        const createTwoButtonAlert = () =>
    Alert.alert(
      "Cappuccino",
      "Siparişinizi onaylamak istiyor musunuz?",
      [
        {
            text: "+",
            onPress: () => console.log("Add Cappuccino")
          },
        {
          text: "Hayır",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Evet", onPress: () => console.log("Evet Cappuccino") }
      ],
      { cancelable: false }
    );

      
    const createOneButtonAlert = () =>
    Alert.alert(
      "Americano",
      "Siparişinizi onaylamak istiyor musunuz?",
      [
        {
          text: "+",
          onPress: () => console.log("Add Americano")
        },
        {
          text: "Hayır",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Evet", onPress: () => console.log("Evet Americano") }
      ],
      { cancelable: false }
    );
        

        return (
                <View style={styles.Container}>

                    
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >

                        <Image
                            style={styles.fruitImg}
                            source = {require('../../assets/coffeeSliderThree.jpg')}
                            
                        />

                        <Image
                            style={styles.fruitImgs}
                            source = {require('../../assets/coffeeSliderOne.jpg')}
                        />

                        <Image
                            style={styles.fruitImgs}
                            source = {require('../../assets/coffeeSliderTwo.jpg')}
                        />

                    </ScrollView>
                        

                    <TouchableOpacity 
                    onPress= {createThreeButtonAlert}
                    style={styles.strecht}>
                        
                        <Image 
                            source = {require('../../assets/coffeeOne.jpg')}
                            style={styles.berryImg}
                        />
                        <Text style={styles.creamStyl}>
                            Latte
                        </Text>
                        <Text style={styles.informtn}> 
                            1 Shot esspresso, 200ml milk
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                    onPress= {createTwoButtonAlert}
                    style={styles.strechtOne}>
                    
                        <Image 
                                source = {require('../../assets/coffeeTwo.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.creamTwo}>
                                Cappuccino
                            </Text>
                            <Text style={styles.informtnTwo}> 
                                1 Shot esspresso, 200ml milk(extra sparkling)
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress= {createOneButtonAlert}
                    style={styles.strechtTwo}>

                        <Image 
                                source = {require('../../assets/coffeeThree.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.creamThree}>
                                Americano
                            </Text>
                            <Text style={styles.informtnThree}> 
                                2 Shot esspresso, enough water
                            </Text>

                    </TouchableOpacity>

                </View>    
        );
    }
}

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#98e9ef'
       
    },
    strecht: {
        alignSelf:  'center',
        flexDirection: "row",
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        width: 380,
        height: 90,
        borderRadius: 20,
        bottom: 30,
        marginVertical: 10,
        marginHorizontal: 10    
    },
    strechtOne: {
        alignSelf:  'center',
        flexDirection: "row",
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        width: 380,
        height: 90,
        borderRadius: 20,
        bottom: 30,
        marginVertical: 10,
        marginHorizontal: 10    
    },
    strechtTwo: {
        alignSelf:  'center',
        flexDirection: "row",
        backgroundColor: 'rgba(255, 0, 0, 0.2)',
        width: 380,
        height: 90,
        borderRadius: 20,
        bottom: 30,
        marginVertical: 10,
        marginHorizontal: 10
    },
    fruitImg: {
        width,
        height: 309,
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    fruitImgs: {
        width,
        height: 309,
        justifyContent: 'flex-start',
        alignItems: 'center',
        
    },
    berryImg: {
        width: 90,
        height: 90,
        borderRadius: 20,
    },
    creamStyl: {
      left: 100,
      top: 5 ,
      fontSize: 20,
      fontWeight: 'bold' 
    },
    informtn: {
        right: 40,
        top: 35,
        textAlign: 'center'
    },
    creamTwo: {
        left: 80,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnTwo: {
        top: 35,
        right: 106
    },
    creamThree: {
        left: 80,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnThree: {
        top: 36,
        right: 95
    }
});