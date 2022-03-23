import  {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Dimensions } from 'react-native';
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
                            source = {require('../../assets/fruitThree.jpeg')}
                        />

                        <Image
                            style={styles.fruitImgs}
                            source = {require('../../assets/fruitTwo.jpeg')}
                        />

                    </ScrollView>
                        

                    <TouchableOpacity style={styles.strecht}>
                        
                        <Image 
                            source = {require('../../assets/berrySalad.jpg')}
                            style={styles.berryImg}
                        />
                        <Text style={styles.saladSty}>
                            Berry Salad
                        </Text>
                        <Text style={styles.informtn}> 
                            Served with berry, strawberry,
                             salad dressing.
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.strechtOne}>

                        <Image 
                                source = {require('../../assets/tropicalFruitSalad.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.saladTwo}>
                                Tropical Fruit Salad
                            </Text>
                            <Text style={styles.informtnTwo}> 
                            2 fresh ripe mangos, 1 banana, sliced
                            </Text>

                    </TouchableOpacity>

                    <TouchableOpacity style={styles.strechtTwo}>

                        <Image 
                                source = {require('../../assets/honeyLimeFruitSalad.jpg')}
                                style={styles.berryImg}
                        />
                            <Text style={styles.SaladThree}>
                            Honey Lime Fruit Salad
                            </Text>
                            <Text style={styles.informtnThree}> 
                            1 pound (500 g) strawberries, 3 kiwi fruits 
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
    saladSty: {
      left: 86,
      top: 5 ,
      fontSize: 20,
      fontWeight: 'bold' 
    },
    informtn: {
        right: 115,
        top: 35,
        textAlign: 'center'
    },
    saladTwo: {
        left: 50,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnTwo: {
        top: 35,
        right: 170
    },
    SaladThree: {
        left: 36,
        top: 5 ,
        fontSize: 20,
        fontWeight: 'bold'
    },
    informtnThree: {
        top: 36,
        right: 200
    }
});