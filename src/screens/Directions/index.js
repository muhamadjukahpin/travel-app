import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import HomeMap from "../../components/Map";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const Directions = () => {
  const getCurrentLocation = () => {};

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={getCurrentLocation}>
        <Text style={styles.header}> Explore </Text>
      </TouchableOpacity>
      <HomeMap />
    </View>
  );
};

export default Directions;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: SCREENHEIGHT,
    width: SCREENWIDTH,
    padding: 20,
  },

  header: {
    fontFamily: "AlongSansExtraBold",
    color: "white",
    fontSize: 30,
    marginBottom: 10,
  },
});
