// import { useDeviceOrientation } from "@react-native-community/hooks";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  Button,
  Alert,
} from "react-native";

export default function App() {
  // const { landscape } = useDeviceOrientation();

  // console.log(useDeviceOrientation());
  const handlePress = () => console.log("pressed");

  return (
    <View style={styles.container}>
      <Text numberOfLines={1}>This is an image</Text>
      <Image
        source={{
          uri: "https://picsum.photos/200/300",
          height: 200,
          width: 300,
        }}
      />

      <Button title="Press me" onPress={() => Alert.alert("Be Humble")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // height: landscape ? "100%" : "30%",
    width: "100%",
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
