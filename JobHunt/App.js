import LoginScreen from "./src/Components/Screens/loginScreen";
import {NavigationContainer} from "@react-navigation/native";
import ReactNavigationBottomTabs from "./src/Components/Navigation/tab";
import { StateProvider, useStateContext} from "./src/context/StateContext";
import * as SplashScreen from "expo-splash-screen";
import { useState, useEffect, useCallback } from "react";
import { View } from "react-native";

SplashScreen.preventAutoHideAsync();

export default function App() {

    return (
        <StateProvider>
            <AppNavigator />
        </StateProvider>
    );
}
function AppNavigator() {
    const { authenticatedUser, loading } = useStateContext();
    const [appIsReady, setAppIsReady] = useState(false);

useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare().then();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

    if (loading) {
        return null;
    }

    return (
        
      <View style= {{flex:1}} onLayout={onLayoutRootView}>
        <NavigationContainer>
            {authenticatedUser ? <ReactNavigationBottomTabs /> : <LoginScreen />}
        </NavigationContainer>
        </View>
    );
}
