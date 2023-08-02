import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import styles from "./styles";

const HomeScreen = () => {
  console.log("Home Screen..");
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

export default HomeScreen;
