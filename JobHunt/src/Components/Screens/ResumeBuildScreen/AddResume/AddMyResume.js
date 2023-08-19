// AddMyResume.js
import React, { useState, useCallback } from "react";
import { View, Text, Button, TouchableOpacity, Linking } from "react-native";
import { Picker } from "@react-native-picker/picker";
import * as DocumentPicker from "expo-document-picker";
import { FileSystem } from "react-native-web";
import { IntentLauncherAndroid } from "expo";
import HomeScreen from "../GenerateResume/HomeScreen";
import GenerateScreen from "../GenerateResume/GenerateScreen";
const AddMyResume = ({ navigation }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [uploadedResume, setUploadedResume] = useState(null);

  const handleUploadResume = async () => {
    try {
      let result = await DocumentPicker.getDocumentAsync({
        copyToCacheDirectory: true,
      });
      setUploadedResume(result); // Pass the result to the callback
    } catch (err) {
      console.warn("Document picking error:", err);
    }
  };

  const handleSelectGenerate = () => {
    setSelectedOption("generate");
    navigation.navigate("GenerateScreen");
  };

  const handleOpenResume = () => {
    if (
      uploadedResume &&
      uploadedResume.assets &&
      uploadedResume.assets.length > 0
    ) {
      const resumeUri = uploadedResume.assets[0].uri;

      // For mobile platforms, try to open using Linking
      Linking.canOpenURL(resumeUri).then((supported) => {
        if (supported) {
          Linking.openURL(resumeUri);
        } else {
          console.warn("Opening local file not supported on this platform");
        }
      });
    }
  };

  return (
    <View>
      {/* <Picker
        selectedValue={selectedOption}
        onValueChange={(itemValue) => setSelectedOption(itemValue)}
      >
        <Picker.Item label="Select an option" value={null} /> */}
      {/* <Picker.Item label="Upload Resume (Coming soon...)" /> */}
      {/* <Picker.Item label="Generate Resume" value="generate" />
      </Picker>

      {selectedOption === "upload" && (
        <Button title="Upload Resume" disabled={true} />
      )}

      {selectedOption === "generate" && (
        <Button title="Generate Resume" onPress={handleSelectGenerate} />
      )}
      {uploadedResume &&
        uploadedResume.assets &&
        uploadedResume.assets.length > 0 && (
          <View>
            <Text>Uploaded File Name: {uploadedResume.assets[0].name}</Text>
            <Text>File Size: {uploadedResume.assets[0].size} bytes</Text>
          </View>
        )} */}
      {/* Button to open the uploaded resume */}
      {/* <TouchableOpacity onPress={handleOpenResume}>
        <Text>Open Resume</Text>
      </TouchableOpacity> */}
      <GenerateScreen />
    </View>
  );
};

export default AddMyResume;
