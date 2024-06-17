import React from "react";
import { View, StyleSheet } from "react-native";

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]}/>
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]}/>
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]}/>
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null ]}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop: 4,
    },
    flagpole: {
        position: 'absolute',
        height: 14,
        width: 2,
        backgroundColor: '#222',
        marginLeft: 11,
    },
    flag:{
        position: 'absolute',
        height: 5,
        width: 6,
        backgroundColor: '#F22',
        marginLeft: 5
    },
    base1: {
        position: 'absolute',
        width: 6,
        height: 2,
        backgroundColor: '#222',
        marginLeft: 9,
        marginTop: 10

    },
    base2: {
        position: 'absolute',
        width: 10,
        height: 2,
        backgroundColor: '#222',
        marginLeft: 7,
        marginTop: 12
    },
    flagpoleBigger: {
        position: 'absolute',
        height: 28,
        width: 4,
        backgroundColor: '#222',
        marginLeft: 17,
    },
    flagBigger:{
        position: 'absolute',
        height: 10,
        width: 14,
        backgroundColor: '#F22',
        marginLeft: 3
    },
    base1Bigger: {
        position: 'absolute',
        width: 12,
        height: 4,
        backgroundColor: '#222',
        marginLeft: 13,
        marginTop: 20

    },
    base2Bigger: {
        position: 'absolute',
        width: 20,
        height: 4,
        backgroundColor: '#222',
        marginLeft: 9,
        marginTop: 24
    }
    
})