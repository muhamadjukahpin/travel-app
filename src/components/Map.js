import { View, StyleSheet, Image, Dimensions } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";

const SCREEN_HEIGHT = Dimensions.get("window").height;

const HomeMap = () => {
  return (
    <View>
      <MapView
        style={styles.map}
        showsUserLocation={true}
        region={{
          latitude: 45.4807,
          longitude: -110.9676,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        }}
      >
        <Marker coordinate={{ latitude: 45.4807, longitude: -110.9676 }} />
      </MapView>
    </View>
  );
};

export default HomeMap;

const styles = StyleSheet.create({
  map: {
    height: SCREEN_HEIGHT - 180,
    width: "100%",
  },
});
