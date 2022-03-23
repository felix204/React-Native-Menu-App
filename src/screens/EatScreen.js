import  {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';

const { width }= Dimensions.get('window');

export default class FruitScreen extends Component {
    static navigationOptions = {
        title: 'EAT'
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
            //ScrollView = Slider
                <View style={styles.Container}>

                    
                    <ScrollView
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                    >


                        


                        <Image
                            style={styles.fruitImg}
                            source = {require('../../assets/eatSliderOne.jpg')}
                            
                        />

                        <Image
                            style={styles.fruitImgs}
                            source = {require('../../assets/eatSliderTwo.jpg')}
                        />

                        <Image
                            style={styles.fruitImgs}
                            source = {require('../../assets/eatSliderThree.jpg')}
                        />

                    </ScrollView>
                        

                    <TouchableOpacity style={styles.strecht}>
                        
                        <Image 
                            source = {require('../../assets/eatHamburger.jpg')}
                            style={styles.berryImg}
                        />
                        <Text style={styles.burgerStyl}>
                            Classic Burger
                        </Text>
                        <Text style={styles.informtn}> 
                        Salt and pepper, 2 tbsp oil, 800g - 1kg Meat
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.strechtOne}>

                        <Image 
                                source = {require('../../assets/eatChicken.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.chickenTwo}>
                                Roasted Chicken
                            </Text>
                            <Text style={styles.informtnTwo}> 
                                1 – Whole Chicken, olive oil – to drizzle  
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.strechtTwo}>

                        <Image 
                                source = {require('../../assets/eatNoodles.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.noodlesThree}>
                                Zucchini Noodles
                            </Text>
                            <Text style={styles.informtnThree}> 
                                2 large zucchini, 1 teaspoon minced garlic
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
    burgerStyl: {
      left: 70,
      top: 5 ,
      fontSize: 20,
      fontWeight: 'bold' 
    },
    informtn: {
        right: 125,
        top: 35,
        textAlign: 'center'
    },
    chickenTwo: {
        left: 65,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnTwo: {
        top: 35,
        right: 140
    },
    noodlesThree: {
        left: 55,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnThree: {
        top: 36,
        right: 150
    }
});