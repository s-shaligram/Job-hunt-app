import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/Components/Screens/loginScreen";
import { NavigationContainer } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { auth } from "./src/Components/Database/dbConfig";
import HomeScreen from "./src/Components/Screens/HomeScreen";
import TabBarDemo1 from "./src/Components/Navigation/tab";
import ReactNavigationBottomTabs from "./src/Components/Navigation/tab";
export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser !== null) {
        console.log("logged in_____________>: ", currentUser);
      }

      setUser(currentUser);
    });

    // Unsubscribe from auth state changes when component unmounts
    return unsubscribe;
  }, []);

  console.log("before____>", user);
  if (user) {
    return (
      <NavigationContainer>
        <ReactNavigationBottomTabs />
      </NavigationContainer>
    );
  } else {
    return (
        <NavigationContainer>
        <LoginScreen/>
        </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
