import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Task from './Components/Task';

export default function App() {

  // states: 1: track -- 2: function to set the state
  const [task, setTask] = useState();
  // store input in task 

  // for mapping
  const [taskItem, setTaskItem] = useState([]);

  const handleAddTask =() =>{
    Keyboard.dismiss();
    // array item and appending of 'task'
    setTaskItem([...taskItem, task])
    // so input gets empty
    setTask(null);
  }

  const deleteTask =(index) => {
    // creates new array and stores in itemcopu
    let itemCopy = [...taskItem];

    // removes item and store that in item copy
    itemCopy.splice(index, 1);

    // set the stat and deleted will bot be saved
    setTaskItem(itemCopy);

  }


  return (
    <View style={styles.container}>
     {/* {Today's Tasks} */}

     <View style={styles.taskWrapper}>
       <Text style={styles.sectionTitle}>Today's Task</Text>


       <View style={styles.items}>

       {
         taskItem.map((item, index) => {
           return (
             <TouchableOpacity key={index} onPress={() =>deleteTask(index)}>
             <Task  text={item} />
             </TouchableOpacity>
           )

         })
       }
       
    </View>
    </View>

    {/* Write a task */}
    {/* It push ups the button when kkeyboard comes */}
    <KeyboardAvoidingView
      behavior ={Platform.OS === 'ios' ? 'padding': 'height'}
      style={styles.writeTaskWrapper}>

      <TextInput style={styles.input} clearButtonMode='always' placeholder={'Write a task'} onChangeText={text => setTask(text)}/>

      {/* button: + button */}
      <TouchableOpacity onPress={() => handleAddTask()}>
        <View style={styles.addWrapper}>
          <Text style={styles.addText}>+</Text>

        </View>
      </TouchableOpacity>

    </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    

  },
  taskWrapper : {
    paddingTop: 50,
    paddingHorizontal: 20,

  },
  sectionTitle : {
    fontSize: 24,
    fontWeight: 'bold',
  },
items : {
  marginTop: 30,

},
writeTaskWrapper: {
  position: 'absolute',
  bottom:45,
  width: '100%',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  backgroundColor: '#FFFFFF',


},
input: {
  paddingVertical: 15,
  paddingHorizontal: 15,
  width: 250,
  backgroundColor: '#FFF',
  borderRadius: 60,
  borderColor: '#D6EAF8',
  borderWidth: 2,


},
addWrapper: {
  width: 60,
  height: 60,
  backgroundColor: '#FFF',
  borderRadius: 60,
  justifyContent: 'center',
  alignItems: 'center',
  borderColor: '#D6EAF8',
  borderWidth: 2,

},
addText: {},
});
