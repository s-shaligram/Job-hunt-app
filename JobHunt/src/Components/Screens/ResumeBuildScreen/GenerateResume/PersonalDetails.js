import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const PersonalDetails = ({ onNext, onBack, updatePersonalDetails }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [personalinfo, setPersonalinfo] = useState([]);
  // Add more state variables for other personal details
  const handleNext = () => {
    const newPersonalData = { name, email }; // Create an object with collected data
    //setPersonalinfo([personalinfo, newPersonalData]);
    updatePersonalDetails(newPersonalData); // Update parent component's state
    onNext(); // Move to the next step
    console.log("new PD:", newPersonalData);
  };
  return (
    <View>
      <Text style={styles.heading}>Personal Details</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.input}
      />
      {/* Add more input fields for other personal details */}
      <View style={styles.buttonContainer}>
        {/* <Button title="Back" onPress={onBack} /> */}
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //padding: 40,
    //backgroundColor: "red", // Background color
  },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderWidth: 2,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderRadius: 5,
    fontSize: 20,
  },
  button: {
    backgroundColor: "red",
  },
  buttonContainer: {
    alignItems: "center",
  },
});

export default PersonalDetails;
