import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: "100%",
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "500",
  },
  subheading: {
    fontSize: 16,
    color: "#191919",
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute", //to see text on the screen as well
  },
});

export default styles;
