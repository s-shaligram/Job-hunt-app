import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import styles from './styles';
import { auth } from '../../Database/dbConfig';
import {signInWithEmailAndPassword} from "firebase/auth";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth,email, password)
      .then((userCredential) => {
        // User successfully logged in
        const { user } = userCredential;
        console.log(`Logged in as ${user.email}`);
      })
      .catch((error) => {
        // Handle login errors
        console.log(`Login failed: ${error.message}`);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={setPassword}
        value={password}
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
