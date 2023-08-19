import React from "react";
import { View, Text, Button } from "react-native";

const ApplyScreen = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Apply for the Job
      </Text>
      <Button
        title="Go Back"
        onPress={() => {
          // Add logic to navigate back to the previous screen
        }}
      />
    </View>
  );
};

export default ApplyScreen;
