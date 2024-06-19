import React from "react";
import { View, StyleSheet, Image } from "react-native";

export default props => {

    const logo = require('../../assets/daki.png');

    return (
        <View style={styles.container}>
            {/* <View style={styles.coreMine}>
                <View style={styles.line}></View>
                <View style={[styles.line,{ transform: [{rotate: '45deg' }]}]}></View>
                <View style={[styles.line,{ transform: [{rotate: '90deg' }]}]}></View>
                <View style={[styles.line,{ transform: [{rotate: '135deg' }]}]}></View>
            </View> */}
            <Image source={logo} style={{width: 25, height: 25}} />
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    coreMine: {
        height: 14,
        width: 14,
        borderRadius: 10,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center'
        
    },
    line: {
        position: 'absolute',
        height: 3,
        width: 20,
        borderRadius: 3,
        backgroundColor: 'black'
    }
})