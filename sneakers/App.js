import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginText from './allTexts/LoginText';
import loginScreen from './screens/LoginScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function App() {
  // return <LoginScreen />;
  return (
    <View style={styles.container}>
      <LoginText>I love Allah!</LoginText>
      <MaterialCommunityIcons name="email" size={60} color="dodgerBlue" />
    </View>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
