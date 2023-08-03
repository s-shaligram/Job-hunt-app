import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView,ActivityIndicator } from "react-native";
import { Picker } from "@react-native-picker/picker";
import styles from "./styles";
import {auth,db,} from "../../Database/dbConfig"
import { collection, addDoc ,Timestamp} from "firebase/firestore"; 
// const


const PostJobsScreen = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [field, setField] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [jobType, setJobType] = useState('');
    const [location, setLocation] = useState('');
    const [jobDescription, setJobDescription] = useState('');
    const [salary, setSalary] = useState('');
    const [isSaving,setIsSaving] = useState(false);

    const handleSubmit = async () => {
        // Perform submission logic here, e.g., send data to a backend API
        setIsSaving(true)
        try{
            const currentUser = auth.currentUser;
            const userEmail = currentUser ? currentUser.email : '';
            const docRef = await addDoc(collection(db, "jobPostings"), {
              jobTitle :jobTitle,
              field:field,
              companyName:companyName,
              jobType:jobType,
              location:location,
              jobDescription:jobDescription,
              salary:salary,
              postedBy: userEmail, // Include the current user's email as postedBy
              postedDate: Timestamp.fromDate(new Date())
            });
            console.log("Document written with ID: ", docRef.id);
            console.log('Job posting submitted successfully.');
            setIsSaving(false)
        } catch(error){
            console.log("Error in submission",error)
        }

        console.log({
            jobTitle,
            field,
            companyName,
            jobType,
            location,
            jobDescription,
            salary,
        });

        // Reset the form fields after submission (if needed)
        setJobTitle('');
        setField('');
        setCompanyName('');
        setJobType('');
        setLocation('');
        setJobDescription('');
        setSalary('');
    };

    const handleCancel = () => {
        // Handle cancel button action here, e.g., go back to the previous screen or clear form fields
        // For simplicity, we will just clear the form fields here
        setJobTitle('');
        setField('');
        setCompanyName('');
        setJobType('');
        setLocation('');
        setJobDescription('');
        setSalary('');
    };
//console.log("db @ posting:________________>",db)
    return (
        <ScrollView contentContainerStyle={styles.container}>
          {(isSaving)&&<ActivityIndicator size="large" color="#000ff"></ActivityIndicator>}
          <Text style={styles.label}>Job Title</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Job Title"
            value={jobTitle}
            onChangeText={setJobTitle}
          />
          <Text style={styles.label}>Field</Text>
          <Picker
            style={styles.input}
            selectedValue={field}
            onValueChange={(itemValue) => setField(itemValue)}
          >
            <Picker.Item label="Select Field" value="" />
            <Picker.Item label="IT" value="IT" />
            <Picker.Item label="Finance" value="Finance" />
            <Picker.Item label="HR" value="HR" />
            <Picker.Item label="Construction" value="Construction" />
          </Picker>
          <Text style={styles.label}>Company Name</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Company Name"
            value={companyName}
            onChangeText={setCompanyName}
          />
           <Text style={styles.label}>Job Type</Text>
            <Picker
        style={[styles.input,{marginLeft:-2}]}
        selectedValue={jobType}
        onValueChange={(itemValue) => setJobType(itemValue)}
      >
        <Picker.Item label="Select Job Type" value="" />
        <Picker.Item label="Contract" value="Contract" />
        <Picker.Item label="Part-time" value="Part-time" />
        <Picker.Item label="Full-time" value="Full-time" />
        <Picker.Item label="Seasonal" value="Seasonal" />
      </Picker>
          <Text style={styles.label}>Location</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Location"
            value={location}
            onChangeText={setLocation}
          />
          <Text style={styles.label}>Job Description</Text>
          <TextInput
            style={[styles.input, styles.textArea]}
            placeholder="Enter Job Description"
            multiline
            numberOfLines={4}
            value={jobDescription}
            onChangeText={setJobDescription}
          />
          <Text style={styles.label}>Salary</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter Salary"
            keyboardType="numeric"
            value={salary}
            onChangeText={setSalary}
          />
          <View style={styles.button_container}>
          <TouchableOpacity style={styles.button} onPress={handleSubmit} disabled ={isSaving}>
            <Text style={styles.buttonText}>Post Job</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.button,{backgroundColor: '#FF0000'}]}  onPress={() => console.log('Job posting canceled')}>
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
          </View>
         
        </ScrollView>
      );
    





}


export default PostJobsScreen;

