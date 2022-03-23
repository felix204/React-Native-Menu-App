import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';



export default class ColdBeverage extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.ColdBeverage}>
                <Image 
                    style= {styles.coldBeverageImage}
                    source = {require('../../../assets/coldBeverage.png')} 
                />
                <Text style={styles.ColdBeverageText}>
                    Cold 
                </Text>
                <Text style={styles.BeverageText}>
                    Beverage
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    ColdBeverage: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#8bc34a'
    },
    coldBeverageImage: {
        width: 100,
        height: 100,
        top: 20,
        left: 25
    },
    ColdBeverageText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 20,
        left: 43,
        color: '#ffffff'
    },
    BeverageText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 10,
        left: 18,
        color: '#ffffff'
    }
});