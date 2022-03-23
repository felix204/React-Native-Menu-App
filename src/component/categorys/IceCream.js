import React, {Component} from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image, Button } from 'react-native';
import { NavigationEvents } from 'react-navigation';



export default class IceCream extends Component {
    render() {
        return (
            <View>
                <Button 
                    style={styles.Icream}
                    title="go to IceCream"
                    onPress={() => props.navigation.navigate('FruitSave')}
                />
                  <Image 
                        style= {styles.IceCreamImage}
                        source = {require('../../../assets/iceCream.png')} 
                    />
                    <Text style={styles.IceCreamText}>
                        Ice Cream
                    </Text>
  
                    
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    Icream: {
        width: 160,
        height: 180,
        paddingLeft: 10,
        borderRadius: 8,
        marginVertical: 10,
        marginHorizontal: 10,
        backgroundColor: '#00bcd4'
    },
    IceCreamImage: {
        width: 100,
        height: 100,
        top: 30,
        left: 25
    },
    IceCreamText: {
        fontSize: 25,
        fontFamily: "Cochin",
        top: 27,
        left: 18,
        color: '#ffffff'
    }
});