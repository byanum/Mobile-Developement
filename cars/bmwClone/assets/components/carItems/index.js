import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";

const CarItem = (props) => {
  return (
    <View>
      {/* header container */}
      <View style={styles.headerContainer}>
        {/* title container */}

        <ImageBackground
          source={require("../../images/bmw6.jpg")}
          style={styles.image}
        />

        <View style={styles.titleContainer}>
          {/* texts */}
          <Text style={styles.heading}>Model i4 M50</Text>
          <Text style={styles.subheading}>Starting at $65,900</Text>
        </View>
      </View>
    </View>
  );
};

export default CarItem;
