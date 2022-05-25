import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import LoginText from '../allTexts/LoginText';

function LoginScreen() {
    return (
        <View style={styles.container}>

            <LoginText style={styles.categoryItemText}>{item.title}</LoginText>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",

    }
})

export default LoginScreen;