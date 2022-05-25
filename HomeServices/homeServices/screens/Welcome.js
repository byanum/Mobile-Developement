import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/FontAwesome";

const welcome = () => {
  return (
    <View style={styles.first}>
      {/* <FontAwesomeIcon icon="fa-solid fa-house-circle-check" /> */}
      <View style={styles.tinyLogo}>
        <Icon name="house-user" size={30} color="#900" />
        <Image source={require("./images/logo.png")} />
      </View>

      <Image
        style={styles.tinyLogo}
        source={{
          uri: "https://reactnative.dev/img/tiny_logo.png",
        }}
      />
    </View>

    // {/* <View style={styles.items}> */}
    //   {/* This is where the tasks will go */}

    //   <View style={styles.itemLeft}>
    //     <TouchableOpacity style={styles.square}></TouchableOpacity>
    //     {/* <Text style={styles.itemLeft}>{props.text}</Text> */}
    //   </View>

    //   {/* circular */}
    //   <View style={styles.circle}></View>
    // </View>
  );
};
const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 66,
    height: 58,
  },
});
export default welcome;
