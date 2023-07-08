import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const SCREENHEIGHT = Dimensions.get("window").height;
const SCREENWIDTH = Dimensions.get("window").width;

const Bookmarks = ({ route }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.header}> Your Bookmarks </Text>
      <TouchableOpacity onPress={() => navigation.navigate("Boseman")}>
        <View style={styles.cardContainer}>
          <View style={styles.emojiContainer}>
            <Image
              source={require("../../assets/images/reservoir.jpg")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.detailText}>Bozeman Reservoir</Text>
            <Text style={styles.detailTextLocation}>Montana, USA</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("Boseman")}>
        <View style={styles.cardContainer}>
          <View style={styles.emojiContainer}>
            <Image
              source={require("../../assets/images/temple.jpg")}
              style={styles.image}
            />
          </View>
          <View>
            <Text style={styles.detailText}>Osaka Castle</Text>
            <Text style={styles.detailTextLocation}>Osaka, Japan</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Bookmarks;

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
  },

  cardContainer: {
    flexDirection: "row",
    backgroundColor: "black",
    height: 100,
    borderRadius: 15,
    top: 10,
    borderWidth: 2,
    borderColor: "white",
    marginRight: 10,
    padding: 10,
    marginVertical: 10,
  },

  emojiContainer: {
    width: 100,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    backgroundColor: "white",
    marginRight: 10,
  },

  image: {
    width: 100,
    height: 80,
    borderRadius: 15,
  },

  detailText: {
    fontSize: 20,
    fontFamily: "AlongSansMedium",
    color: "white",
  },

  detailTextLocation: {
    fontSize: 15,
    fontFamily: "AlongSansMedium",
    color: "white",
  },
});
