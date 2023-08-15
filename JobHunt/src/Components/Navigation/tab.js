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
import PostJobsScreen from "../Screens/PostJobsScreen";
import CustomDrawer from "./CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const loginType = "recruiter"
const ReactNavigationBottomTabs = () => {
  return (
      <Drawer.Navigator
        initialRouteName="MainTabs"
        drawerContent={(props) => <CustomDrawer {...props} />}
      >
        <Drawer.Screen name="MainTabs">
          {() => (
            <Tab.Navigator
              initialRouteName="Home"
              tabBarOptions={{
                // ...your tabBarOptions
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
              {loginType === "recruiter" ? (
                <Tab.Screen
                  name="PostJobsScreen"
                  component={PostJobsScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="person" color={color} size={35} />
                    ),
                  }}
                />
              ) : (
                <Tab.Screen
                  name="Profile"
                  component={ProfileScreen}
                  options={{
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="person" color={color} size={35} />
                    ),
                  }}
                />
              )}
            </Tab.Navigator>
          )}
        </Drawer.Screen>
      </Drawer.Navigator>
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
