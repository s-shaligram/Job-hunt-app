import React from "react";
import { StyleSheet, Text, View } from "react-native";
// npm i @react-navigation/bottom-tabs react-native-elements
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../Screens/HomeScreen";
import ResumeBuildScreen from "../Screens/ResumeBuildScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import TabBar, { EventRegister } from "react-native-bottom-tab";
import Logo from "../Logo/header";
import { color } from "react-native-elements/dist/helpers";
const Tab = createBottomTabNavigator();

const ReactNavigationBottomTabs = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        // Default Color is blue you can change it by following props
        activeTintColor: "white",
        inactiveTintColor: "black",
        // Default Background Color is white you can change it by following props
        activeBackgroundColor: "#0B92BA",
        inactiveBackgroundColor: "#0B92BA",
      }}
    >
      <Tab.Screen
        name="Resume"
        component={ResumeBuildScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="message" color={color} size={35} />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => <Logo screenName={"JobHunt"} />,
          tabBarIcon: ({ color, size }) => (
            <Icon name="home" color={color} size={35} />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Icon name="person" color={color} size={35} />
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
