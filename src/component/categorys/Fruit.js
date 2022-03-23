import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class Fruit extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Fruit}>
                <Image
                    style={styles.FruitImage} 
                     source = {require('../../../assets/fruit.png')}
                />
                <Text style={styles.fruitText}>
                    Fruit
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Fruit: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#f44336'
    },
    FruitImage: {
        width: 100,
        height: 100,
        top: 30,
        left: 25
    },
    fruitText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 27,
        left: 48,
        color: '#ffffff'
    }
});