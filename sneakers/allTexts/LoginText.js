import { StyleSheet, Text } from 'react-native'
import React from 'react'

function LoginText({ children }) {
    return <Text style={styles.loginText}>{children}</Text>;

}

const styles = StyleSheet.create({
    loginText: {
        fontSize: 18,
        textTransform: "capitalize",
        fontWeight: "200",

    }
})

export default LoginText;