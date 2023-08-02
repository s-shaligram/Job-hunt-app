import React from "react";
import { StyleSheet, Text, View } from "react-native";
// npm i @react-navigation/bottom-tabs react-native-elements
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../Screens/HomeScreen";
import ResumeBuildScreen from "../Screens/ResumeBuildScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import TabBar, { EventRegister } from "react-native-bottom-tab";

const Tab = createBottomTabNavigator();

const ReactNavigationBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // Default Color is blue you can change it by following props
        activeTintColor: "#ff4757",
        inactiveTintColor: "#ff6b81",
        // Default Background Color is white you can change it by following props
        activeBackgroundColor: "#ced6e0",
        inactiveBackgroundColor: "#ced6e0",
      }}
    >
      <Tab.Screen
        name="Build Resume"
        component={ResumeBuildScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};
export default ReactNavigationBottomTabs;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
