import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import styles from './styles'

//components
import PostJobsScreen from "../PostJobsScreen";

const Tab = createBottomTabNavigator();

const Screen1 = () => (
    <View style={styles.container}>
        <Text>Home</Text>
    </View>
);

const Screen2 = () => (
    <View style={styles.container}>
        <Text>Settings</Text>

    </View>
);

const HomeScreen = () => {
    console.log("Home Screen..")
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'PostJobsScreen') {
                        iconName = 'edit';
                    }

                    return <Icon name={iconName} size={size} color={color} />;
                },
            })}
        >
            <Tab.Screen name="Home" component={Screen1} />
            <Tab.Screen name="PostJobsScreen" component={PostJobsScreen} />
        </Tab.Navigator>
    );
}

export default HomeScreen;
