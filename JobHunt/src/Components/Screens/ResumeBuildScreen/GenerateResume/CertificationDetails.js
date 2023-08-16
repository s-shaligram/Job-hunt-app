import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const CertificationDetails = ({
  onNext,
  onBack,
  updateCertificationDetails,
}) => {
  const [certificationName, setCertificationName] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  // Add more state variables for other certification details
  const handleNext = () => {
    const newCertificateDetails = { certificationName, issuedBy };
    updateCertificationDetails(newCertificateDetails);
    onNext();
  };
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Certification Details</Text>
      <TextInput
        placeholder="Certification Name"
        value={certificationName}
        onChangeText={setCertificationName}
        style={styles.input}
      />
      <TextInput
        placeholder="Issued By"
        value={issuedBy}
        onChangeText={setIssuedBy}
        style={styles.input}
      />
      {/* Add more input fields for other certification details */}
      <View style={styles.buttonContainer}>
        <Button title="Back" onPress={onBack} />
        <Button title="Next" onPress={handleNext} />
      </View>
    </View>
  );
};

// Styles and exports similar to other components
const styles = StyleSheet.create({
  container: {
    // Styles for the container view
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
    flexDirection: "row",
    justifyContent: "space-between",
    marginStart: 130,
    marginEnd: 130,
  },
});

export default CertificationDetails;
