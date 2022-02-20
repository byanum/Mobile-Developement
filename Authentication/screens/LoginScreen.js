import {  KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { auth } from '../firebase';
import {  useNavigation  } from '@react-navigation/core'

const LoginScreen = () => {

    // creating states
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');


    const navigation = useNavigation();

    // u??????????
    // If data is saved then log in with the provided data// session
    useEffect(() => {
        auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate("Home")
            }
        })
    })
    // handling sign up
    const handleSignup = () => {
        auth
            .createUserWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))

    }
 // handling sign in
    const handleSignin = () => {
        auth
            .signInWithEmailAndPassword(email,password)
            .then(userCredentials => {
                const user = userCredentials.user;
                console.log(user.email);
            })
            .catch(error => alert(error.message))

    }

  return (
    <KeyboardAvoidingView behaviour="padding" style={styles.container}>
{/* text input starts here */}
<View style={styles.inputContainer}>

      <TextInput
      placeholder='Email'
        value={email}
        onChangeText={text => setEmail(text) }
        style={styles.input}
      ></TextInput>

    <TextInput
      placeholder='Password'
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={styles.input}
      ></TextInput>
</View>
{/* text input ends here */}

{/* buttons start here */}
<View style={styles.buttonContainer}>

    <TouchableOpacity style={styles.button}
    onPress={handleSignup}>

    <Text style={styles.buttonText}>Sign up</Text>

    </TouchableOpacity>



    <TouchableOpacity 
    style={[styles.button, styles.buttonOutline]}
    onPress={handleSignin}>

    <Text style={styles.buttonOutlineText}>Sign in</Text>

    </TouchableOpacity>
</View>
{/* button ends here */}
    </KeyboardAvoidingView>
  )
}

// style={styles.container}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
       

    },
    inputContainer: {
        width: '80%',


    },
    input: {
        backgroundColor : 'white',
        paddingHorizontal: 15,
        paddingVertical: 15,
        borderRadius: 10,
        marginTop: 5,


    },
    buttonContainer:{
        width: '60%',
        justifyContent: 'center',
        
        alignItems: 'center',
        marginTop: 40,
        flexDirection: 'row',

    },
    button:{
        backgroundColor: '#548CFF',
        width: '50%',
        padding: 12,
        borderRadius: 7,
        borderColor: 'white',
        borderWidth: 1,
        justifyContent: 'space-around',
        marginRight: 15,

    },
    buttonText:{
        color: 'white',
        fontWeight: '300',
        fontSize: 16,
    },
    buttonOutline:{
        width: '50%',
        backgroundColor: 'white',
        marginTop: 5,
        borderColor: '#7900FF',
        borderWidth: 1,
        padding: 12,
        borderRadius: 7,
        justifyContent: 'space-around',

    },
    buttonOutlineText:{
        color: '#548CFF',
        fontWeight: '300',
        fontSize: 16,

    },
})