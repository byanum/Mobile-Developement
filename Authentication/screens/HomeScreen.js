import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { auth } from '../firebase'

const HomeScreen = () => {
  return (

    <View  style={styles.container}>

        <Text style={styles.text}>{auth.currentUser.email}</Text>

    <TouchableOpacity style={styles.button}>

        <Text style={styles.buttonText}>Sign out</Text>

    </TouchableOpacity>
      
    </View>
  )
}

// style={styles.container}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        
        justifyContent: 'center',
        alignItems: 'center',


    },
    button:{
        backgroundColor: '#7900FF',
        width: '60%',
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 40,

    },
    buttonText:{
        color: 'white',
        fontWeight: '200',
        fontSize: 16,
    },
    text: {
        color: 'white',
        fontWeight: '200',
        fontSize: 16,
    }

})