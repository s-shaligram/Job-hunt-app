
import React from 'react';
import { View, Text} from 'react-native';


const ResumeDetail = ({ route }) => {
    const { resume } = route.params;
  
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Title: {resume.title}</Text>
        <Text style={styles.details}>Details: {resume.details}</Text>
      </View>
    );
  };
  
  export default ResumeDetail;