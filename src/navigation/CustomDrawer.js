import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import firestore from "@react-native-firebase/firestore";
import { AuthContext } from "../auth/AuthProvider";
import auth from "@react-native-firebase/auth";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

const CustomDrawer = (props) => {
  const { user } = useContext(AuthContext);
  const { data, setData } = useState();

  const userInfo = () => {
    firestore()
      .collection("users")
      .where("email", "==", user.email)
      .get()
      .then((documentSnapshot) => {
        const newData = documentSnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));

        console.log("CustomDrawer => user data", user);
        console.log("CustomDrawer => user data from firestore", newData);
      });
  };

  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{ backgroundColor: "black" }}
      >
        <ImageBackground
          source={require("../assets/images/dnavbg.jpg")}
          style={{ padding: 20 }}
        >
          <Image
            source={require("../assets/images/icon.jpg")}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              marginBottom: 10,
            }}
          />
        </ImageBackground>
        <TouchableOpacity onPress={userInfo}>
          <View>
            <Text style={styles.text}>{user.displayName}</Text>
          </View>
        </TouchableOpacity>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontFamily: "reost-bold",
    color: "white",
    textAlign: "center",
  },
});
