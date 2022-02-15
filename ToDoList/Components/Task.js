import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native';

const Task = (props) => {
    return (

        
      

        <View style={styles.items}>
        {/* This is where the tasks will go */}

        
        <View style={styles.itemLeft}>
           
         
            <TouchableOpacity style={styles.square}></TouchableOpacity>
           <Text style={styles.itemLeft}>{props.text}</Text>

        </View>

{/* circular */}
         <View style={styles.circle}></View>
       
        
      </View>
    )
}


const styles = StyleSheet.create({
    items : {
        backgroundColor: '#EBF5FB',
        padding: 20,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        
        justifyContent: 'space-between',
        marginBottom: 20,


    },
    itemLeft : {
        // aligning
        flexDirection: 'row',
        alignItems: 'center',
        // if gets too long will align itself
        flexWrap: 'wrap', 
    },
    square : {
        width: 24,
        height: 24,
        backgroundColor: '#2E86C1',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    circle : {
        width: 12,
        height: 12,
        borderColor: '#F5B7B1',
        borderWidth: 2,
        borderRadius: 5,

    },
});

export default Task;