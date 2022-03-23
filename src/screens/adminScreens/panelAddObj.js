import React, { Component } from 'react';
import { Text, StyleSheet, View, TextInput, TouchableOpacity } from 'react-native';



export default class panelAddObj extends Component {

    static navigationOptions = {
        title: 'ÜRÜN EKLE'
	};

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.ınputArea}>
                    <View>
                        <Text style={styles.loginText}>
                            Ürün İsmi
                        </Text>
                        <TextInput 
                            style={styles.inputAreaOne}
                            
                        />

                        <Text style={styles.loginTextTwo}>
                            Ürün İçeriği
                        </Text>
                        <TextInput 
                            style={styles.inputAreaTwo}
                        />

                        <Text style={styles.loginTextThree}>
                            Ürün Fiyatı
                        </Text>
                        <TextInput 
                            style={styles.inputAreaThree}
                            keyboardType={"numeric"}
                        />
                        
                    </View>
                </View>
                    <TouchableOpacity
                        style={styles.addToc}
                    >
                        <Text style={{fontWeight: 'bold', top: 4}}>Yeni Ürün Oluştur</Text>
                    </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6e5fe'
    },
    ınputArea: {
        width: 300,
        height: 300,
        backgroundColor: 'rgba(52, 52, 52, 0.1)',
        borderRadius: 20,
        justifyContent: 'center'
    },
    loginText: {
        fontWeight: 'bold',
        left: 20
    },
    inputAreaOne: {
        borderRadius: 10,
        margin: 15,
        height: 40,
        borderColor: '#fbfbfb',
        borderWidth: 0.2
    },
    loginTextTwo: {
        fontWeight: 'bold',
        left: 20
    },
    inputAreaTwo: {
        borderRadius: 10,
        margin: 15,
        height: 40,
        borderColor: '#fbfbfb',
        borderWidth: 0.2
    },
    loginTextThree: {
        fontWeight: 'bold',
        left: 20
    },
    inputAreaThree: {
        borderRadius: 10,
        margin: 15,
        height: 40,
        borderColor: '#fbfbfb',
        borderWidth: 0.2
    },
    addToc: {
        borderRadius: 3,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        top: 20,
        width: 200,
        height: 30,
        backgroundColor: 'rgba(52, 52, 52, 0.2)',
        alignItems: 'center',
        borderWidth: 0.1
        
    }
});
