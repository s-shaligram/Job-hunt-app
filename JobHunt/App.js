import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './Components/Screens/loginScreen';
import { NavigationContainer } from '@react-navigation/native';
import { useEffect,useState } from 'react';
import {auth} from './Components/Database/dbConfig';
import HomeScreen from './Components/Screens/HomeScreen';

export default function App() {
const [user, setUser] = useState(null)

useEffect(() => {
  const unsubscribe = auth.onAuthStateChanged((currentUser) => {
      if (currentUser !== null) {
          console.log('logged in_____________>: ', currentUser);
          
      }

      setUser(currentUser);

  });

  // Unsubscribe from auth state changes when component unmounts
  return unsubscribe;
}, []);

console.log("before____>",user)
if(user){
return(
<NavigationContainer>
<HomeScreen />
</NavigationContainer>
)
}
else{
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  )
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
