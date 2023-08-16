import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import HomeScreen from "../Screens/HomeScreen";
import ResumeBuildScreen from "../Screens/ResumeBuildScreen";
import ProfileScreen from "../Screens/ProfileScreen";
import Logo from "../Logo/header";
import PostJobsScreen from "../Screens/PostJobsScreen";
import CustomDrawer from "./CustomDrawer";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { useStateContext } from "../../context/StateContext";
import ApplicantsScreen from "../Screens/ApplicantsScreen";

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const loginType = "recruiter";
const ReactNavigationBottomTabs = () => {
  const { authenticatedUser } = useStateContext();

  return (
    <Drawer.Navigator
      initialRouteName="MainTabs"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="MainTabs">
        {() => (
          <Tab.Navigator initialRouteName="Home">
            {authenticatedUser.userType === "Recruiter" ? (
              <Tab.Screen
                name="Applications"
                component={ApplicantsScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="message" color={color} size={35} />
                  ),
                }}
              />
            ) : (
              <Tab.Screen
                name="Resume"
                component={ResumeBuildScreen}
                options={{
                  tabBarIcon: ({ color, size }) => (
                    <Icon name="message" color={color} size={35} />
                  ),
                }}
              />
            )}
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
            {authenticatedUser.userType === "Recruiter" ? (
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
//         //</Drawer.Screen>
//       //</Drawer.Navigator>
//     );
// };
export default ReactNavigationBottomTabs;
