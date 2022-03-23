import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class Dessert extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Dessert}>
                <Image 
                    style= {styles.DessertImage}
                    source = {require('../../../assets/dessert.png')} 
                />
                <Text style={styles.dessertText}>
                    Dessert
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Dessert: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#673ab7'
    },
    DessertImage: {
        width: 100,
        height: 100,
        top: 30,
        left: 25
    },
    dessertText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 27,
        left: 30,
        color: '#ffffff'
    }
});