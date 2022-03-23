import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class Coffee extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Coffee}>
                <Image
                    style= {styles.coffeeImage}
                    source = {require('../../../assets/coffee.png')} 
                />
                <Text style={styles.CoffeeText}>
                    Coffee
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Coffee: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#03a9f4'
    },
    coffeeImage: {
        width: 100,
        height: 100,
        top: 30,
        left: 25
    },
    CoffeeText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 32,
        left: 28,
        color: '#ffffff'
    }
});