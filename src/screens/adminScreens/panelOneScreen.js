
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, ScrollView } from 'react-native';
import { NavigationEvents } from 'react-navigation';




export default class panelOneScreen extends Component {

    static navigationOptions = {
        title: 'Admin Paneli'
	};

    render() {
        return (
            
            <ScrollView>
                <View style={styles.basketArea}>
                    <View style={styles.roundHeader}>
                        <Image 
                            source = {require('../../../assets/headerBackGroundSoon.jpg')}
                            style={styles.berryImg}
                        />
                    </View>
                    <View style={styles.basketStrech}>

                    </View>
                </View>
            </ScrollView>
            
        );
    }
}

const styles = StyleSheet.create({
    basketArea: {

    },
    roundHeader: {

    },
    basketStrech: {

    }
    
});