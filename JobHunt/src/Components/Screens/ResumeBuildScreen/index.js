import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ViewMyResume from "./ViewMyResume";
import ResumeHome from "./ResumeHome";
const Stack = createStackNavigator();

const ResumeBuildScreen = () => {
  return (
    <Stack.Navigator initialRoutName="ResumeHome">
      <Stack.Screen
        name="ResumeHome"
        component={ResumeHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ViewMyResume"
        component={ViewMyResume}
        options={{ headerShown: true, headerTitle: "Resume" }}
      />
    </Stack.Navigator>
  );
};

export default ResumeBuildScreen;
