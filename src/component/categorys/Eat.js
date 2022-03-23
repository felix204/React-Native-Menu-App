import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class Eat extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.Eat}>
                <Image
                    style={styles.EatImage}
                     source = {require('../../../assets/eat.png')}
                />
                <Text style={styles.EatText}>
                    EAT
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    Eat: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#009688'
    },
    EatImage: {
        width: 100,
        height: 100,
        top: 30,
        left: 25
    },
    EatText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 36,
        left: 55,
        color: '#ffffff'
    }
});